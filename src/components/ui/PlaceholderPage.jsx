import { motion } from "framer-motion";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import GradientOrb from "./GradientOrb";

/**
 * Temporary stand-in for pages scheduled for a later build step.
 * Keeps every navbar/router link functional while we build GymAI
 * one page at a time.
 */
const PlaceholderPage = ({ title, description }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-clip">
      <GradientOrb className="top-1/3 left-1/2 -translate-x-1/2" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl px-10 py-14 text-center max-w-md mx-6"
      >
        <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-magenta-600 mx-auto mb-6 shadow-glow-sm">
          <HiOutlineWrenchScrewdriver className="text-2xl text-white" />
        </span>
        <h1 className="font-display text-2xl font-semibold text-white mb-3">
          {title}
        </h1>
        <p className="text-mist-400 text-sm leading-relaxed">
          {description || "This page is being built in the next step of the GymAI frontend."}
        </p>
      </motion.div>
    </section>
  );
};

export default PlaceholderPage;
