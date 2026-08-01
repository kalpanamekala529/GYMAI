const Select = ({ label, name, options, className = "", ...props }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-mist-300">
          {label}
        </label>
      )}
      <div className="glass rounded-xl px-4 py-3 focus-within:border-violet-400/40 transition-colors duration-200">
        <select
          id={name}
          name={name}
          className="w-full bg-transparent text-sm text-white outline-none [&>option]:bg-ink-900"
          {...props}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
