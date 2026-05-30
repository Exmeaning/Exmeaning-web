import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-12 gap-8 items-center relative z-20">
        {/* Left: vertical brush script */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:col-span-2 hidden md:flex justify-center"
        >
          <div className="writing-vertical flex flex-col items-center gap-6">
            <h1 className="font-brush text-7xl text-ink leading-none tracking-widest">
              東雪蓮華
            </h1>
            <div className="w-[1px] h-20 bg-ink-faint/40" />
            <span className="font-serif-en text-[11px] tracking-[0.4em] text-ink-faint">
              AZUMA YUKI · MMXXVI
            </span>
          </div>
        </motion.div>

        {/* Center: main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:col-span-7 space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="stamp w-10 h-10 text-xl">東</div>
            <div className="flex flex-col">
              <span className="font-serif-en text-xs tracking-[0.3em] text-shu uppercase">
                Full-stack Developer · Sekai Builder
              </span>
              <span className="font-serif-cn text-sm text-ink-faint">独立开发者 · 社区工具作者</span>
            </div>
          </div>

          <div>
            <h2 className="font-brush text-6xl md:text-8xl text-ink leading-none mb-4">
              浅忆清梦
            </h2>
            <div className="flex items-baseline gap-6 flex-wrap">
              <h3 className="font-serif-en text-3xl md:text-4xl font-light italic text-ink-soft">
                Azuma Yuki
              </h3>
              <span className="font-mono text-xs text-ink-faint">// a.k.a. 東雪</span>
            </div>
          </div>

          <p className="font-serif-cn text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
            在代码与二次元之间穿行，用
            <span className="text-shu font-medium">效率主义</span>
            编织自己的 Sekai。
            <br />
            <span className="text-ink-faint">
              一名来自四川大学的机械工程系学生，却在深夜里为 PJSK 的旋律写下千万行代码。
            </span>
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {[
              { text: "Go 后端", color: "#00ADD8" },
              { text: "Next.js", color: "#1a1a2e" },
              { text: "Vue 3", color: "#42b883" },
              { text: "React + Satori", color: "#61DAFB" },
              { text: "ZeroBot", color: "#c8385a" },
              { text: "Docker", color: "#2496ED" },
            ].map((t) => (
              <span
                key={t.text}
                className="px-3 py-1.5 font-mono text-xs tracking-wider"
                style={{
                  background: "rgba(245, 241, 232, 0.6)",
                  border: `1px solid ${t.color}40`,
                  color: t.color,
                }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-2"
                  style={{ background: t.color }}
                />
                {t.text}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <a
              href="#works"
              className="group inline-flex items-center gap-3 bg-ink text-washi px-6 py-3 font-serif-cn text-sm tracking-wider hover:bg-shu transition-colors"
            >
              <span>查看作品</span>
              <span className="font-serif-en text-xs opacity-60">VIEW WORKS</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-ink/30 text-ink px-6 py-3 font-serif-cn text-sm tracking-wider hover:border-shu hover:text-shu transition-colors"
            >
              <span>联系</span>
              <span className="font-serif-en text-xs opacity-60">CONTACT</span>
            </a>
          </div>
        </motion.div>

        {/* Right: info panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="md:col-span-3 space-y-6"
        >
          {/* Time panel */}
          <div className="border border-ink/15 bg-washi/60 backdrop-blur p-5 space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-serif-en text-[10px] tracking-[0.3em] text-ink-faint uppercase">
                Current Time
              </span>
              <span className="stamp w-6 h-6 text-[10px]">時</span>
            </div>
            <div className="font-mono text-3xl text-ink tabular-nums">{time}</div>
            <div className="font-serif-cn text-xs text-ink-faint">CST · 中国标准时间</div>
          </div>

          {/* Location */}
          <div className="border border-ink/15 bg-washi/60 backdrop-blur p-5 space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-serif-en text-[10px] tracking-[0.3em] text-ink-faint uppercase">
                Location
              </span>
              <span className="stamp w-6 h-6 text-[10px]">地</span>
            </div>
            <div className="font-brush text-2xl text-ink">成都</div>
            <div className="font-serif-en text-xs text-ink-faint">Chengdu · Sichuan</div>
            <div className="pt-2 border-t border-ink/10 font-serif-cn text-xs text-ink-muted leading-relaxed">
              四川大学 · 机械工程系
              <br />
              <span className="font-serif-en italic">SCU · Mechanical Eng.</span>
            </div>
          </div>

          {/* Status */}
          <div className="border border-shu/30 bg-shu/5 p-5 space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-serif-en text-[10px] tracking-[0.3em] text-shu uppercase">
                Status
              </span>
              <span className="w-2 h-2 rounded-full bg-shu animate-pulse" />
            </div>
            <div className="font-serif-cn text-sm text-ink-soft leading-relaxed">
              正在维护 <span className="text-shu">Moesekai</span> 与 <span className="text-shu">Moebot NEXT</span>
            </div>
            <div className="font-mono text-[10px] text-ink-faint">core service &lt; 50MB RSS</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint z-20"
      >
        <span className="font-serif-en text-[10px] tracking-[0.4em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-8 bg-ink-faint"
        />
      </motion.div>
    </section>
  );
}
