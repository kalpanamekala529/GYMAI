import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { weeklyProgress } from "../../data/dashboard";

const WeeklyProgressChart = () => {
  const max = Math.max(...weeklyProgress.map((d) => d.calories));

  return (
    <GlassCard hover={false} className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-display font-semibold text-lg">
            Weekly Progress
          </h3>
          <p className="text-mist-500 text-xs mt-0.5">Calories burned per day</p>
        </div>
        <span className="eyebrow !py-1">This Week</span>
      </div>

      <div className="flex items-end justify-between gap-3 h-44 px-1">
        {weeklyProgress.map((d, i) => (
          <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
            <div className="relative w-full h-36 flex items-end rounded-lg overflow-hidden bg-white/[0.03]">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(d.calories / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                className="w-full rounded-lg bg-gradient-to-t from-violet-600 to-magenta-400"
              />
            </div>
            <span className="text-mist-500 text-xs">{d.day}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default WeeklyProgressChart;
