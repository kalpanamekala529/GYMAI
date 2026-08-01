import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const FormInput = ({
  label,
  name,
  type = "text",
  icon: Icon,
  error,
  className = "",
  ...props
}) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-mist-300">
          {label}
        </label>
      )}
      <div
        className={`flex items-center gap-3 rounded-xl glass px-4 py-3 transition-colors duration-200 ${
          error ? "border-red-400/50" : "focus-within:border-violet-400/40"
        }`}
      >
        {Icon && <Icon className="text-mist-500 text-lg shrink-0" />}
        <input
          id={name}
          name={name}
          type={resolvedType}
          className="w-full bg-transparent text-sm text-white placeholder:text-mist-500 outline-none"
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className="text-mist-500 hover:text-mist-300 shrink-0"
            aria-label={show ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {show ? <HiOutlineEyeSlash className="text-lg" /> : <HiOutlineEye className="text-lg" />}
          </button>
        )}
      </div>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
};

export default FormInput;
