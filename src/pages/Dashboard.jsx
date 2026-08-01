import { motion } from "framer-motion";
import { HiOutlineFire, HiOutlineScale, HiOutlineTrophy } from "react-icons/hi2";
import { useAuth } from "../context/AuthContext";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import StatCard from "../components/dashboard/StatCard";
import TodaysWorkoutCard from "../components/dashboard/TodaysWorkoutCard";
import WeeklyProgressChart from "../components/dashboard/WeeklyProgressChart";
import RecentWorkouts from "../components/dashboard/RecentWorkouts";
import QuickActions from "../components/dashboard/QuickActions";

const CALORIES_TODAY = 620;
const STREAK_DAYS = 18;

const bmiCategory = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
};

const Dashboard = () => {
  const { user } = useAuth();
  const firstName = user?.fullName?.split(" ")[0] || "there";

  const heightM = (user?.height || 170) / 100;
  const bmi = (user?.weight || 70) / (heightM * heightM);

  return (
    <section className="relative pt-32 pb-24 min-h-screen">
      <div className="section flex flex-col lg:flex-row gap-8 items-start">
        <DashboardSidebar />

        <div className="flex-1 w-full flex flex-col gap-8 min-w-0">
          {/* Welcome header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                Welcome back, {firstName} 👋
              </h1>
              <p className="text-mist-400 text-sm mt-1">
                Here's where your training stands today.
              </p>
            </div>
          </motion.div>

          {/* Stat grid */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <StatCard
              icon={HiOutlineFire}
              label="Calories Burned"
              value={CALORIES_TODAY}
              unit="kcal"
              sub="Today's total, across all activity"
              delay={0}
            />
            <StatCard
              icon={HiOutlineScale}
              label="BMI"
              value={bmi.toFixed(1)}
              sub={bmiCategory(bmi)}
              accent="from-fuchsia-500 to-violet-600"
              delay={0.05}
            />
            <StatCard
              icon={HiOutlineTrophy}
              label="Workout Streak"
              value={STREAK_DAYS}
              unit="days"
              sub="Keep it going — don't break the chain"
              accent="from-violet-500 to-purple-700"
              delay={0.1}
            />
          </div>

          {/* Today's workout + weekly chart */}
          <div className="grid lg:grid-cols-2 gap-6">
            <TodaysWorkoutCard />
            <WeeklyProgressChart />
          </div>

          {/* Quick actions */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-display font-semibold text-lg">Quick Actions</h3>
            <QuickActions />
          </div>

          <RecentWorkouts />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
