import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa6";
import GradientOrb from "../ui/GradientOrb";

const AuthLayout = ({ eyebrow, title, subtitle, children, footer }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16 overflow-clip">
      <div className="absolute inset-0 -z-20 bg-hero-gradient" />
      <GradientOrb className="top-0 right-0 translate-x-1/3 -translate-y-1/4" />
      <GradientOrb
        className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3"
        size="w-[420px] h-[420px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass rounded-3xl w-full max-w-md px-8 py-10 sm:px-10 sm:py-12"
      >
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-magenta-600 shadow-glow-sm">
            <FaDumbbell className="text-white text-base" />
          </span>
          <span className="font-display font-semibold text-xl text-white">
            Gym<span className="text-gradient">AI</span>
          </span>
        </Link>

        <div className="text-center mb-8">
          {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white mt-3">
            {title}
          </h1>
          {subtitle && <p className="text-mist-400 text-sm mt-2">{subtitle}</p>}
        </div>

        {children}

        {footer && <div className="mt-8 text-center text-sm text-mist-400">{footer}</div>}
      </motion.div>
    </section>
  );
};

export default AuthLayout;
