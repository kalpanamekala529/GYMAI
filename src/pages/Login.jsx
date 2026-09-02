import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineArrowRight } from "react-icons/hi2";
import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/ui/FormInput";
import { useAuth } from "../context/AuthContext";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Already logged in? skip the form.
  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard", { replace: true });
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };
  const validate = () => {
    const next = {};
    if (!emailPattern.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.password) next.password = "Password is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Small simulated delay so the flow feels like a real request.
    setTimeout(() => {
      login(form.email);
      const redirectTo = location.state?.from || "/dashboard";
      navigate(redirectTo, { replace: true });
    }, 500);
  };

  return (
    <AuthLayout
      eyebrow="Welcome Back"
      title="Log in to GymAI"
      subtitle="This is a demo — any email and password combination works."
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/signup" className="text-violet-300 hover:text-violet-200 font-medium">
            Sign up
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <FormInput
          label="Email"
          name="email"
          type="email"
          icon={HiOutlineEnvelope}
          placeholder="you@example.com"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          icon={HiOutlineLockClosed}
          placeholder="••••••••"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-mist-400 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded accent-violet-500"
            />
            Remember me
          </label>
          <button
            type="button"
            onClick={() =>
              setNotice("Password reset isn't available in this prototype.")
            }
            className="text-violet-300 hover:text-violet-200 font-medium"
          >
            Forgot password?
          </button>
        </div>

        {notice && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-mist-500 -mt-2"
          >
            {notice}
          </motion.p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full mt-2 disabled:opacity-60"
        >
          {submitting ? "Logging in..." : "Log In"}
          {!submitting && <HiOutlineArrowRight />}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
