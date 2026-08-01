import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineArrowRight } from "react-icons/hi2";
import AuthLayout from "../components/auth/AuthLayout";
import FormInput from "../components/ui/FormInput";
import { useAuth } from "../context/AuthContext";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Signup = () => {
  const { signup, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard", { replace: true });
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!emailPattern.test(form.email)) next.email = "Enter a valid email address.";
    if (form.password.length < 6) next.password = "Use at least 6 characters.";
    if (form.confirmPassword !== form.password) next.confirmPassword = "Passwords don't match.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      signup(form.fullName.trim(), form.email);
      navigate("/dashboard", { replace: true });
    }, 500);
  };

  return (
    <AuthLayout
      eyebrow="Get Started"
      title="Create your account"
      subtitle="Set up a profile and GymAI will build your first plan."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-violet-300 hover:text-violet-200 font-medium">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <FormInput
          label="Full Name"
          name="fullName"
          type="text"
          icon={HiOutlineUser}
          placeholder="Jordan Lee"
          autoComplete="name"
          value={form.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
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
          placeholder="At least 6 characters"
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          icon={HiOutlineLockClosed}
          placeholder="Re-enter your password"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full mt-2 disabled:opacity-60"
        >
          {submitting ? "Creating account..." : "Create Account"}
          {!submitting && <HiOutlineArrowRight />}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Signup;
