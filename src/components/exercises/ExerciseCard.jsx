import { motion } from "framer-motion";
import { FaDumbbell } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";
import GlassCard from "../ui/GlassCard";

const difficultyDot = {
  Beginner: "bg-emerald-400",
  Intermediate: "bg-amber-400",
  Advanced: "bg-rose-400",
};

const ExerciseCard = ({ exercise, onView, index = 0 }) => {
  return (
    <GlassCard
      padding="p-0"
      className="flex flex-col overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index, 8) * 0.04 }}
    >
      {/* Image placeholder */}
      <div className="relative h-36 shrink-0 grid place-items-center bg-gradient-to-br from-violet-700/40 via-ink-800 to-magenta-700/20 border-b border-white/10 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.35), transparent 55%)",
          }}
        />
        <FaDumbbell className="text-4xl text-white/25 group-hover:text-white/40 group-hover:scale-110 transition-all duration-300" />
        <span className="absolute top-3 left-3 eyebrow !py-1 !px-2.5 !text-[10px]">
          {exercise.muscleGroup}
        </span>
      </div>

      <div className="flex flex-col gap-3 p-5 grow">
        <h3 className="text-white font-display font-semibold text-base leading-snug">
          {exercise.name}
        </h3>

        <div className="flex items-center gap-2 text-xs text-mist-400">
          <span className={`w-1.5 h-1.5 rounded-full ${difficultyDot[exercise.difficulty]}`} />
          {exercise.difficulty}
          <span className="text-mist-600">•</span>
          {exercise.equipment}
        </div>

        <button
          onClick={() => onView(exercise)}
          className="mt-auto flex items-center justify-between rounded-xl bg-white/5 hover:bg-white/10 px-4 py-2.5 text-sm font-medium text-mist-200 hover:text-white transition-colors duration-200"
        >
          View Details
          <HiOutlineArrowRight className="text-sm" />
        </button>
      </div>
    </GlassCard>
  );
};

export default ExerciseCard;
