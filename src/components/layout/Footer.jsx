import { Link } from "react-router-dom";
import { FaDumbbell, FaInstagram, FaXTwitter, FaYoutube, FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Exercise Library", to: "/exercises" },
  { label: "Workout Generator", to: "/generator" },
  { label: "Profile", to: "/profile" },
];

const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaGithub, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 mt-32">
      <div className="section py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div className="md:col-span-2 flex flex-col gap-4 max-w-sm">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-magenta-600">
              <FaDumbbell className="text-white text-base" />
            </span>
            <span className="font-display font-semibold text-lg text-white">
              Gym<span className="text-gradient">AI</span>
            </span>
          </Link>
          <p className="text-mist-400 text-sm leading-relaxed">
            GymAI turns your goals, schedule, and experience into a complete
            training plan — then adapts it as you go. Built as a college
            project prototype to explore AI-assisted fitness coaching.
          </p>
          <div className="flex items-center gap-3 pt-1">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid place-items-center w-9 h-9 rounded-full glass glass-hover text-mist-300 hover:text-white"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm tracking-wide uppercase">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-mist-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm tracking-wide uppercase">
            Contact
          </h4>
          <a
            href="mailto:hello@gymai.app"
            className="flex items-center gap-2 text-mist-400 hover:text-white text-sm transition-colors"
          >
            <HiOutlineMail className="text-base" />
            hello@gymai.app
          </a>
          <p className="text-mist-500 text-sm leading-relaxed">
            Academic project — GymAI is a UI prototype and does not send or
            store real messages.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-mist-500 text-xs">
            © {new Date().getFullYear()} GymAI. College project — demo purposes only.
          </p>
          <p className="text-mist-500 text-xs">Designed &amp; built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
