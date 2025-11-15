
export type Language = 'pt' | 'en' | 'it';

export interface FormData {
  horasTrabalho: string;
  alimentacaoOntem: string;
  sono: string;
  usoAlcool: string;
  usoSubstancias: string;
  energia: number;
  humor: number;
  tipoDia: string;
  objetivosPrincipais: string[];
  metasSemana: string[];
  metasMes: string[];
  podeTreinar: string;
  localTreino: string;
  tempoTreino: string;
  nivelTreino: string;
  limitacoes: string[];
}

export interface TranslationSet {
  title: string;
  subtitle: string;
  intro: string;
  warning: string;
  generateButton: string;
  loading: string;
  error: string;
  languageSelector: string;
  form: {
    horasTrabalho: { label: string; options: { value: string; label: string }[] };
    alimentacaoOntem: { label: string; options: { value: string; label: string }[] };
    sono: { label: string; options: { value: string; label: string }[] };
    usoAlcool: { label: string; options: { value: string; label: string }[] };
    usoSubstancias: { label: string; options: { value: string; label: string }[] };
    energia: string;
    humor: string;
    tipoDia: { label: string; options: { value: string; label: string }[] };
    objetivosPrincipais: { legend: string; options: { value: string; label: string }[] };
    metasSemana: { legend: string; options: { value: string; label: string }[] };
    metasMes: { legend: string; options: { value: string; label: string }[] };
    podeTreinar: { label: string; options: { value: string; label: string }[] };
    localTreino: { label: string; options: { value: string; label: string }[] };
    tempoTreino: { label: string; options: { value: string; label: string }[] };
    nivelTreino: { label: string; options: { value: string; label: string }[] };
    limitacoes: { legend: string; options: { value: string; label: string }[] };
  };
  results: {
    title: string;
    section1: string;
    section2: string;
    section3: string;
    section4: string;
    section5: string;
    section6: string;
    section7: string;
    section8: string;
  };
}

export type Translations = Record<Language, TranslationSet>;
