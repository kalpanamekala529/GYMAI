import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark, HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { FaDumbbell } from "react-icons/fa6";
import { useAuth } from "../../context/AuthContext";

const loggedOutLinks = [{ label: "Home", to: "/" }];

const loggedInLinks = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Exercises", to: "/exercises" },
  { label: "Workout Generator", to: "/generator" },
  { label: "Profile", to: "/profile" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change / resize to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/login", { replace: true });
  };

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-white" : "text-mist-400 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-950/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="section flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-magenta-600 shadow-glow-sm">
            <FaDumbbell className="text-white text-base" />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight text-white">
            Gym<span className="text-gradient">AI</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === "/"}>
                {({ isActive }) => (
                  <span className="relative py-1">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-violet-400 to-magenta-400"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <span className="text-mist-400 text-sm">
                Hi, <span className="text-white font-medium">{user?.fullName?.split(" ")[0]}</span>
              </span>
              <button
                onClick={handleLogout}
                className="btn-secondary !px-5 !py-2.5 text-sm"
              >
                <HiOutlineArrowRightOnRectangle className="text-base" />
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn-secondary !px-5 !py-2.5 text-sm">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn-primary !px-5 !py-2.5 text-sm">
                Get Started
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ink-950/95 backdrop-blur-xl border-b border-white/10"
          >
            <ul className="section flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive ? "bg-white/5 text-white" : "text-mist-400 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="flex gap-3 px-4 pt-3">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="btn-primary w-full text-sm">
                    <HiOutlineArrowRightOnRectangle className="text-base" />
                    Logout
                  </button>
                ) : (
                  <>
                    <NavLink to="/login" onClick={() => setOpen(false)} className="btn-secondary flex-1 text-sm">
                      Login
                    </NavLink>
                    <NavLink to="/signup" onClick={() => setOpen(false)} className="btn-primary flex-1 text-sm">
                      Get Started
                    </NavLink>
                  </>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
