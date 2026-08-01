import {
  HiOutlineSparkles,
  HiOutlineChartBar,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCalendarDays,
  HiOutlineFire,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

const features = [
  {
    id: 1,
    icon: HiOutlineSparkles,
    title: "AI-Generated Plans",
    description:
      "Describe your goal once. GymAI drafts a complete program built around your equipment, schedule, and experience.",
  },
  {
    id: 2,
    icon: HiOutlineAdjustmentsHorizontal,
    title: "Adapts As You Go",
    description:
      "Miss a session or plateau on a lift? Your next week's plan quietly adjusts instead of staying static.",
  },
  {
    id: 3,
    icon: HiOutlineCalendarDays,
    title: "Built Around Your Week",
    description:
      "Pick 2 to 6 training days and GymAI arranges volume and recovery so nothing gets crowded together.",
  },
  {
    id: 4,
    icon: HiOutlineChartBar,
    title: "Progress You Can See",
    description:
      "Streaks, calories, and BMI tracked in one dashboard, so effort turns into a visible trend line.",
  },
  {
    id: 5,
    icon: HiOutlineFire,
    title: "Exercise Library",
    description:
      "Every movement in your plan is explained, with muscle group and difficulty, so you never train blind.",
  },
  {
    id: 6,
    icon: HiOutlineShieldCheck,
    title: "Built On Real Programming",
    description:
      "No random exercise generators. Plans follow established strength and hypertrophy principles.",
  },
];

export default features;
