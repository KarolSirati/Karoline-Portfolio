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

export const technologies = ["Go", "React", "TypeScript", "APIs REST", "MongoDB", "Git/GitLab"];

export const projects: Project[] = [
  { title: "Decodificador de texto", subtitle: "Challenge Alura Codificador", description: "Aplicação que criptografa e descriptografa mensagens por meio de regras específicas.", image: "/project-decoder.png", repository: "https://github.com/KarolSirati/Decodificador", demo: "https://decodificador-8q0lykz2y-karolsiratis-projects.vercel.app/" },
  { title: "Jogo do número secreto", subtitle: "Challenge Oracle", description: "Jogo interativo desenvolvido para praticar lógica, manipulação do DOM e JavaScript.", image: "/project-secret-number.png", repository: "https://github.com/KarolSirati/Jogo-do-numero-secreto", demo: "https://jogo-do-numero-secreto-gamma-one.vercel.app/" },
];
