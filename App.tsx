
import React, { useState, useCallback } from 'react';
import { Language, FormData } from './types';
import { translations } from './constants/translations';
import { generatePlan } from './services/geminiService';
import SelectInput from './components/SelectInput';
import CheckboxGroup from './components/CheckboxGroup';
import SliderInput from './components/SliderInput';

const initialFormData: FormData = {
  horasTrabalho: '6-8h',
  alimentacaoOntem: 'Ok',
  sono: '6-8h',
  usoAlcool: 'Nada',
  usoSubstancias: 'Nada',
  energia: 5,
  humor: 5,
  tipoDia: 'Normal',
  objetivosPrincipais: [],
  metasSemana: [],
  metasMes: [],
  podeTreinar: 'Sim',
  localTreino: 'Academia',
  tempoTreino: '45 min',
  nivelTreino: 'Intermediário',
  limitacoes: ['Nenhuma'],
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('pt');
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const t = translations[language];

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => {
        const currentValues = prev[name as keyof FormData] as string[];
        if (checked) {
          return { ...prev, [name]: [...currentValues, value] };
        } else {
          return { ...prev, [name]: currentValues.filter(v => v !== value) };
        }
      });
    } else {
       setFormData(prev => ({
         ...prev,
         [name]: type === 'range' ? parseInt(value, 10) : value,
       }));
    }
  }, []);

  const handleGeneratePlan = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const plan = await generatePlan(language, formData);
      setResult(plan);
    } catch (err) {
      setError(t.error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const renderResult = (text: string) => {
    const sections = text.split(/#\s\d\..+/).filter(s => s.trim() !== '');
    const titles = text.match(/#\s\d\..+/g) || [];

    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">{t.results.title}</h2>
        {titles.map((title, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title.replace('# ', '')}</h3>
            <div className="prose prose-invert text-gray-300 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: sections[index].trim().replace(/\*/g, '•').replace(/\n/g, '<br />') }}>
            </div>
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 relative">
           <div className="absolute top-0 right-0">
                <label htmlFor="language" className="sr-only">{t.languageSelector}</label>
                <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    className="bg-gray-700 text-white rounded-md py-1 px-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                    <option value="pt">Português</option>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>
            </div>
          <h1 className="text-5xl font-extrabold text-cyan-400 tracking-tight">{t.title}</h1>
          <p className="text-lg text-gray-300 mt-2">{t.subtitle}</p>
        </header>

        <main>
          <div className="bg-gray-800 p-6 rounded-lg mb-8 shadow-lg">
            <p className="text-gray-300 leading-relaxed">{t.intro}</p>
            <p className="text-sm text-yellow-400 mt-4 italic">{t.warning}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 bg-gray-800 p-6 rounded-lg shadow-lg">
            
            {/* Column 1 */}
            <div>
              <h2 className="text-xl font-bold text-cyan-400 border-b border-gray-600 pb-2 mb-4">Dados do -1 (ontem) e estado atual</h2>
              <SelectInput label={t.form.horasTrabalho.label} name="horasTrabalho" value={formData.horasTrabalho} onChange={handleInputChange} options={t.form.horasTrabalho.options.map(o => ({value: o.value, label: o.label}))} />
              <SelectInput label={t.form.alimentacaoOntem.label} name="alimentacaoOntem" value={formData.alimentacaoOntem} onChange={handleInputChange} options={t.form.alimentacaoOntem.options.map(o => ({value: o.value, label: o.label}))} />
              <SelectInput label={t.form.sono.label} name="sono" value={formData.sono} onChange={handleInputChange} options={t.form.sono.options.map(o => ({value: o.value, label: o.label}))} />
              <SelectInput label={t.form.usoAlcool.label} name="usoAlcool" value={formData.usoAlcool} onChange={handleInputChange} options={t.form.usoAlcool.options.map(o => ({value: o.value, label: o.label}))} />
              <SelectInput label={t.form.usoSubstancias.label} name="usoSubstancias" value={formData.usoSubstancias} onChange={handleInputChange} options={t.form.usoSubstancias.options.map(o => ({value: o.value, label: o.label}))} />
              <SliderInput label={t.form.energia} name="energia" value={formData.energia} onChange={handleInputChange} />
              <SliderInput label={t.form.humor} name="humor" value={formData.humor} onChange={handleInputChange} />
              <SelectInput label={t.form.tipoDia.label} name="tipoDia" value={formData.tipoDia} onChange={handleInputChange} options={t.form.tipoDia.options.map(o => ({value: o.value, label: o.label}))} />
              
              <h2 className="text-xl font-bold text-cyan-400 border-b border-gray-600 pb-2 mb-4 mt-6">Treino</h2>
              <SelectInput label={t.form.podeTreinar.label} name="podeTreinar" value={formData.podeTreinar} onChange={handleInputChange} options={t.form.podeTreinar.options.map(o => ({value: o.value, label: o.label}))} />
              <SelectInput label={t.form.localTreino.label} name="localTreino" value={formData.localTreino} onChange={handleInputChange} options={t.form.localTreino.options.map(o => ({value: o.value, label: o.label}))} />
              <SelectInput label={t.form.tempoTreino.label} name="tempoTreino" value={formData.tempoTreino} onChange={handleInputChange} options={t.form.tempoTreino.options.map(o => ({value: o.value, label: o.label}))} />
              <SelectInput label={t.form.nivelTreino.label} name="nivelTreino" value={formData.nivelTreino} onChange={handleInputChange} options={t.form.nivelTreino.options.map(o => ({value: o.value, label: o.label}))} />
              <CheckboxGroup legend={t.form.limitacoes.legend} name="limitacoes" options={t.form.limitacoes.options.map(o => ({value: o.value, label: o.label}))} selectedValues={formData.limitacoes} onChange={handleInputChange} />
            </div>

            {/* Column 2 */}
            <div>
              <h2 className="text-xl font-bold text-cyan-400 border-b border-gray-600 pb-2 mb-4">Objetivos e Metas</h2>
              <CheckboxGroup legend={t.form.objetivosPrincipais.legend} name="objetivosPrincipais" options={t.form.objetivosPrincipais.options.map(o => ({value: o.value, label: o.label}))} selectedValues={formData.objetivosPrincipais} onChange={handleInputChange} />
              <CheckboxGroup legend={t.form.metasSemana.legend} name="metasSemana" options={t.form.metasSemana.options.map(o => ({value: o.value, label: o.label}))} selectedValues={formData.metasSemana} onChange={handleInputChange} />
              <CheckboxGroup legend={t.form.metasMes.legend} name="metasMes" options={t.form.metasMes.options.map(o => ({value: o.value, label: o.label}))} selectedValues={formData.metasMes} onChange={handleInputChange} />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleGeneratePlan}
              disabled={isLoading}
              className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              {isLoading ? t.loading : t.generateButton}
            </button>
          </div>

          <div className="mt-10">
            {error && <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-center">{error}</div>}
            {result && (
              <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
                {renderResult(result)}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
