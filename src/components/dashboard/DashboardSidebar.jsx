import { NavLink } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineBolt,
  HiOutlineBookOpen,
  HiOutlineUserCircle,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { useAuth } from "../../context/AuthContext";

const items = [
  { label: "Overview", to: "/dashboard", icon: HiOutlineSquares2X2 },
  { label: "Workout Generator", to: "/generator", icon: HiOutlineBolt },
  { label: "Exercise Library", to: "/exercises", icon: HiOutlineBookOpen },
  { label: "Profile", to: "/profile", icon: HiOutlineUserCircle },
];

const DashboardSidebar = () => {
  const { logout } = useAuth();

  return (
    <aside className="hidden lg:flex flex-col justify-between w-64 shrink-0 glass rounded-3xl p-5 h-fit sticky top-28">
      <nav className="flex flex-col gap-1">
        <p className="text-mist-500 text-xs font-semibold uppercase tracking-wide px-3 pb-2">
          Menu
        </p>
        {items.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-violet-600/20 to-magenta-600/20 text-white border border-violet-400/20"
                  : "text-mist-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            <Icon className="text-lg shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-mist-400 hover:text-white hover:bg-white/5 transition-colors duration-200 mt-6"
      >
        <HiOutlineArrowRightOnRectangle className="text-lg" />
        Logout
      </button>
    </aside>
  );
};

export default DashboardSidebar;
