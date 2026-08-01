import { FaQuoteRight } from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";
import testimonials from "../../data/testimonials";

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const TestimonialCard = ({ t }) => (
  <div className="glass rounded-3xl p-6 w-[320px] sm:w-[360px] shrink-0 flex flex-col gap-4">
    <FaQuoteRight className="text-xl text-violet-400/60" />
    <p className="text-mist-200 text-sm leading-relaxed grow">"{t.quote}"</p>
    <div className="flex items-center gap-3 pt-2 border-t border-white/10">
      <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-magenta-600 text-white text-xs font-semibold shrink-0">
        {initials(t.name)}
      </span>
      <div>
        <p className="text-white text-sm font-medium">{t.name}</p>
        <p className="text-mist-500 text-xs">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 md:py-32 overflow-clip">
      <div className="section flex flex-col gap-14">
        <SectionHeading
          eyebrow="Real Results"
          title="Trusted by people who actually train"
          description="Demo testimonials illustrating the kind of feedback GymAI is designed around."
        />
      </div>

      <div className="relative mt-4 mask-fade-x">
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
