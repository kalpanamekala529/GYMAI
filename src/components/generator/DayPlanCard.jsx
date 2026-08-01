import { motion } from "framer-motion";
import { HiOutlineMoon } from "react-icons/hi2";

const DayPlanCard = ({ plan }) => {
  const isRest = plan.exercises.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl p-6 flex flex-col gap-4"
    >
      <div>
        <p className="text-mist-500 text-xs uppercase tracking-wide">{plan.day}</p>
        <h3 className="text-white font-display font-semibold text-lg mt-0.5">{plan.focus}</h3>
      </div>

      {isRest ? (
        <div className="flex items-center gap-2 text-mist-400 text-sm py-4">
          <HiOutlineMoon className="text-violet-300 text-lg" />
          Full rest. Let your body recover.
        </div>
      ) : (
        <ul className="flex flex-col gap-2.5">
          {plan.exercises.map((ex) => (
            <li
              key={ex.name}
              className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 px-4 py-2.5"
            >
              <span className="text-mist-100 text-sm font-medium">{ex.name}</span>
              <span className="text-violet-300 text-xs font-semibold">{ex.sets}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default DayPlanCard;
