import {
  ArrowRight,
  BriefcaseBusiness,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  LayoutGrid,
  Linkedin,
  Mail,
  UserRound,
} from "lucide-react";

import { useContactController } from "../controllers/useContactController";
import { projects, technologies } from "../models/portfolio";

export function PortfolioView() {
  const { status, handleSubmit } = useContactController();

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio">
          <span className="brand-avatar">KS</span>
          <strong>Karoline Sirati</strong>
        </a>

        <nav>
          <a href="#sobre">Sobre mim</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#formacao">Formação</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">Olá, eu sou</span>

          <h1>Karoline Sirati</h1>
          <h2>Desenvolvedora Full Stack</h2>

          <p className="stack-line">
            Go <span>•</span> React <span>•</span> TypeScript
          </p>

          <p className="hero-description">
            Desenvolvimento de aplicações web e APIs REST, do backend ao frontend.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              Ver projetos
              <ArrowRight size={18} />
            </a>

            <a
              className="button secondary"
              href={`${import.meta.env.BASE_URL}curriculo-karoline-sirati.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              <FileDown size={18} />
              Currículo PDF
            </a>

            <a
              className="button secondary"
              href="https://github.com/KarolSirati"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              className="button secondary"
              href="https://www.linkedin.com/in/karoline-sirati/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-backdrop" />

          <img
            src={`${import.meta.env.BASE_URL}karoline.png`}
            alt="Karoline Sirati"
          />
        </div>
      </section>

      <section className="highlight section-shell" id="experiencia">
        <div className="experience-summary">
          <BriefcaseBusiness />

          <div>
            <span>Experiência</span>
            <strong>Desenvolvimento Full Stack na Globo</strong>
            <small>ago/2025 — atual</small>
          </div>
        </div>

        <div className="tech-summary">
          <span className="tech-label">
            &lt;/&gt; <strong>Tecnologias</strong>
          </span>

          <div className="tech-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <div className="section-heading">
          <div>
            <span className="section-icon">
              <LayoutGrid size={22} />
            </span>

            <h2>Projetos em destaque</h2>
          </div>

          <a
            href="https://github.com/KarolSirati"
            target="_blank"
            rel="noreferrer"
          >
            Ver todos no GitHub
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img
                src={project.image}
                alt={`Captura do projeto ${project.title}`}
              />

              <div className="project-content">
                <h3>{project.title}</h3>
                <span>{project.subtitle}</span>
                <p>{project.description}</p>

                <div className="project-actions">
                  <a
                    className="button primary small"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={17} />
                    Repositório
                  </a>

                  <a
                    className="button secondary small"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={17} />
                    Ver demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="details section-shell" id="sobre">
        <article>
          <UserRound />

          <div>
            <h2>Sobre mim</h2>

            <p>
              Desenvolvedora de Software Full Stack com mais de 1 ano de experiência profissional,
              atualmente atuando na Globo no desenvolvimento e na manutenção de aplicações em produção.
              Trabalho com Go, React e TypeScript na evolução de APIs REST e sistemas web,
              além de participar de atividades de refatoração, correção de bugs e monitoramento de aplicações.
            </p>
          </div>
        </article>

        <article id="formacao">
          <GraduationCap />

          <div>
            <h2>Formação</h2>

            <p>
              Análise e Desenvolvimento de Sistemas — Universidade Veiga de
              Almeida.
            </p>

            <p>
              Formação complementar em Go, desenvolvimento web e APIs REST.
            </p>
          </div>
        </article>
      </section>

      <section className="contact section-shell" id="contato">
        <div className="contact-copy">
          <div className="contact-eyebrow">
            <Mail size={17} />
            <span className="eyebrow">Contato</span>
          </div>

          <h2>Vamos conversar?</h2>

          <p>
            Estou aberta a oportunidades em desenvolvimento Full Stack, backend com
            Go e frontend com React e TypeScript.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              name="name"
              required
              minLength={2}
              placeholder="Seu nome"
            />
          </label>

          <label>
            E-mail
            <input
              name="email"
              type="email"
              required
              placeholder="email@exemplo.com"
            />
          </label>

          <label>
            Mensagem
            <textarea
              name="message"
              required
              minLength={10}
              placeholder="Escreva sua mensagem"
            />
          </label>

          <div className="form-footer">
            <button
              className="button primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
              <ArrowRight size={18} />
            </button>

            <span role="status">
              {status === "success" && "Mensagem recebida!"}

              {status === "error" &&
                "Não foi possível enviar. Tente novamente em alguns instantes."}
            </span>
          </div>
        </form>
      </section>

      <footer className="section-shell">
        <span>Karoline Sirati</span>
        <span>Obrigada pela visita!</span>

        <div>
          <a
            href="https://github.com/KarolSirati"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Karoline Sirati"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/karoline-sirati/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Karoline Sirati"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </footer>
    </main>
  );
}