
import { Translations } from '../types';

export const translations: Translations = {
  pt: {
    title: "+1-1",
    subtitle: "Seu companheiro de rotina e bem-estar",
    intro: "O +1-1 foi criado porque nenhum dia é igual ao outro. Hoje é sempre +1: um dia novo. Ontem já foi -1: um dia que passou e em que realizamos (ou não) nossos objetivos. O app te ajuda a organizar o seu +1 de hoje: sono, energia, treino, alimentação e metas, a partir de como foi o seu -1 de ontem. Dia após dia, com +1, +1, +1, você avança nas metas diárias, semanais e mensais.",
    warning: "Este app não é aconselhamento médico nem psicológico profissional.",
    generateButton: "Gerar plano +1 de hoje",
    loading: "Gerando seu plano...",
    error: "Algo deu errado ao gerar o plano. Tente novamente.",
    languageSelector: "Idioma",
    form: {
      horasTrabalho: {
        label: "Horas trabalhadas ontem",
        options: [{value: "0-2h", label: "0–2h"}, {value: "3-5h", label: "3–5h"}, {value: "6-8h", label: "6–8h"}, {value: "9-10h", label: "9–10h"}, {value: "11h+", label: "11h ou mais"}]
      },
      alimentacaoOntem: {
        label: "Qualidade da alimentação ontem",
        options: [{value: "Muito ruim", label: "Muito ruim"}, {value: "Ruim", label: "Ruim"}, {value: "Ok", label: "Ok"}, {value: "Boa", label: "Boa"}, {value: "Muito boa", label: "Muito boa"}]
      },
      sono: {
        label: "Horas de sono da última noite",
        options: [{value: "<4h", label: "Menos de 4h"}, {value: "4-6h", label: "4–6h"}, {value: "6-8h", label: "6–8h"}, {value: "8h+", label: "Mais de 8h"}]
      },
      usoAlcool: {
        label: "Uso de álcool ontem ou hoje",
        options: [{value: "Nada", label: "Nada"}, {value: "Pouco", label: "Pouco"}, {value: "Moderado", label: "Moderado"}, {value: "Muito", label: "Muito"}]
      },
      usoSubstancias: {
        label: "Uso de outras substâncias ontem ou hoje",
        options: [{value: "Nada", label: "Nada"}, {value: "Pouco", label: "Pouco"}, {value: "Moderado", label: "Moderado"}, {value: "Muito", label: "Muito"}]
      },
      energia: "Nível de energia agora (0–10)",
      humor: "Nível de humor agora (0–10)",
      tipoDia: {
        label: "Como será o dia de hoje?",
        options: [{value: "Muito corrido", label: "Muito corrido"}, {value: "Corrido", label: "Corrido"}, {value: "Normal", label: "Normal"}, {value: "Tranquilo", label: "Tranquilo"}]
      },
      objetivosPrincipais: {
        legend: "Objetivos principais agora",
        options: [
          { value: "Perder peso", label: "Perder peso" },
          { value: "Ganhar músculo / hipertrofia", label: "Ganhar músculo / hipertrofia" },
          { value: "Melhorar alimentação", label: "Melhorar alimentação" },
          { value: "Melhorar condicionamento físico", label: "Melhorar condicionamento físico" },
          { value: "Melhorar sono", label: "Melhorar sono" },
          { value: "Aumentar energia / disposição", label: "Aumentar energia / disposição" },
          { value: "Reduzir estresse / ansiedade", label: "Reduzir estresse / ansiedade" },
          { value: "Manter rotina saudável", label: "Manter rotina saudável" },
        ]
      },
      metasSemana: {
        legend: "Metas da semana (escolha algumas)",
        options: [
          { value: "Treinar pelo menos 3 dias", label: "Treinar pelo menos 3 dias nesta semana" },
          { value: "Caminhar 20-30 min em 3 dias", label: "Caminhar ou se mover 20–30 minutos em 3 dias" },
          { value: "Beber água regularmente", label: "Beber água regularmente todos os dias" },
          { value: "Comer frutas ou legumes", label: "Comer frutas ou legumes todos os dias" },
          { value: "Dormir mais cedo", label: "Dormir mais cedo em pelo menos 3 dias" },
          { value: "Reduzir consumo de álcool", label: "Reduzir consumo de álcool nesta semana" },
          { value: "Fazer pausas no trabalho", label: "Fazer pausas curtas durante o trabalho" },
        ]
      },
      metasMes: {
        legend: "Metas do mês (escolha algumas)",
        options: [
          { value: "Perder peso gradual", label: "Perder peso de forma gradual" },
          { value: "Ganhar massa muscular gradual", label: "Ganhar massa muscular de forma gradual" },
          { value: "Manter rotina de treino por 4 semanas", label: "Manter rotina de treino por 4 semanas" },
          { value: "Melhorar condicionamento", label: "Melhorar condicionamento (ficar menos ofegante)" },
          { value: "Melhorar qualidade do sono", label: "Melhorar qualidade do sono" },
          { value: "Reduzir uso de álcool/substâncias", label: "Reduzir uso de álcool e outras substâncias" },
          { value: "Sentir-se mais disposto(a)", label: "Sentir-se mais disposto(a) no dia a dia" },
          { value: "Manter alimentação equilibrada", label: "Manter alimentação mais equilibrada" },
        ]
      },
      podeTreinar: {
        label: "Pode treinar hoje?",
        options: [{value: "Sim", label: "Sim"}, {value: "Não", label: "Não"}]
      },
      localTreino: {
        label: "Onde pretende treinar hoje?",
        options: [{value: "Academia", label: "Academia"}, {value: "Casa", label: "Casa"}, {value: "Rua", label: "Rua"}, {value: "Não vou treinar", label: "Não vou treinar"}]
      },
      tempoTreino: {
        label: "Quanto tempo tem para treino hoje?",
        options: [{value: "15 min", label: "15 minutos"}, {value: "30 min", label: "30 minutos"}, {value: "45 min", label: "45 minutos"}, {value: "60 min", label: "60 minutos"}]
      },
      nivelTreino: {
        label: "Nível de treino",
        options: [{value: "Iniciante", label: "Iniciante"}, {value: "Intermediário", label: "Intermediário"}, {value: "Avançado", label: "Avançado"}]
      },
      limitacoes: {
        legend: "Limitações físicas",
        options: [
          { value: "Dor em joelhos", label: "Dor em joelhos" },
          { value: "Dor em costas / lombar", label: "Dor em costas / lombar" },
          { value: "Dor em ombros", label: "Dor em ombros" },
          { value: "Problemas de respiração / cardio", label: "Problemas de respiração / cardio" },
          { value: "Nenhuma", label: "Nenhuma limitação importante" },
        ]
      }
    },
    results: {
        title: "Seu plano +1 para hoje:",
        section1: "1. Resumo do seu -1 (ontem)",
        section2: "2. Hoje é +1: foco do dia",
        section3: "3. Sono e energia",
        section4: "4. Corpo / Movimento / Treino",
        section5: "5. Alimentação e hidratação",
        section6: "6. Objetivos e tarefas do +1 de hoje",
        section7: "7. Conexão com metas da semana e do mês",
        section8: "8. Reflexão rápida do dia"
    }
  },
  en: {
    title: "+1-1",
    subtitle: "Your routine and wellness companion",
    intro: "The +1-1 was created because no day is the same as another. Today is always +1: a new day. Yesterday was already -1: a day that has passed and in which we achieved (or not) our goals. The app helps you organize your +1 today: sleep, energy, workout, nutrition, and goals, based on how your -1 yesterday was. Day after day, with +1, +1, +1, you advance in your daily, weekly, and monthly goals.",
    warning: "This app is not professional medical or psychological advice.",
    generateButton: "Generate today’s +1 plan",
    loading: "Generating your plan...",
    error: "Something went wrong while generating the plan. Please try again.",
    languageSelector: "Language",
    form: {
      horasTrabalho: {
        label: "Hours worked yesterday",
        options: [{value: "0-2h", label: "0–2h"}, {value: "3-5h", label: "3–5h"}, {value: "6-8h", label: "6–8h"}, {value: "9-10h", label: "9–10h"}, {value: "11h+", label: "11h or more"}]
      },
      alimentacaoOntem: {
        label: "Quality of nutrition yesterday",
        options: [{value: "Very bad", label: "Very bad"}, {value: "Bad", label: "Bad"}, {value: "Ok", label: "Ok"}, {value: "Good", label: "Good"}, {value: "Very good", label: "Very good"}]
      },
      sono: {
        label: "Hours of sleep last night",
        options: [{value: "<4h", label: "Less than 4h"}, {value: "4-6h", label: "4–6h"}, {value: "6-8h", label: "6–8h"}, {value: "8h+", label: "More than 8h"}]
      },
      usoAlcool: {
        label: "Alcohol use yesterday or today",
        options: [{value: "None", label: "None"}, {value: "A little", label: "A little"}, {value: "Moderate", label: "Moderate"}, {value: "A lot", label: "A lot"}]
      },
      usoSubstancias: {
        label: "Other substance use yesterday or today",
        options: [{value: "None", label: "None"}, {value: "A little", label: "A little"}, {value: "Moderate", label: "Moderate"}, {value: "A lot", label: "A lot"}]
      },
      energia: "Energy level now (0–10)",
      humor: "Mood level now (0–10)",
      tipoDia: {
        label: "What will today be like?",
        options: [{value: "Very busy", label: "Very busy"}, {value: "Busy", label: "Busy"}, {value: "Normal", label: "Normal"}, {value: "Calm", label: "Calm"}]
      },
      objetivosPrincipais: {
        legend: "Main goals now",
        options: [
          { value: "Lose weight", label: "Lose weight" },
          { value: "Gain muscle / hypertrophy", label: "Gain muscle / hypertrophy" },
          { value: "Improve nutrition", label: "Improve nutrition" },
          { value: "Improve physical fitness", label: "Improve physical fitness" },
          { value: "Improve sleep", label: "Improve sleep" },
          { value: "Increase energy / stamina", label: "Increase energy / stamina" },
          { value: "Reduce stress / anxiety", label: "Reduce stress / anxiety" },
          { value: "Maintain a healthy routine", label: "Maintain a healthy routine" },
        ]
      },
      metasSemana: {
        legend: "Weekly goals (choose a few)",
        options: [
          { value: "Train at least 3 days", label: "Train at least 3 days this week" },
          { value: "Walk 20-30 min on 3 days", label: "Walk or move 20–30 minutes on 3 days" },
          { value: "Drink water regularly", label: "Drink water regularly every day" },
          { value: "Eat fruits or vegetables", label: "Eat fruits or vegetables every day" },
          { value: "Go to bed earlier", label: "Go to bed earlier on at least 3 days" },
          { value: "Reduce alcohol consumption", label: "Reduce alcohol consumption this week" },
          { value: "Take short breaks during work", label: "Take short breaks during work" },
        ]
      },
      metasMes: {
        legend: "Monthly goals (choose a few)",
        options: [
          { value: "Lose weight gradually", label: "Lose weight gradually" },
          { value: "Gain muscle mass gradually", label: "Gain muscle mass gradually" },
          { value: "Maintain workout routine for 4 weeks", label: "Maintain workout routine for 4 weeks" },
          { value: "Improve fitness", label: "Improve fitness (get less breathless)" },
          { value: "Improve sleep quality", label: "Improve sleep quality" },
          { value: "Reduce use of alcohol/substances", label: "Reduce use of alcohol and other substances" },
          { value: "Feel more energetic daily", label: "Feel more energetic in daily life" },
          { value: "Maintain a more balanced diet", label: "Maintain a more balanced diet" },
        ]
      },
      podeTreinar: {
        label: "Can you train today?",
        options: [{value: "Yes", label: "Yes"}, {value: "No", label: "No"}]
      },
      localTreino: {
        label: "Where do you plan to train today?",
        options: [{value: "Gym", label: "Gym"}, {value: "Home", label: "Home"}, {value: "Outdoors", label: "Outdoors"}, {value: "I'm not training", label: "I'm not training"}]
      },
      tempoTreino: {
        label: "How much time do you have for training today?",
        options: [{value: "15 min", label: "15 minutes"}, {value: "30 min", label: "30 minutes"}, {value: "45 min", label: "45 minutes"}, {value: "60 min", label: "60 minutes"}]
      },
      nivelTreino: {
        label: "Training level",
        options: [{value: "Beginner", label: "Beginner"}, {value: "Intermediate", label: "Intermediate"}, {value: "Advanced", label: "Advanced"}]
      },
      limitacoes: {
        legend: "Physical limitations",
        options: [
          { value: "Knee pain", label: "Knee pain" },
          { value: "Back / lower back pain", label: "Back / lower back pain" },
          { value: "Shoulder pain", label: "Shoulder pain" },
          { value: "Breathing / cardio issues", label: "Breathing / cardio issues" },
          { value: "None", label: "No significant limitations" },
        ]
      }
    },
     results: {
        title: "Your +1 plan for today:",
        section1: "1. Summary of your -1 (yesterday)",
        section2: "2. Today is +1: focus of the day",
        section3: "3. Sleep and energy",
        section4: "4. Body / Movement / Workout",
        section5: "5. Nutrition and hydration",
        section6: "6. Goals and tasks for +1 today",
        section7: "7. Connection to weekly and monthly goals",
        section8: "8. Quick day reflection"
    }
  },
  it: {
    title: "+1-1",
    subtitle: "Il tuo compagno di routine e benessere",
    intro: "L'+1-1 è stato creato perché nessun giorno è uguale a un altro. Oggi è sempre +1: un nuovo giorno. Ieri era già -1: un giorno passato in cui abbiamo raggiunto (o no) i nostri obiettivi. L'app ti aiuta a organizzare il tuo +1 di oggi: sonno, energia, allenamento, alimentazione e obiettivi, basandosi su com'è stato il tuo -1 di ieri. Giorno dopo giorno, con +1, +1, +1, avanzi negli obiettivi giornalieri, settimanali e mensili.",
    warning: "Questa app non è una consulenza medica o psicologica professionale.",
    generateButton: "Genera il piano +1 di oggi",
    loading: "Sto generando il tuo piano...",
    error: "Qualcosa è andato storto durante la generazione del piano. Riprova.",
    languageSelector: "Lingua",
    form: {
      horasTrabalho: {
        label: "Ore lavorate ieri",
        options: [{value: "0-2h", label: "0–2h"}, {value: "3-5h", label: "3–5h"}, {value: "6-8h", label: "6–8h"}, {value: "9-10h", label: "9–10h"}, {value: "11h+", label: "11h o più"}]
      },
      alimentacaoOntem: {
        label: "Qualità dell'alimentazione di ieri",
        options: [{value: "Molto scarsa", label: "Molto scarsa"}, {value: "Scarsa", label: "Scarsa"}, {value: "Normale", label: "Normale"}, {value: "Buona", label: "Buona"}, {value: "Ottima", label: "Ottima"}]
      },
      sono: {
        label: "Ore di sonno dell'ultima notte",
        options: [{value: "<4h", label: "Meno di 4h"}, {value: "4-6h", label: "4–6h"}, {value: "6-8h", label: "6–8h"}, {value: "8h+", label: "Più di 8h"}]
      },
      usoAlcool: {
        label: "Uso di alcol ieri o oggi",
        options: [{value: "Niente", label: "Niente"}, {value: "Poco", label: "Poco"}, {value: "Moderato", label: "Moderato"}, {value: "Molto", label: "Molto"}]
      },
      usoSubstancias: {
        label: "Uso di altre sostanze ieri o oggi",
        options: [{value: "Niente", label: "Niente"}, {value: "Poco", label: "Poco"}, {value: "Moderato", label: "Moderato"}, {value: "Molto", label: "Molto"}]
      },
      energia: "Livello di energia ora (0–10)",
      humor: "Livello di umore ora (0–10)",
      tipoDia: {
        label: "Come sarà la giornata di oggi?",
        options: [{value: "Molto impegnativa", label: "Molto impegnativa"}, {value: "Impegnativa", label: "Impegnativa"}, {value: "Normale", label: "Normale"}, {value: "Tranquilla", label: "Tranquilla"}]
      },
      objetivosPrincipais: {
        legend: "Obiettivi principali adesso",
        options: [
          { value: "Perdere peso", label: "Perdere peso" },
          { value: "Aumentare la massa muscolare / ipertrofia", label: "Aumentare la massa muscolare / ipertrofia" },
          { value: "Migliorare l'alimentazione", label: "Migliorare l'alimentazione" },
          { value: "Migliorare la condizione fisica", label: "Migliorare la condizione fisica" },
          { value: "Migliorare il sonno", label: "Migliorare il sonno" },
          { value: "Aumentare l'energia / la vitalità", label: "Aumentare l'energia / la vitalità" },
          { value: "Ridurre lo stress / l'ansia", label: "Ridurre lo stress / l'ansia" },
          { value: "Mantenere una routine sana", label: "Mantenere una routine sana" },
        ]
      },
      metasSemana: {
        legend: "Obiettivi della settimana (scegline alcuni)",
        options: [
          { value: "Allenarsi almeno 3 giorni", label: "Allenarsi almeno 3 giorni questa settimana" },
          { value: "Camminare 20-30 min per 3 giorni", label: "Camminare o muoversi 20–30 minuti per 3 giorni" },
          { value: "Bere acqua regolarmente", label: "Bere acqua regolarmente tutti i giorni" },
          { value: "Mangiare frutta o verdura", label: "Mangiare frutta o verdura tutti i giorni" },
          { value: "Andare a dormire prima", label: "Andare a dormire prima per almeno 3 giorni" },
          { value: "Ridurre il consumo di alcol", label: "Ridurre il consumo di alcol questa settimana" },
          { value: "Fare brevi pause durante il lavoro", label: "Fare brevi pause durante il lavoro" },
        ]
      },
      metasMes: {
        legend: "Obiettivi del mese (scegline alcuni)",
        options: [
          { value: "Perdere peso gradualmente", label: "Perdere peso gradualmente" },
          { value: "Aumentare la massa muscolare gradualmente", label: "Aumentare la massa muscolare gradualmente" },
          { value: "Mantenere la routine di allenamento per 4 settimane", label: "Mantenere la routine di allenamento per 4 settimane" },
          { value: "Migliorare la forma fisica", label: "Migliorare la forma fisica (sentirsi meno affannati)" },
          { value: "Migliorare la qualità del sonno", label: "Migliorare la qualità del sonno" },
          { value: "Ridurre l'uso di alcol/sostanze", label: "Ridurre l'uso di alcol e altre sostanze" },
          { value: "Sentirsi più energici ogni giorno", label: "Sentirsi più energici nella vita di tutti i giorni" },
          { value: "Mantenere una dieta più equilibrata", label: "Mantenere una dieta più equilibrata" },
        ]
      },
      podeTreinar: {
        label: "Puoi allenarti oggi?",
        options: [{value: "Sì", label: "Sì"}, {value: "No", label: "No"}]
      },
      localTreino: {
        label: "Dove pensi di allenarti oggi?",
        options: [{value: "Palestra", label: "Palestra"}, {value: "Casa", label: "Casa"}, {value: "All'aperto", label: "All'aperto"}, {value: "Non mi alleno", label: "Non mi alleno"}]
      },
      tempoTreino: {
        label: "Quanto tempo hai per allenarti oggi?",
        options: [{value: "15 min", label: "15 minuti"}, {value: "30 min", label: "30 minuti"}, {value: "45 min", label: "45 minuti"}, {value: "60 min", label: "60 minuti"}]
      },
      nivelTreino: {
        label: "Livello di allenamento",
        options: [{value: "Principiante", label: "Principiante"}, {value: "Intermedio", label: "Intermedio"}, {value: "Avanzato", label: "Avanzato"}]
      },
      limitacoes: {
        legend: "Limitazioni fisiche",
        options: [
          { value: "Dolore alle ginocchia", label: "Dolore alle ginocchia" },
          { value: "Dolore alla schiena / zona lombare", label: "Dolore alla schiena / zona lombare" },
          { value: "Dolore alle spalle", label: "Dolore alle spalle" },
          { value: "Problemi respiratori / cardio", label: "Problemi respiratori / cardio" },
          { value: "Nessuna", label: "Nessuna limitazione importante" },
        ]
      }
    },
     results: {
        title: "Il tuo piano +1 per oggi:",
        section1: "1. Riepilogo del tuo -1 (ieri)",
        section2: "2. Oggi è +1: focus del giorno",
        section3: "3. Sonno ed energia",
        section4: "4. Corpo / Movimento / Allenamento",
        section5: "5. Alimentazione e idratazione",
        section6: "6. Obiettivi e compiti del +1 di oggi",
        section7: "7. Collegamento agli obiettivi settimanali e mensili",
        section8: "8. Breve riflessione della giornata"
    }
  }
};
