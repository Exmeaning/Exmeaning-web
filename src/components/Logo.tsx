import { motion } from "framer-motion";

/**
 * 円相 (Ensō) logo mark — a single brush-stroke Zen circle that draws itself
 * on mount, with a character resting in its center. Replaces the old solid
 * red stamp with something that feels hand-painted and alive.
 */
export default function Logo({
  char = "雪",
  size = 40,
  className = "",
}: {
  char?: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Soft ink halo — blooms on hover when placed inside a `.group` */}
      <span className="absolute inset-[-6px] rounded-full bg-shu/0 blur-md transition-colors duration-500 group-hover:bg-shu/15" />

      {/* The brush circle */}
      <svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        className="absolute inset-0 overflow-visible transition-transform duration-700 ease-out group-hover:rotate-[22deg]"
      >
        {/* Faint under-stroke for ink depth */}
        <path
          d="M30 7.6 A 18 18 0 1 1 20.2 8.4"
          stroke="var(--color-shu-deep)"
          strokeWidth={4.5}
          strokeLinecap="round"
          opacity={0.18}
        />
        {/* Main brush stroke, drawn on enter view */}
        <motion.path
          d="M30 7.6 A 18 18 0 1 1 20.2 8.4"
          stroke="var(--color-shu)"
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.22, 0.61, 0.36, 1], delay: 0.4 }}
        />
      </svg>

      {/* Character in the center */}
      <motion.span
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="relative font-brush leading-none text-ink select-none transition-colors duration-500 group-hover:text-shu"
        style={{ fontSize: size * 0.44 }}
      >
        {char}
      </motion.span>
    </span>
  );
}
