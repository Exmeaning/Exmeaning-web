import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "一个在代码与二次元之间游走的灵魂。",
  "白天是一名普通的学生，",
  "夜晚为 Project SEKAI 的旋律写 Bot、",
  "渲染图像、爬取数据、部署服务。",
  "我相信极低的资源占用是一种美学，",
  "相信低的内存可以承载整个 Sekai。",
];

export default function About() {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById("about");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || done) return;
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }
    const line = lines[currentLine];
    if (currentChar >= line.length) {
      setDisplayed((prev) => [...prev, line]);
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
      return;
    }
    const t = setTimeout(() => setCurrentChar((c) => c + 1), 60);
    return () => clearTimeout(t);
  }, [currentChar, currentLine, visible, done]);

  return (
    <section id="about" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-20">
        <SectionHeader number="壱" jp="私について" en="About Me" />

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-ink/20" />
              <div className="absolute -inset-6 border border-shu/30 -rotate-1" />

              <div className="relative aspect-square overflow-hidden bg-washi-dark">
                <img
                  src="https://github.com/Exmeaning.png"
                  alt="東雪 avatar"
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.05) saturate(0.9)" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://github.com/moe-sekai.png";
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, rgba(200,56,90,0.15))",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>

              {/* Stamp */}
              <div className="absolute -bottom-4 -right-4 stamp w-16 h-16 text-2xl">夢</div>

              {/* Caption */}
              <div className="mt-6 space-y-1">
                <div className="font-brush text-xl text-ink">東雪 / Azuma Yuki</div>
                <div className="font-serif-en text-[11px] tracking-[0.25em] text-ink-faint uppercase">
                  The dreamer who codes
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8 space-y-8"
          >
            <div className="font-serif-cn text-lg md:text-xl text-ink-soft leading-loose min-h-[18rem]">
              {displayed.map((line, i) => (
                <p key={i} className="mb-3">
                  {line}
                </p>
              ))}
              {!done && currentLine < lines.length && (
                <p className="cursor-blink">
                  {lines[currentLine].slice(0, currentChar)}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="space-y-3 pt-6 border-t border-ink/10">
              <div className="font-serif-en text-[10px] tracking-[0.3em] text-ink-faint uppercase">
                Identity Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "独立全栈开发者",
                  "PJSK 社区工具作者",
                  "Vibe Coding 践行者",
                  "效率主义折腾党",
                  "Go 语言爱好者",
                ].map((t, i) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-xs font-serif-cn border border-ink/20 bg-washi/60 text-ink-soft hover:border-shu hover:text-shu transition-colors"
                    style={{ transform: `rotate(${(i % 2 === 0 ? -0.5 : 0.5)}deg)` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                { icon: "♪", label: "Project SEKAI", sub: "本命音游" },
                { icon: "★", label: "学マス", sub: "学園アイドルマスター" },
                { icon: "✦", label: "BanG Dream!", sub: "邦邦" },
                { icon: "❀", label: "東雪蓮", sub: "旧头像仍在" },
              ].map((x) => (
                <div
                  key={x.label}
                  className="border border-ink/10 bg-washi/40 p-4 text-center hover:border-shu/40 transition-colors"
                >
                  <div className="text-2xl text-shu mb-1">{x.icon}</div>
                  <div className="font-serif-en text-sm text-ink">{x.label}</div>
                  <div className="font-serif-cn text-[10px] text-ink-faint mt-1">{x.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ number, jp, en }: { number: string; jp: string; en: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-end gap-6 flex-wrap"
    >
      <div className="font-brush text-5xl md:text-6xl text-shu/20">{number}</div>
      <div className="flex flex-col gap-1">
        <h2 className="font-brush text-4xl md:text-5xl text-ink brush-underline inline-block">
          {jp}
        </h2>
        <span className="font-serif-en text-xs tracking-[0.3em] text-ink-faint uppercase">
          {en}
        </span>
      </div>
    </motion.div>
  );
}
