import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDumbbell } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";

const difficultyDot = {
  Beginner: "bg-emerald-400",
  Intermediate: "bg-amber-400",
  Advanced: "bg-rose-400",
};

const ExerciseModal = ({ exercise, onClose }) => {
  useEffect(() => {
    if (!exercise) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [exercise, onClose]);

  return (
    <AnimatePresence>
      {exercise && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exercise-modal-title"
            className="relative glass rounded-3xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
          >
            <div className="relative h-40 grid place-items-center bg-gradient-to-br from-violet-700/40 via-ink-800 to-magenta-700/20 border-b border-white/10">
              <FaDumbbell className="text-5xl text-white/25" />
              <button
                onClick={onClose}
                aria-label="Close details"
                className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white"
              >
                <HiXMark className="text-lg" />
              </button>
              <span className="absolute top-4 left-4 eyebrow !py-1">{exercise.muscleGroup}</span>
            </div>

            <div className="p-7 flex flex-col gap-5">
              <div>
                <h2 id="exercise-modal-title" className="font-display text-xl font-semibold text-white">
                  {exercise.name}
                </h2>
                <div className="flex items-center gap-2 text-xs text-mist-400 mt-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${difficultyDot[exercise.difficulty]}`} />
                  {exercise.difficulty}
                  <span className="text-mist-600">•</span>
                  {exercise.equipment}
                </div>
              </div>

              <p className="text-mist-300 text-sm leading-relaxed">{exercise.description}</p>

              <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 px-4 py-3">
                <span className="text-mist-500 text-xs uppercase tracking-wide">Suggested Volume</span>
                <span className="text-violet-300 text-sm font-semibold">{exercise.sets}</span>
              </div>

              <button onClick={onClose} className="btn-secondary w-full">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExerciseModal;
