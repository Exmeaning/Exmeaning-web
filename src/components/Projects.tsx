import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconHeart, IconStar, IconCircle, IconArrowRight } from "./Icons";

const PROJECTS: {
  title: string; sub: string; jp: string; desc: string;
  tech: string[]; url: string | null; github: string | null;
  color: string; accent: string; tags: ReactNode[]; stars: ReactNode;
}[] = [
  {
    title: "Moesekai",
    sub: "PJSK 新一代 WIKI",
    jp: "もう一つのセカイ",
    desc: "高度自研 UI 的剧情与数据查看站。覆盖 90%+ sekai.best 核心体验，整合榜线预测、剧情站，带来更符合直觉的交互与一堆独家特色功能。",
    tech: ["Next.js", "TypeScript", "Vue", "Zeabur", "EdgeOne"],
    url: "https://pjsk.moe",
    github: "https://github.com/moe-sekai/Moesekai",
    color: "bg-pjsk-pink",
    accent: "#FF3D7F",
    tags: [<><IconStar /> FLAGSHIP</>, "LIVE"],
    stars: "26",
  },
  {
    title: "Moebot NEXT",
    sub: "社区 QQ Bot",
    jp: "みんなのボット",
    desc: "极具个人特色界面的 QQ / 社区 Bot。全新渲染方案 React + satori + resvg，提供完整的控制面板 WebUI、autochat 等特色功能。",
    tech: ["Go", "Zerobot", "React", "satori", "resvg"],
    url: null,
    github: "https://github.com/moe-sekai/Moebot-NEXT",
    color: "bg-pjsk-cyan",
    accent: "#00D9C0",
    tags: ["BOT", "IN DEV"],
    stars: "2",
  },
  {
    title: "ClickZen",
    sub: "Android 自动化工具",
    jp: "タッチ・ゼン",
    desc: "基于 Python + ADB + Scrcpy 的 Android 自动化控制工具。支持投屏、录制回放、图像识别自动化、后台挂机、防检测。烂尾了，但我觉得做的真不错。",
    tech: ["Python", "PyQt6", "ADB", "OpenCV", "Scrcpy"],
    url: null,
    github: "https://github.com/Exmeaning/ClickZen",
    color: "bg-pjsk-yellow",
    accent: "#FFE500",
    tags: ["ARCHIVED", <IconHeart />],
    stars: "v1.6.3",
  },
  {
    title: "ClickYen",
    sub: "Windows 自动化工具",
    jp: "クリック・円",
    desc: "ClickZen 的 Windows 版本。基于 Interception 驱动实现硬件级键鼠模拟，支持录制回放、图像识别自动化、后台窗口操作。同样烂尾但同样喜欢。",
    tech: ["Python", "PyQt6", "Interception", "OpenCV"],
    url: null,
    github: "https://github.com/Exmeaning/ClickYen",
    color: "bg-pjsk-coral",
    accent: "#FF6B6B",
    tags: ["ARCHIVED", <IconHeart />],
    stars: "v1.0.0",
  },
  {
    title: "moe-sekai org",
    sub: "微型开源组织",
    jp: "もえせかい",
    desc: "我建立的 PJSK 相关微型开源组织。维护 Moesekai、Moebot、lunabot、sekai-deck-recommend 等项目。「moe moe jump!」",
    tech: ["Go", "Python", "Rust", "C++", "TypeScript"],
    url: "https://pjsk.moe",
    github: "https://github.com/moe-sekai",
    color: "bg-pjsk-purple",
    accent: "#9D4EDD",
    tags: ["ORG", "12 REPOS"],
    stars: <span className="inline-flex items-center gap-0.5">5<IconStar /></span>,
  },
  {
    title: "exmeaning.com",
    sub: "这个网站",
    jp: "いま見てるやつ",
    desc: "你正在看的这个个人主页。用 React + Vite + Tailwind + Framer Motion 构建，试图把杂志排版和 PJSK 活力感揉在一起。",
    tech: ["React", "Vite", "Tailwind", "Framer Motion"],
    url: "#",
    github: null,
    color: "bg-pjsk-lime",
    accent: "#B8F04A",
    tags: ["META", "YOU ARE HERE"],
    stars: <IconStar />,
  },
];

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32 bg-cream noise-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-4 mb-4"
        >
          <span className="font-display text-pjsk-pink text-6xl md:text-8xl">03</span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight">
            PRO<span className="text-pjsk-pink">J</span>ECTS
          </h2>
          <span className="font-jp text-ink-soft hidden md:inline">— 作品集</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-lg font-jp text-ink-soft mb-12"
        >
          围绕 <span className="text-pjsk-pink font-bold">Project SEKAI</span> 独立搭建了一整套 Web 与 Bot 服务生态，
          也留下了一些自动化小工具——虽然烂尾，但我很喜欢它们。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url || p.github || "#"}
              target={p.url && p.url !== "#" ? "_blank" : p.github ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              className="group block relative"
            >
              <div
                className="bg-white border-3 border-ink p-6 md:p-8 relative transition-transform group-hover:-translate-y-2 group-hover:translate-x-1"
                style={{ boxShadow: `10px 10px 0 0 ${p.accent}` }}
              >
                {/* 顶部标签 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t, ti) => (
                      <span
                        key={ti}
                        className={`${p.color} text-white border-2 border-ink px-2 py-0.5 font-mono text-[10px] tracking-widest`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="font-mono text-xs text-ink/50">
                    {p.stars}
                  </div>
                </div>

                {/* 色条 */}
                <div className={`${p.color} h-1 mb-4 w-full`} />

                {/* 标题 */}
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-display text-4xl md:text-5xl tracking-tight group-hover:text-pjsk-pink transition-colors">
                    {p.title}
                  </h3>
                </div>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-jp text-lg text-ink/70">{p.sub}</span>
                  <span className="font-jp text-sm text-ink/40">· {p.jp}</span>
                </div>

                <p className="font-jp text-ink/70 leading-relaxed mb-5 min-h-[80px]">
                  {p.desc}
                </p>

                {/* 技术栈 */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-cream ink-border px-2 py-0.5 font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 底部链接 */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-ink/20">
                  <div className="flex gap-4">
                    {p.url && p.url !== "#" && (
                      <span className="font-mono text-sm flex items-center gap-1.5 group-hover:text-pjsk-pink">
                        <IconCircle /> {p.url.replace(/^https?:\/\//, "")}
                      </span>
                    )}
                  </div>
                  <span className="font-display text-2xl tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    {p.github ? <>GITHUB <IconArrowRight /></> : <>VISIT <IconArrowRight /></>}
                  </span>
                </div>

                {/* 角落装饰 */}
                <div
                  className="absolute -top-2 -left-2 w-6 h-6 rotate-45"
                  style={{ background: p.accent, border: "2px solid #1A1A2E" }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
