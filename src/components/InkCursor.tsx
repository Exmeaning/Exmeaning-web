import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

/**
 * 墨跡カーソル — Ink-trail cursor.
 *
 * Three layers, all drawn in the site's shu (朱) palette:
 *  1. A canvas sumi-e trail that flows behind the pointer and dries up when still.
 *  2. A precise ink dot that tracks the pointer 1:1.
 *  3. A spring-lagged brush ring that softens the motion and reacts to hovers.
 *
 * Only mounts on fine pointers (real mouse) and respects reduced-motion.
 */

type TrailPoint = { x: number; y: number; age: number };
type Rect = { x: number; y: number; w: number; h: number };

export default function InkCursor() {
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(true);
  // Bounding box of the interactive element under the pointer, in viewport
  // coords — drives the "magnetic frame" that hugs the hovered component.
  const [rect, setRect] = useState<Rect | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  // The interactive element currently under the pointer, so we can keep its
  // frame in sync while scrolling without pointer movement.
  const hoveredElRef = useRef<HTMLElement | null>(null);

  // Raw pointer position for the precise dot.
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring-lagged position for the trailing ring.
  const ringX = useSpring(dotX, { stiffness: 220, damping: 26, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 220, damping: 26, mass: 0.6 });

  // Decide whether to enable the custom cursor at all.
  // `any-pointer: fine` is true whenever a mouse/trackpad exists — even on
  // touchscreen laptops where the *primary* pointer reports as coarse.
  useEffect(() => {
    const hasMouse = window.matchMedia("(any-pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(hasMouse);
    setReduced(prefersReduced);
  }, []);

  // Pointer tracking + interactive-target detection.
  useEffect(() => {
    if (!enabled) return;

    // Anything worth giving feedback for: real controls, plus the site's
    // lift-on-hover cards and anything opted in via [data-cursor].
    const INTERACTIVE =
      'a, button, input, textarea, select, summary, label, [role="button"], [data-cursor], .card-lift';

    const syncRect = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      setRect({ x: r.left, y: r.top, w: r.width, h: r.height });
    };

    const move = (e: PointerEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (hidden) setHidden(false);

      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(INTERACTIVE) ?? null;
      hoveredElRef.current = el;
      if (el) {
        setHovering(true);
        syncRect(el);
      } else {
        setHovering(false);
        setRect(null);
      }
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);
    // Keep the frame glued to its element while scrolling.
    const onScroll = () => {
      const el = hoveredElRef.current;
      if (el) syncRect(el);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerenter", enter);

    document.documentElement.classList.add("ink-cursor-active");

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerenter", enter);
      document.documentElement.classList.remove("ink-cursor-active");
    };
  }, [enabled, hidden, dotX, dotY]);

  // Canvas sumi-e trail. Skipped when the user prefers reduced motion —
  // the dot and ring still render, just without the flowing ink.
  useEffect(() => {
    if (!enabled || reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth * devicePixelRatio);
    let h = (canvas.height = window.innerHeight * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const points: TrailPoint[] = [];
    let last: { x: number; y: number } | null = null;
    let rafId = 0;

    const onResize = () => {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const x = dotX.get();
      const y = dotY.get();

      // Skip until we have a real on-screen position to avoid a streak
      // from the off-screen origin on first paint.
      if (x <= 0 || y <= 0) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      if (!last) last = { x, y };

      const dx = x - last.x;
      const dy = y - last.y;
      const dist = Math.hypot(dx, dy);

      // Drop new ink only while the pointer is actually moving.
      if (dist > 1.2) {
        const steps = Math.min(Math.ceil(dist / 4), 8);
        for (let i = 0; i < steps; i++) {
          points.push({
            x: last.x + (dx * i) / steps,
            y: last.y + (dy * i) / steps,
            age: 0,
          });
        }
      }
      last = { x, y };

      // Age + render each ink dab as a soft, fading brush blot.
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.age += 1;
        const life = 1 - p.age / 38;
        if (life <= 0) {
          points.splice(i, 1);
          continue;
        }
        const r = 7 * life + 1.5;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, `rgba(155, 42, 70, ${0.32 * life})`);
        g.addColorStop(1, "rgba(155, 42, 70, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Cap memory.
      if (points.length > 240) points.splice(0, points.length - 240);

      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled, dotX, dotY]);

  if (!enabled) return null;

  // Corner brackets (四隅) + ink wash that hug the hovered element.
  const PAD = 8; // breathing room around the element
  const frame = rect
    ? { left: rect.x - PAD, top: rect.y - PAD, width: rect.w + PAD * 2, height: rect.h + PAD * 2 }
    : null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.3s" }}
      aria-hidden
    >
      {/* Sumi-e trail */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* Magnetic frame — appears around any interactive element */}
      <AnimatePresence>
        {frame && (
          <motion.div
            key="ink-frame"
            className="absolute top-0 left-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: frame.left,
              y: frame.top,
              width: frame.width,
              height: frame.height,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 32,
              opacity: { duration: 0.18 },
            }}
          >
            {/* Faint ink wash filling the element */}
            <span className="absolute inset-0 rounded-[3px] bg-shu/[0.05]" />

            {/* Four corner brackets, drawn like brush ticks */}
            {(
              [
                "top-0 left-0 border-t-2 border-l-2",
                "top-0 right-0 border-t-2 border-r-2",
                "bottom-0 left-0 border-b-2 border-l-2",
                "bottom-0 right-0 border-b-2 border-r-2",
              ] as const
            ).map((pos) => (
              <span
                key={pos}
                className={`absolute h-3 w-3 border-shu ${pos}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trailing brush ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1.5px solid var(--color-shu)",
        }}
        animate={{
          // Shrinks and fades when a frame takes over the feedback duty.
          width: hovering ? 16 : 30,
          height: hovering ? 16 : 30,
          opacity: hovering ? 0.35 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      />

      {/* Precise ink dot */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-shu"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: pressed ? 16 : hovering ? 10 : 8,
          height: pressed ? 16 : hovering ? 10 : 8,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  );
}
