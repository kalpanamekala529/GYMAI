import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMagnifyingGlass, HiOutlineBookOpen } from "react-icons/hi2";
import GradientOrb from "../components/ui/GradientOrb";
import ExerciseCard from "../components/exercises/ExerciseCard";
import ExerciseModal from "../components/exercises/ExerciseModal";
import exercises, { muscleGroups } from "../data/exercises";

const ExerciseLibrary = () => {
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return exercises.filter((ex) => {
      const matchesGroup = group === "All" || ex.muscleGroup === group;
      const matchesSearch = !q || ex.name.toLowerCase().includes(q);
      return matchesGroup && matchesSearch;
    });
  }, [search, group]);

  return (
    <section className="relative pt-32 pb-24 min-h-screen overflow-clip">
      <GradientOrb className="top-0 right-0 translate-x-1/3 -translate-y-1/4" />

      <div className="section flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">
            <HiOutlineBookOpen className="text-sm" />
            Exercise Library
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white mt-4">
            Every movement, explained
          </h1>
          <p className="text-mist-400 text-sm mt-1 max-w-lg">
            Search or filter by muscle group to find the right exercise, its
            difficulty, and how to fit it into your plan.
          </p>
        </motion.div>

        {/* Search + filters */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 rounded-xl glass px-4 py-3 max-w-md focus-within:border-violet-400/40 transition-colors duration-200">
            <HiOutlineMagnifyingGlass className="text-mist-500 text-lg shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search exercises..."
              aria-label="Search exercises"
              className="w-full bg-transparent text-sm text-white placeholder:text-mist-500 outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            {muscleGroups.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                  group === g
                    ? "bg-gradient-to-r from-violet-600 to-magenta-600 text-white shadow-glow-sm"
                    : "glass glass-hover text-mist-300"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <p className="text-mist-500 text-xs">
          Showing {filtered.length} of {exercises.length} exercises
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((ex, i) => (
              <ExerciseCard key={ex.id} exercise={ex} onView={setActive} index={i} />
            ))}
          </div>
        ) : (
          <div className="glass rounded-3xl py-16 text-center text-mist-400 text-sm">
            No exercises match your search. Try a different term or filter.
          </div>
        )}
      </div>

      <ExerciseModal exercise={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default ExerciseLibrary;
