
import { Technique, TheoryQuestion, GraduationType } from './types';

export const TECHNIQUES: Technique[] = [
  {
    id: "ippon-seoi-nage",
    name: "Arremesso por sobre o Ombro",
    japaneseName: "Ippon Seoi Nage",
    category: "Nage-waza",
    description: "Técnica fundamental de Te-waza (braço). Exige um giro de tronco explosivo e controle total da manga do uke.",
    steps: [
      { 
        title: "Kuzushi (Desequilíbrio)", 
        description: "Puxada vigorosa da manga (hikite) para cima e para frente, enquanto a mão da gola (tsurite) projeta o uke para a ponta dos pés. O vácuo criado deve permitir a entrada completa do corpo.", 
        image: "" 
      },
      { 
        title: "Tsukuri (Preparação)", 
        description: "Giro de 180 graus sobre a planta dos pés. O braço direito abandona a gola e encaixa profundamente sob a axila do uke, travando o braço dele. Joelhos levemente flexionados e costas coladas ao peito do uke.", 
        image: "" 
      },
      { 
        title: "Kake (Execução)", 
        description: "Extensão explosiva das pernas combinada com a inclinação do tronco para frente. O uke é projetado por sobre o ombro direito em um movimento circular contínuo. Finalize mantendo o controle da manga para o Zanshin.", 
        image: "" 
      }
    ]
  },
  {
    id: "uchi-mata",
    name: "Corte na Coxa Interna",
    japaneseName: "Uchi Mata",
    category: "Nage-waza",
    description: "Técnica mestre de Ashi-waza, frequentemente utilizada como técnica de sacrifício ou quadril dependendo da entrada.",
    steps: [
      { 
        title: "Kuzushi", 
        description: "Desequilíbrio circular. Puxe o uke para frente enquanto abre o cotovelo da mão da gola, forçando o uke a perder a base frontal.", 
        image: "" 
      },
      { 
        title: "Tsukuri", 
        description: "Entrada profunda do quadril. O pé de apoio deve estar centralizado entre os pés do uke. A perna de ataque é lançada entre as coxas do uke, buscando o contato da parte posterior da sua coxa com a interna dele.", 
        image: "" 
      },
      { 
        title: "Kake", 
        description: "Elevação potente da perna de ataque enquanto o tronco mergulha para frente. O movimento deve ser como uma 'gangorra', utilizando o peso do uke a seu favor.", 
        image: "" 
      }
    ]
  },
  {
    id: "jodo-gatame",
    name: "Imobilização em Quatro Cantos Superior",
    japaneseName: "Kami-Shiho-Gatame",
    category: "Katame-waza",
    description: "Osaekomi-waza clássica de controle superior. Essencial para o Katame-no-kata.",
    steps: [
      { 
        title: "Aproximação", 
        description: "Posicione-se por trás da cabeça do uke em decúbito dorsal. Seus braços passam sob os braços do uke para segurar a faixa dele por baixo.", 
        image: "" 
      },
      { 
        title: "Fixação", 
        description: "Cole seu peito firmemente contra o peito do uke. Suas pernas devem estar bem abertas e os dedos dos pés vivos (apoiados) no tatame para exercer pressão constante.", 
        image: "" 
      },
      { 
        title: "Controle de Reação", 
        description: "Mantenha o queixo baixo para evitar que o uke empurre seu rosto. Acompanhe os movimentos de quadril do uke movendo sua base como uma âncora.", 
        image: "" 
      }
    ]
  }
];

export const KATA_SEQUENCES = [
  {
    name: "Nage-no-Kata (Formas de Arremesso)",
    description: "O Kata fundamental para 1º Dan. Composto por 15 técnicas em 5 grupos.",
    groups: [
      {
        title: "Te-Waza (Técnicas de Braço)",
        techniques: ["Uki-otoshi", "Seoi-nage", "Kata-guruma"]
      },
      {
        title: "Koshi-Waza (Técnicas de Quadril)",
        techniques: ["Uki-goshi", "O-goshi", "Tsurikomi-goshi"]
      },
      {
        title: "Ashi-Waza (Técnicas de Perna)",
        techniques: ["Okuri-ashi-barai", "Sasae-tsurikomi-ashi", "Uchi-mata"]
      },
      {
        title: "Ma-Sutemi-Waza (Sacrifício Traseiro)",
        techniques: ["Tomoe-nage", "Ura-nage", "Sumi-gaeshi"]
      },
      {
        title: "Yoko-Sutemi-Waza (Sacrifício Lateral)",
        techniques: ["Yoko-gake", "Yoko-guruma", "Uki-waza"]
      }
    ],
    ritual: "Início: Saudação (Rei) ao Shomen, depois entre parceiros (Tori e Uke). Caminhada em Ayumi-ashi até o centro. Distância de aproximadamente 5,5 metros entre eles."
  }
];

