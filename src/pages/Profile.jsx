import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlinePencil,
  HiOutlineCheck,
  HiOutlineXMark,
  HiOutlineCamera,
  HiOutlineCake,
  HiOutlineUserCircle,
  HiOutlineArrowsUpDown,
  HiOutlineScale,
  HiOutlineFlag,
  HiOutlineChartBarSquare,
} from "react-icons/hi2";
import { useAuth } from "../context/AuthContext";
import GlassCard from "../components/ui/GlassCard";
import FormInput from "../components/ui/FormInput";
import Select from "../components/ui/Select";
import ProfileField from "../components/profile/ProfileField";
import GradientOrb from "../components/ui/GradientOrb";

const GENDERS = ["Male", "Female", "Other", "Prefer not to say"];
const GOALS = ["Build Muscle", "Lose Weight", "Improve Endurance", "General Fitness", "Increase Strength"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];

const initials = (name = "") =>
  name.split(" ").filter(Boolean).map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    fullName: user?.fullName || "",
    age: user?.age || "",
    gender: user?.gender || GENDERS[0],
    height: user?.height || "",
    weight: user?.weight || "",
    goal: user?.goal || GOALS[0],
    level: user?.level || LEVELS[0],
  });

  const startEditing = () => {
    setForm({
      fullName: user?.fullName || "",
      age: user?.age || "",
      gender: user?.gender || GENDERS[0],
      height: user?.height || "",
      weight: user?.weight || "",
      goal: user?.goal || GOALS[0],
      level: user?.level || LEVELS[0],
    });
    setEditing(true);
    setSaved(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({
      ...form,
      age: Number(form.age) || form.age,
      height: Number(form.height) || form.height,
      weight: Number(form.weight) || form.weight,
    });
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (!user) return null;

  return (
    <section className="relative pt-32 pb-24 min-h-screen overflow-clip">
      <GradientOrb className="top-0 right-0 translate-x-1/3 -translate-y-1/4" />

      <div className="section max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white">
            Your Profile
          </h1>
          <p className="text-mist-400 text-sm mt-1">
            Keep your details current so plans stay accurate.
          </p>
        </motion.div>

        <GlassCard hover={false} className="mt-8">
          {/* Photo + name header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-8 border-b border-white/10">
            <div className="relative w-20 h-20 shrink-0">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-600 to-magenta-600 grid place-items-center shadow-glow-sm">
                <span className="font-stat text-2xl text-white tracking-wide">
                  {initials(user.fullName)}
                </span>
              </div>
              <button
                type="button"
                className="absolute -bottom-1 -right-1 grid place-items-center w-8 h-8 rounded-full glass text-mist-300 hover:text-white"
                aria-label="Change photo"
                title="Photo upload isn't wired up in this demo"
              >
                <HiOutlineCamera className="text-sm" />
              </button>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-white font-display font-semibold text-xl truncate">
                {user.fullName}
              </h2>
              <p className="text-mist-400 text-sm truncate">{user.email}</p>
            </div>

            {!editing && (
              <button onClick={startEditing} className="btn-secondary text-sm shrink-0">
                <HiOutlinePencil className="text-base" />
                Edit Profile
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {editing ? (
              <motion.form
                key="edit"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSave}
                className="pt-8 flex flex-col gap-5"
              >
                <FormInput label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} />
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormInput label="Age" name="age" type="number" min="10" max="100" value={form.age} onChange={handleChange} />
                  <Select label="Gender" name="gender" options={GENDERS} value={form.gender} onChange={handleChange} />
                  <FormInput label="Height (cm)" name="height" type="number" min="100" max="250" value={form.height} onChange={handleChange} />
                  <FormInput label="Weight (kg)" name="weight" type="number" min="30" max="250" value={form.weight} onChange={handleChange} />
                  <Select label="Fitness Goal" name="goal" options={GOALS} value={form.goal} onChange={handleChange} />
                  <Select label="Fitness Level" name="level" options={LEVELS} value={form.level} onChange={handleChange} />
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="submit" className="btn-primary flex-1">
                    <HiOutlineCheck />
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="btn-secondary flex-1"
                  >
                    <HiOutlineXMark />
                    Cancel
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="view"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="pt-8 grid sm:grid-cols-2 gap-4"
              >
                <ProfileField label="Age" value={user.age} icon={HiOutlineCake} />
                <ProfileField label="Gender" value={user.gender} icon={HiOutlineUserCircle} />
                <ProfileField label="Height" value={`${user.height} cm`} icon={HiOutlineArrowsUpDown} />
                <ProfileField label="Weight" value={`${user.weight} kg`} icon={HiOutlineScale} />
                <ProfileField label="Fitness Goal" value={user.goal} icon={HiOutlineFlag} />
                <ProfileField label="Fitness Level" value={user.level} icon={HiOutlineChartBarSquare} />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {saved && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 text-sm text-violet-300"
              >
                Profile updated.
              </motion.p>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  );
};

export default Profile;
