import { HiOutlineBolt } from "react-icons/hi2";
import { FaFire, FaClock } from "react-icons/fa6";
import GlassCard from "../ui/GlassCard";
import { todaysWorkout } from "../../data/dashboard";

const TodaysWorkoutCard = () => {
  return (
    <GlassCard hover={false} className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-mist-500 text-xs uppercase tracking-wide">Today's Workout</p>
          <h3 className="text-white font-display font-semibold text-lg mt-0.5">
            {todaysWorkout.title}
          </h3>
          <p className="text-mist-500 text-xs mt-0.5">{todaysWorkout.focus}</p>
        </div>
        <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-magenta-600 shadow-glow-sm shrink-0">
          <HiOutlineBolt className="text-white" />
        </span>
      </div>

      <ul className="flex flex-col gap-2.5">
        {todaysWorkout.exercises.map((ex) => (
          <li
            key={ex.name}
            className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 px-4 py-2.5"
          >
            <span className="text-mist-100 text-sm font-medium">{ex.name}</span>
            <span className="text-violet-300 text-xs font-semibold">{ex.sets}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <span className="flex items-center gap-1.5 text-mist-400 text-xs">
          <FaClock className="text-violet-300" /> {todaysWorkout.duration}
        </span>
        <span className="flex items-center gap-1.5 text-mist-400 text-xs">
          <FaFire className="text-magenta-400" /> ~{todaysWorkout.calories} kcal
        </span>
      </div>
    </GlassCard>
  );
};

export default TodaysWorkoutCard;