export const KATA_QUIZ_QUESTIONS: TheoryQuestion[] = [
  {
    id: "kq1",
    question: "Qual é a primeira técnica executada no Nage-no-Kata?",
    options: ["Seoi-nage", "Uki-otoshi", "O-goshi", "Tomoe-nage"],
    correctAnswer: 1,
    explanation: "O Nage-no-Kata inicia com o grupo Te-Waza, e a primeira técnica é o Uki-otoshi."
  },
  {
    id: "kq2",
    question: "No Nage-no-Kata, em qual grupo se encontra a técnica Uchi-mata?",
    options: ["Te-Waza", "Koshi-Waza", "Ashi-Waza", "Yoko-Sutemi-Waza"],
    correctAnswer: 2,
    explanation: "Uchi-mata é a terceira técnica do grupo Ashi-Waza (técnicas de perna)."
  },
  {
    id: "kq3",
    question: "Quantas técnicas compõem o Nage-no-Kata completo?",
    options: ["10 técnicas", "12 técnicas", "15 técnicas", "20 técnicas"],
    correctAnswer: 2,
    explanation: "São 5 grupos de 3 técnicas cada, totalizando 15 técnicas executadas à direita e à esquerda (exceto algumas)."
  },
  {
    id: "kq4",
    question: "Qual técnica encerra o grupo de Koshi-Waza no Nage-no-Kata?",
    options: ["Uki-goshi", "O-goshi", "Tsurikomi-goshi", "Harai-goshi"],
    correctAnswer: 2,
    explanation: "A sequência do Koshi-waza é: Uki-goshi, O-goshi e Tsurikomi-goshi."
  }
];

export const THEORY_QUESTIONS: TheoryQuestion[] = [
  {
    id: "q1",
    question: "Segundo o regulamento da CBJ, qual a pontuação atribuída a uma imobilização de 20 segundos?",
    options: ["Waza-ari", "Ippon", "Yuko", "Koka"],
    correctAnswer: 1,
    explanation: "Desde as últimas atualizações da IJF/CBJ, 20 segundos de Osaekomi conferem Ippon."
  },
  {
    id: "q2",
    question: "O que caracteriza o princípio Jita Kyoei?",
    options: ["Máxima eficiência", "Suavidade no golpe", "Prosperidade e benefícios mútuos", "Caminho da disciplina"],
    correctAnswer: 2,
    explanation: "Jita Kyoei foca na harmonia social e no crescimento mútuo entre os praticantes."
  }
];

export const GRADUATION_REQUIREMENTS: Record<string, any> = {
  [GraduationType.DAN_1]: {
    minAge: 16,
    intersticio: "1 a 2 anos na faixa Marrom (Zempo)",
    practical: ["Nage-no-kata (1º, 2º e 3º grupos)", "Gokyo (40 técnicas básicas)", "Osaekomi (5)", "Shime (5)", "Kansetsu (5)"],
    theoretical: ["História de Jigoro Kano", "Terminologia de Arbitragem", "Filosofia do Budo"],
    administrative: ["Curso de Mesários", "Curso de Oficiais de Mesa", "Taxa de Outorga: R$ 2.750,00 (estimada)", "Anuidade Yudansha ativa"]
  },
  [GraduationType.DAN_2]: {
    minAge: 20,
    intersticio: "3 anos no 1º Dan",
    practical: ["Nage-no-kata (Completo)", "Katame-no-kata (Completo)", "Renraku-waza", "Kaeshi-waza"],
    theoretical: ["Metodologia de Ensino", "Fisiologia do Exercício aplicada ao Judô"],
    administrative: ["Curso de Árbitro Regional", "Participação em seminários estaduais", "Taxa de Outorga: R$ 3.100,00 (estimada)"]
  },
  [GraduationType.DAN_3]: {
    minAge: 24,
    intersticio: "4 anos no 2º Dan",
    practical: ["Ju-no-kata (Completo)", "Kime-no-kata", "Aprofundamento em Go-no-sen-no-kata"],
    theoretical: ["Gestão de Dojos", "Psicologia do Esporte"],
    administrative: ["Atuação como árbitro ou técnico oficial", "Aprovação em banca nacional"]
  }
};
