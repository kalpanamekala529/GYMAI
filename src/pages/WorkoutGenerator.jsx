import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineBookmark,
  HiOutlineBookmarkSlash,
  HiOutlineFlag,
  HiOutlineChartBarSquare,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import GlassCard from "../components/ui/GlassCard";
import GradientOrb from "../components/ui/GradientOrb";
import Select from "../components/ui/Select";
import DayPlanCard from "../components/generator/DayPlanCard";
import workoutPlan from "../data/workoutPlan";

const GOALS = ["Build Muscle", "Lose Weight", "Improve Endurance", "General Fitness", "Increase Strength"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const DAY_OPTIONS = [3, 4, 5, 6, 7];

const STORAGE_KEY = "gymai_saved_workout";

const WorkoutGenerator = () => {
  const [form, setForm] = useState({ goal: GOALS[0], level: LEVELS[0], days: 5 });
  const [plan, setPlan] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [saved, setSaved] = useState(false);

  // Restore a previously saved plan, if any.
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (stored?.plan?.length) {
        setPlan(stored.plan);
        setForm({ goal: stored.goal, level: stored.level, days: stored.days });
        setSaved(true);
      }
    } catch {
      // ignore malformed localStorage data
    }
  }, []);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerating(true);
    setSaved(false);
    setTimeout(() => {
      setPlan(workoutPlan.slice(0, Number(form.days)));
      setGenerating(false);
    }, 600);
  };

  const handleSave = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...form, days: Number(form.days), plan, savedAt: new Date().toISOString() })
    );
    setSaved(true);
  };

  const handleClearSaved = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSaved(false);
  };

  return (
    <section className="relative pt-32 pb-24 min-h-screen overflow-clip">
      <GradientOrb className="top-0 right-0 translate-x-1/3 -translate-y-1/4" />

      <div className="section flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">
            <HiOutlineSparkles className="text-sm" />
            Workout Generator
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white mt-4">
            Build your next plan
          </h1>
          <p className="text-mist-400 text-sm mt-1 max-w-lg">
            Set your goal, experience level, and how many days you can train.
            GymAI will lay out a structured split — no AI call needed for this
            demo, just solid programming defaults.
          </p>
        </motion.div>

        <GlassCard hover={false} className="max-w-2xl">
          <form onSubmit={handleGenerate} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-5">
              <Select label="Goal" name="goal" options={GOALS} value={form.goal} onChange={handleChange} />
              <Select label="Fitness Level" name="level" options={LEVELS} value={form.level} onChange={handleChange} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-mist-300">Workout Days</label>
              <div className="flex flex-wrap gap-2.5">
                {DAY_OPTIONS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, days: d }))}
                    className={`w-14 h-14 rounded-2xl font-stat text-xl transition-all duration-200 ${
                      Number(form.days) === d
                        ? "bg-gradient-to-br from-violet-600 to-magenta-600 text-white shadow-glow-sm"
                        : "glass glass-hover text-mist-300"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <p className="text-mist-500 text-xs">days per week</p>
            </div>

            <button type="submit" disabled={generating} className="btn-primary w-full sm:w-auto self-start disabled:opacity-60">
              <HiOutlineSparkles />
              {generating ? "Generating..." : "Generate Workout"}
            </button>
          </form>
        </GlassCard>

        <AnimatePresence>
          {plan && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-white font-display font-semibold text-xl">
                    Your {form.days}-Day Plan
                  </h2>
                  <span className="eyebrow !py-1">
                    <HiOutlineFlag className="text-xs" /> {form.goal}
                  </span>
                  <span className="eyebrow !py-1">
                    <HiOutlineChartBarSquare className="text-xs" /> {form.level}
                  </span>
                  <span className="eyebrow !py-1">
                    <HiOutlineCalendarDays className="text-xs" /> {form.days} days/week
                  </span>
                </div>

                {saved ? (
                  <button onClick={handleClearSaved} className="btn-secondary text-sm shrink-0">
                    <HiOutlineBookmarkSlash />
                    Remove Saved Plan
                  </button>
                ) : (
                  <button onClick={handleSave} className="btn-primary text-sm shrink-0">
                    <HiOutlineBookmark />
                    Save Plan
                  </button>
                )}
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {plan.map((day) => (
                  <DayPlanCard key={day.day} plan={day} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkoutGenerator;
