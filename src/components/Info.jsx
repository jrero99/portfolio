import { useRef, useState } from "react";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";
import { TechIcon, getTechIcon } from "./TechIcons";
import { useLanguage } from "../i18n/LanguageContext";
import Expandable from "./Expandable";

const experienceMeta = {
  cedetec: {
    company: "CedetecGroup",
    stack: ["Node.js", "Express", "TypeScript", "React", "Redux", "TanStack Query", "Stripe", "BigQuery", "Jest", "Vitest", "Claude", "MCP", "GCP", "Docker"],
  },
  optima: { company: "Optima Retail", stack: ["React", "TypeScript", "Laravel", "MySQL", "Sass"] },
  artero: { company: "Artero", stack: ["PHP", "jQuery", "SAP"] },
};

const projectMeta = {
  lcn: {
    name: "La Casa Nostra",
    links: [
      { id: "site", href: "https://lacasanostragrup.es", Icon: ArrowUpRightIcon },
      { id: "repo", href: "https://github.com/jrero99/lcn", Icon: GitHubIcon },
    ],
    stack: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod", "Vitest", "Jest", "Firebase", "Claude"],
  },
  aquaflow: {
    name: "AquaFlow",
    stack: ["Next.js", "TypeScript", "Tailwind", "Leaflet", "Python", "Django", "PostgreSQL", "Redis", "Celery", "MQTT", "Docker", "GitHub Actions", "Nginx", "Hetzner"],
  },
  atd: { name: "ATD", stack: ["Claude", "Git"] },
};

const tabs = ["experience", "projects", "about"];

const Card = ({ children }) => (
  <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] hover:ring-white/20 md:p-8">
    {children}
  </article>
);

const Tags = ({ items, label }) => (
  <ul className="mt-6 flex flex-wrap gap-2" aria-label={label}>
    {items.map((item) => {
      const icon = getTechIcon(item);
      if (!icon) return null;
      return (
        <li
          key={item}
          className="group relative flex size-10 items-center justify-center rounded-lg bg-white/5 text-slate-300 ring-1 ring-white/10 transition-colors duration-200 hover:bg-white/10 hover:text-white"
        >
          <TechIcon icon={icon} className="size-5" />
          <span className="sr-only">{item}</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-white px-2 py-1 text-xs font-medium whitespace-nowrap text-slate-950 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          >
            {item}
          </span>
        </li>
      );
    })}
  </ul>
);

const Period = ({ children }) => (
  <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">{children}</span>
);

const Block = ({ title, children }) => (
  <section className="mt-8 border-t border-white/10 pt-6">
    <h4 className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{title}</h4>
    <div className="mt-4">{children}</div>
  </section>
);

const Highlights = ({ items }) => (
  <ul className="mt-5 space-y-3 text-slate-300">
    {items.map(({ title, text }) => (
      <li key={text} className="flex gap-3">
        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        <span>
          {title && <strong className="font-semibold text-white">{title}: </strong>}
          {text}
        </span>
      </li>
    ))}
  </ul>
);

const Experience = () => {
  const { t } = useLanguage();
  return t.info.experiences.map(({ id, role, period, summary, highlights }) => {
    const { company, stack } = experienceMeta[id];
    return (
      <Card key={id}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">{company}</h3>
            <p className="mt-1 text-sm text-slate-400">{role}</p>
          </div>
          <Period>{period}</Period>
        </div>
        <Expandable>
          {summary && <p className="mt-5 text-slate-300">{summary}</p>}
          <Highlights items={highlights} />
        </Expandable>
        <Tags items={stack} label={t.info.stack} />
      </Card>
    );
  });
};

const Projects = () => {
  const { t } = useLanguage();
  return t.info.projects.map(({ id, type, badge, summary, highlights, links: linkLabels }) => {
    const { name, links = [], stack } = projectMeta[id];
    return (
      <Card key={id}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">{name}</h3>
            <p className="mt-1 text-sm text-slate-400">{type}</p>
          </div>
          <Period>{badge}</Period>
        </div>
        <Expandable>
          <p className="mt-5 text-slate-300">{summary}</p>
          <Highlights items={highlights} />
        </Expandable>
        {links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map(({ id: linkId, href, Icon }) => (
              <a
                key={linkId}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-white/10 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {linkLabels[linkId]}
                <Icon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        )}
        <Tags items={stack} label={t.info.stack} />
      </Card>
    );
  });
};

const Entries = ({ items }) => (
  <ul className="space-y-4">
    {items.map(({ title, school, period, description }) => (
      <li key={title}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <p className="font-semibold text-white">{title}</p>
          <p className="text-sm text-slate-400">{period}</p>
        </div>
        <p className="text-sm text-slate-400">{school}</p>
        {description && <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>}
      </li>
    ))}
  </ul>
);

const About = () => {
  const { t } = useLanguage();
  const { title, body, blocks, skills, education, certifications, languages } = t.info.about;
  return (
    <Card>
      <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
      <Expandable>
        <p className="mt-4 leading-relaxed text-slate-300">{body}</p>

        <Block title={blocks.skills}>
          <dl className="space-y-4">
            {skills.map(({ area, items }) => (
              <div key={area}>
                <dt className="font-semibold text-white">{area}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-300">{items}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title={blocks.education}>
          <Entries items={education} />
        </Block>

        <Block title={blocks.certifications}>
          <Entries items={certifications} />
        </Block>

        <Block title={blocks.languages}>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {languages.map(({ name, level }) => (
              <li key={name} className="text-slate-300">
                <span className="font-semibold text-white">{name}</span> · {level}
              </li>
            ))}
          </ul>
        </Block>
      </Expandable>
    </Card>
  );
};

const panels = { experience: Experience, projects: Projects, about: About };

const Info = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(tabs[0]);
  const tabRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    const offset = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!offset) return;
    const next = (index + offset + tabs.length) % tabs.length;
    setActive(tabs[next]);
    tabRefs.current[next].focus();
  };

  const Panel = panels[active];

  return (
    <section id="content" className="scroll-mt-16 bg-slate-950 px-6 dark:border-t dark:border-white/10 dark:bg-night-deep py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <p className="text-center text-xs font-semibold tracking-widest text-accent uppercase">{t.info.eyebrow}</p>
        <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-balance text-white md:text-4xl">
          {t.info.title}
        </h2>

        <div className="mt-10 flex justify-center">
          <div role="tablist" aria-label={t.info.tablist} className="inline-flex rounded-full bg-white/5 p-1 ring-1 ring-white/10">
            {tabs.map((id, index) => {
              const selected = active === id;
              return (
                <button
                  key={id}
                  ref={(el) => (tabRefs.current[index] = el)}
                  id={`tab-${id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`panel-${id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`min-h-11 cursor-pointer rounded-full px-3.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-6 ${
                    selected ? "bg-white text-slate-950 shadow" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {t.info.tabs[id]}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={active}
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="mt-12 space-y-6 motion-safe:animate-fade-in"
        >
          <Panel />
        </div>
      </div>
    </section>
  );
};

export default Info;
