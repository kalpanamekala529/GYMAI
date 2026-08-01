import GlassCard from "../ui/GlassCard";

const StatCard = ({ icon: Icon, label, value, unit, sub, accent = "from-violet-600 to-magenta-600", delay = 0 }) => {
  return (
    <GlassCard
      hover={false}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <span className="text-mist-500 text-xs font-semibold uppercase tracking-wide">
          {label}
        </span>
        {Icon && (
          <span className={`grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br ${accent} shadow-glow-sm`}>
            <Icon className="text-white text-base" />
          </span>
        )}
      </div>
      <div className="flex items-end gap-1.5">
        <span className="font-stat text-4xl text-white leading-none">{value}</span>
        {unit && <span className="text-mist-400 text-sm mb-0.5">{unit}</span>}
      </div>
      {sub && <p className="text-mist-500 text-xs">{sub}</p>}
    </GlassCard>
  );
};

export default StatCard;
