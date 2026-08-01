import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineBolt } from "react-icons/hi2";
import { FaFire, FaClock } from "react-icons/fa6";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import GradientOrb from "../ui/GradientOrb";

const stats = [
  { value: "12K+", label: "Plans Generated" },
  { value: "150+", label: "Exercises Mapped" },
  { value: "4.9", label: "Avg. User Rating" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-clip">
      {/* Background: faint grid + signature pulsing orb */}
      <div className="absolute inset-0 -z-20 bg-hero-gradient" />
      <div
        className="absolute inset-0 -z-20 bg-grid-mesh opacity-40 mask-fade-x"
        style={{ backgroundSize: "48px 48px" }}
        aria-hidden="true"
      />
      <GradientOrb className="top-0 right-0 translate-x-1/3 -translate-y-1/4" />
      <GradientOrb
        className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3"
        size="w-[420px] h-[420px]"
      />

      <div className="section grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        {/* Left: copy */}
        <div className="flex flex-col items-start gap-7">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow"
          >
            <HiOutlineBolt className="text-sm" />
            AI-Powered Training
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            Train Smarter
            <br />
            <span className="text-gradient">with AI</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-mist-400 text-base md:text-lg max-w-lg leading-relaxed"
          >
            Tell GymAI your goal, your schedule, and your experience. It
            builds a complete workout program around them — and adjusts it
            every time your week does.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <Button to="/signup" icon={HiOutlineArrowRight}>
              Get Started
            </Button>
            <Button to="/generator" variant="secondary">
              Try the Generator
            </Button>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex items-center gap-8 pt-8 flex-wrap"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-stat text-3xl md:text-4xl text-white tracking-wide leading-none">
                  {stat.value}
                </span>
                <span className="text-mist-500 text-xs mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: floating workout preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative mx-auto w-full max-w-md"
        >
          <GlassCard hover={false} className="animate-float relative z-10" padding="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-mist-500 text-xs uppercase tracking-wide">Today's Plan</p>
                <p className="text-white font-display font-semibold text-lg">Upper Body Push</p>
              </div>
              <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-magenta-600 shadow-glow-sm">
                <HiOutlineBolt className="text-white" />
              </span>
            </div>

            <ul className="flex flex-col gap-3">
              {[
                { name: "Bench Press", sets: "4 × 8" },
                { name: "Overhead Press", sets: "3 × 10" },
                { name: "Incline Dumbbell Fly", sets: "3 × 12" },
              ].map((ex) => (
                <li
                  key={ex.name}
                  className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3"
                >
                  <span className="text-mist-100 text-sm font-medium">{ex.name}</span>
                  <span className="text-violet-300 text-xs font-semibold">{ex.sets}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-5 pt-5 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-mist-400 text-xs">
                <FaClock className="text-violet-300" /> 48 min
              </span>
              <span className="flex items-center gap-1.5 text-mist-400 text-xs">
                <FaFire className="text-magenta-400" /> ~410 kcal
              </span>
            </div>
          </GlassCard>

          {/* Floating streak badge */}
          <GlassCard
            hover={false}
            padding="p-4"
            className="animate-float-delay absolute -bottom-8 -left-8 z-20 hidden sm:block"
          >
            <p className="text-mist-500 text-[11px] uppercase tracking-wide">Streak</p>
            <p className="font-stat text-3xl text-white leading-none mt-1">18 days</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
