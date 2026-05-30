import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = "w-[1em] h-[1em] inline-block align-[-0.125em]";

/** ♪ 八分音符 */
export function IconNote({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6ZM10 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
}

/** ★ 五角星 */
export function IconStar({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

/** ✦ 四角星 */
export function IconSparkle({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5L12 0Z" />
    </svg>
  );
}

/** ✺ 多角星 */
export function IconSparkle6({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M12 0l1.8 7.2L20.4 3l-4.2 6.6L24 12l-7.8 2.4L20.4 21l-6.6-4.2L12 24l-1.8-7.2L3.6 21l4.2-6.6L0 12l7.8-2.4L3.6 3l6.6 4.2L12 0Z" />
    </svg>
  );
}

/** ✸ 粗六角星 */
export function IconSparkle8({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M12 0l3 8 7-4-4 7 8 1-8 1 4 7-7-4-3 8-3-8-7 4 4-7-8-1 8-1-4-7 7 4 3-8Z" />
    </svg>
  );
}

/** ♥ 实心爱心 */
export function IconHeart({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
    </svg>
  );
}

/** ♡ 空心爱心 */
export function IconHeartLine({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

/** → 右箭头 */
export function IconArrowRight({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/** ↗ 右上箭头 */
export function IconArrowUpRight({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

/** ▸ 右三角 */
export function IconTriangle({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

/** ◉ 圆点 */
export function IconCircle({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className ?? ""}`} {...p}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

/** × 关闭 */
export function IconClose({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

/** ≡ 菜单 */
export function IconMenu({ className, ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`${base} ${className ?? ""}`} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
