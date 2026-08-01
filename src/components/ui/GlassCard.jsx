import { motion } from "framer-motion";

/**
 * Glassmorphism surface used across the app for cards, panels, and stats.
 * Pass `as={motion.div}` behaviour is built in — just forward motion props.
 */
const GlassCard = ({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  ...motionProps
}) => {
  return (
    <motion.div
      className={`glass ${hover ? "glass-hover" : ""} rounded-3xl shadow-card ${padding} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
