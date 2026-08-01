import { Link } from "react-router-dom";

/**
 * Unified button. Renders a <Link> when `to` is given, otherwise a
 * native <button>. `variant` maps to the .btn-primary / .btn-secondary
 * utility classes defined in index.css.
 */
const Button = ({
  children,
  to,
  variant = "primary",
  className = "",
  icon: Icon,
  ...props
}) => {
  const classes = `${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
        {Icon && <Icon className="text-base" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {Icon && <Icon className="text-base" />}
    </button>
  );
};

export default Button;
