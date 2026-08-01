import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import features from "../../data/features";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="section flex flex-col gap-14">
        <SectionHeading
          eyebrow="Why GymAI"
          title="Programming that thinks like a coach"
          description="Most apps hand you a static PDF. GymAI builds a plan around your specific inputs and keeps reshaping it as your training does."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ id, icon: Icon, title, description }, i) => (
            <GlassCard
              key={id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4 group"
            >
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600/20 to-magenta-600/20 border border-violet-400/20 group-hover:from-violet-600 group-hover:to-magenta-600 transition-all duration-300">
                <Icon className="text-xl text-violet-300 group-hover:text-white transition-colors duration-300" />
              </span>
              <h3 className="text-white font-display font-semibold text-lg">
                {title}
              </h3>
              <p className="text-mist-400 text-sm leading-relaxed">
                {description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
