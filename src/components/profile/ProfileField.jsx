const ProfileField = ({ label, value, icon: Icon }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/5 px-4 py-3.5">
      {Icon && <Icon className="text-violet-300 text-lg shrink-0" />}
      <div className="min-w-0">
        <p className="text-mist-500 text-xs uppercase tracking-wide">{label}</p>
        <p className="text-white text-sm font-medium mt-0.5 truncate">{value}</p>
      </div>
    </div>
  );
};

export default ProfileField;
