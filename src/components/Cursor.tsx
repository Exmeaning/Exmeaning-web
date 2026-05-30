import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a, button"));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // 移动端隐藏
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[100] mix-blend-difference"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 1.6 : 1})`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>
      <div
        className="fixed pointer-events-none z-[99] border-2 border-pjsk-pink"
        style={{
          left: pos.x,
          top: pos.y,
          width: hover ? 48 : 32,
          height: hover ? 48 : 32,
          transform: `translate(-50%, -50%)`,
          transition: "width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}
