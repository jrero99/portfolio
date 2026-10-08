import { ArrowUpRightIcon } from "./Icons";
import { useLanguage } from "../i18n/LanguageContext";

const EMAIL = "jredondorodriguez99@gmail.com";

const options = ["freelance", "fullTime"];

const Availability = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-16 border-t border-white/10 bg-slate-950 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl">
        <p className="text-center text-xs font-semibold tracking-widest text-blue-400 uppercase">{t.availability.eyebrow}</p>
        <h2 className="mt-3 text-center font-display text-3xl font-bold tracking-tight text-balance text-white md:text-4xl">
          {t.availability.title}
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {options.map((id) => {
            const { label, text, cta, subject } = t.availability.options[id];
            return (
              <li key={id} className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
                <h3 className="font-display text-xl font-semibold text-white">{label}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-300">{text}</p>
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`}
                  className="group mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-full bg-white/10 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  {cta}
                  <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Availability;
