import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discordBlack,
  facebook,
  instagram,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Problema",
    url: "#problema",
  },
  {
    id: "1",
    title: "Solução",
    url: "#solucao",
  },
  {
    id: "2",
    title: "Como funciona",
    url: "#como-funciona",
  },
  {
    id: "3",
    title: "Benefícios",
    url: "#beneficios",
  },
];

export const comoFuncionaSteps = [
  {
    id: "0",
    number: "01",
    title: "Faça seu diagnóstico financeiro",
    text: "Responda algumas perguntas simples sobre sua situação atual e descubra onde estão os principais gargalos do seu orçamento.",
    icon: "📋",
  },
  {
    id: "1",
    number: "02",
    title: "Receba orientações práticas",
    text: "Com base no seu diagnóstico, você recebe dicas personalizadas e ações concretas para melhorar sua vida financeira.",
    icon: "💡",
  },
  {
    id: "2",
    number: "03",
    title: "Organize gastos e metas",
    text: "Use ferramentas simples para categorizar seus gastos, definir metas realistas e acompanhar tudo em um só lugar.",
    icon: "🎯",
  },
  {
    id: "3",
    number: "04",
    title: "Acompanhe sua evolução",
    text: "Veja seu progresso mês a mês. Entenda como suas decisões estão impactando positivamente sua vida financeira.",
    icon: "📈",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Mais clareza financeira",
    text: "Entenda exatamente para onde vai cada centavo do seu dinheiro, sem complicação e sem precisar de planilhas complexas.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Menos decisões no escuro",
    text: "Tome decisões financeiras com dados reais e orientações claras, não com base em achismo ou impulso.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Organização de gastos",
    text: "Categorize e controle seus gastos de forma prática. Saiba onde cortar e onde investir para fazer seu dinheiro render mais.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Planejamento de renda",
    text: "Descubra oportunidades reais para aumentar sua renda de forma segura e planejada, sem promessas milagrosas.",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Visão simples do mês",
    text: "Acompanhe um resumo visual e intuitivo das suas finanças mensais. Tudo o que você precisa saber em uma única tela.",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Segurança e confiança",
    text: "Suas informações financeiras protegidas com criptografia. Privacidade total para você focar no que importa.",
    backgroundUrl: "/src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://telegram.org",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com",
  },
];
