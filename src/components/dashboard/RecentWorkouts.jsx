import { HiOutlineCalendarDays } from "react-icons/hi2";
import GlassCard from "../ui/GlassCard";
import { recentWorkouts } from "../../data/dashboard";

const RecentWorkouts = () => {
  return (
    <GlassCard hover={false} className="flex flex-col gap-5">
      <h3 className="text-white font-display font-semibold text-lg">Recent Workouts</h3>

      <ul className="flex flex-col divide-y divide-white/5">
        {recentWorkouts.map((w) => (
          <li key={w.id} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 shrink-0">
                <HiOutlineCalendarDays className="text-violet-300 text-base" />
              </span>
              <div>
                <p className="text-mist-100 text-sm font-medium">{w.name}</p>
                <p className="text-mist-500 text-xs">{w.date}</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-mist-300 text-sm">{w.duration}</p>
              <p className="text-mist-500 text-xs">{w.calories} kcal</p>
            </div>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
};

export default RecentWorkouts;
