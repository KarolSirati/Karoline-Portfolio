export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  repository: string;
  demo: string;
};

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

const baseUrl = import.meta.env.BASE_URL;

export const technologies = [
  "Go",
  "React",
  "TypeScript",
  "APIs REST",
  "Git/GitLab",
  "Grafana/Sentry",
];

export const projects: Project[] = [
  {
    title: "Decodificador de texto",
    subtitle: "Challenge Alura Codificador",
    description:
      "Aplicação que criptografa e descriptografa mensagens por meio de regras específicas.",
    image: `${baseUrl}project-decoder.png`,
    repository: "https://github.com/KarolSirati/Decodificador",
    demo: "https://decodificador-8q0lykz2y-karolsiratis-projects.vercel.app/",
  },
  {
    title: "Jogo do número secreto",
    subtitle: "Challenge Oracle",
    description:
      "Jogo interativo desenvolvido para praticar lógica, manipulação do DOM e JavaScript.",
    image: `${baseUrl}project-secret-number.png`,
    repository: "https://github.com/KarolSirati/Jogo-do-numero-secreto",
    demo: "https://jogo-do-numero-secreto-gamma-one.vercel.app/",
  },
];
