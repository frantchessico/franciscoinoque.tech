import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
  SiGo,
  SiKubernetes,
  SiFauna,
  SiGraphql,
  SiFastify,
  SiRedis,
  SiAppwrite,
  SiAngular
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiGo,
    text: "Golang",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  

  {
    icon: SiExpress,
    text: "Express",
  },

  {
    icon: SiFastify,
    text: "Fastify",
  },

  {
    icon: SiGraphql,
    text: "GraphQL",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiAppwrite,
    text: "Appwrite",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiFauna,
    text: "FaunaDB",
  },
 
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiRedis,
    text: "Redis",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiKubernetes,
    text: "Kubernetes",
  },
  {
    icon: SiHeroku,
    text: "Heroku",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiAngular,
    text: "Angular",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  
  
 
  
  
  
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Zogo",
    description: "Zogo é uma biblioteca de validação personalizada para Go que permite definir e aplicar várias regras de validação aos seus dados. É inspirado no zogo de Zod.",
    link: "https://github.com/frantchessico/zogo",
  },
  {
    title: "API de código de discagem de país em GoLang",
    description: "Esta API Go (Golang) simples fornece informações sobre países, incluindo seus nomes, códigos de discagem e códigos de país. Ele lê essas informações de um arquivo JSON e expõe um endpoint para recuperar esses dados.",
    link: "https://github.com/frantchessico/countries-with-dials-go",
  },
  {
    title: "API de código de discagem de país em Python",
    description: "Este projeto FastAPI fornece informações sobre países, incluindo seus nomes, códigos de discagem e códigos de país. Ele lê essas informações de um arquivo JSON e expõe um endpoint para recuperar esses dados.",
    link: "https://github.com/frantchessico/countries-with-dialing-code-python",
  },
  {
    title: "API de Autenticação em Nodejs",
    description: "Bem-vindo à API i auth em Nodejs. Esta API fornece um conjunto abrangente de funcionalidades para gerenciamento de usuários, autenticação, verificação de e-mail e redefinição de senha.",
    link: "https://github.com/frantchessico/nodejs-auth-api",
  },
  {
    title: "API de pagamento Stripe em Go",
    description: "Este é um exemplo de API Go que permite criar uma intenção de pagamento com Stripe. A API está configurada para aceitar solicitações POST e responde com detalhes sobre a intenção de pagamento criada.",
    link: "https://github.com/frantchessico/stripe-payment-with-go",
  },
  {
    title: "API de pagamento Stripe em Python",
    description: "Este é um exemplo de API baseada em FastAPI em Python que permite criar uma intenção de pagamento com Stripe e processar pagamentos. A API está configurada para aceitar solicitações POST e responder com detalhes sobre a intenção de pagamento criada ou o status de processamento do pagamento.",
    link: "https://github.com/frantchessico/stripe-payment-with-python",
  },
  {
    title: "API de pagamento do PayPal em GoLang",
    description: "Este é um exemplo de API baseada em Go que permite criar e executar pagamentos do PayPal. A API interage com a API do PayPal para processamento de pagamentos.",
    link: "https://github.com/frantchessico/paypal-payment-with-go",
  },
  {
    title: "API de pagamento PayPal em Python",
    description: "Este é um exemplo de API baseada em FastAPI em Python que permite criar e executar pagamentos PayPal. A API está configurada para aceitar solicitações POST e interagir com a API do PayPal para processamento de pagamentos.",
    link: "https://github.com/frantchessico/paypal-payment-with-python",
  },

  
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Company 3",
    logo: "/company-logo.png",
    position: "Company 3 Position",
    description: "Write briefly on your experience working at Company 3.",
    years: "Apr, 2022 - Aug, 2023",
  },
  {
    company: "Company 2",
    logo: "/company-logo.png",
    position: "Company 2 Position",
    description: "Write briefly on your experience working at Company 2.",
    years: "Jan, 2020 - Mar, 2022",
  },
  {
    company: "Company 1",
    logo: "/company-logo.png",
    position: "Company 1 Position",
    description: "Write briefly on your experience working at Company 1.",
    years: "Aug, 2018 - Sep, 2018",
  },
  {
    company: "Uni Name",
    logo: "/company-logo.png",
    position: "Student",
    description:
      "Write briefly about your university experience (degree, subject, etc.)",
    years: "Aug, 2015 - Jun, 2019",
  },
];

export const aboutYou = {
  name: "Francisco Inoque",
  description:
    "👨‍💻 Desenvolvedor Backend com mais de 6 anos de experiência em programação. 🚀 Especializado em Node.js, Go e Python.",
  yearsOfExperience: "6 anos",
  location: "Moçambique",
  email: "hi@franciscoinoque.tech",
};

export const logoText = "@frantchessico";

export const marketingHeadlines = {
  mainHeadline: "Sou Desenvolvedor de Software Back-end",
  subHeadline: "Minha jornada tecnológica tem sido emocionante e estou ansioso para compartilhar um pouco mais sobre mim.",
};

export const websiteMetadata = {
  title: "Francisco Inoque | Desenvolvedor Back-end",
  description: "👋 Olá! Bem vindo ao meu portfólio/blog.",
};
