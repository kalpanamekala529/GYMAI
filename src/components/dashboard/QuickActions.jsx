import { HiOutlineBolt, HiOutlineBookOpen, HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

const actions = [
  { label: "Generate Workout", to: "/generator", icon: HiOutlineBolt },
  { label: "Browse Exercises", to: "/exercises", icon: HiOutlineBookOpen },
  { label: "Edit Profile", to: "/profile", icon: HiOutlineUserCircle },
];

const QuickActions = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map(({ label, to, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          className="flex items-center gap-2 glass glass-hover rounded-full px-5 py-2.5 text-sm font-medium text-mist-200 hover:text-white"
        >
          <Icon className="text-base text-violet-300" />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;
