import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import Button from "../ui/Button";
import GradientOrb from "../ui/GradientOrb";

const CTA = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-[2.5rem] px-8 py-16 md:py-20 text-center overflow-clip"
        >
          <GradientOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[500px] h-[500px]" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-2xl mx-auto">
            Your next plan is one conversation away
          </h2>
          <p className="text-mist-400 mt-4 max-w-lg mx-auto">
            Create your profile, set your goal, and let GymAI put together
            week one.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/signup" icon={HiOutlineArrowRight}>
              Create Free Account
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
