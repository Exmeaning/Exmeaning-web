import { motion } from "framer-motion";
import { SectionHeader } from "./About";

type Project = {
  id: string;
  title: string;
  jp: string;
  sub: string;
  desc: string;
  tags: string[];
  stack: string[];
  accent: string;
  featured?: boolean;
  links: { label: string; href: string }[];
  stats?: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    id: "moesekai",
    title: "Moesekai",
    jp: "雪の世界",
    sub: "PJSK 全功能查看站",
    desc: "高度自研 UI 的 Project SEKAI 剧情与数据查看站，功能覆盖 90% 以上的 sekai.best 核心体验，带来更符合直觉的交互，并附带大量特色功能。合并了之前的榜线预测站与剧情站。",
    tags: ["核心项目", "自研 UI", "AGPL-3.0"],
    stack: ["Next.js", "Go", "Redis", "Docker"],
    accent: "#c8385a",
    featured: true,
    links: [
      { label: "访问 pjsk.moe", href: "https://pjsk.moe" },
      { label: "GitHub", href: "https://github.com/moe-sekai/Moesekai" },
    ],
    stats: [
      { label: "Stars", value: "26" },
      { label: "功能覆盖", value: "90%+" },
      { label: "协议", value: "AGPL-3.0" },
    ],
  },
  {
    id: "moebot",
    title: "Moebot NEXT",
    jp: "次世代 Bot",
    sub: "PJSK 社区 QQ / Web Bot",
    desc: "极具个人特色界面的社区 Bot，采用全新的 React + Satori + Resvg 渲染方案，提供完整的控制面板 WebUI 与 autochat 等特色功能。基于 ZeroBot 框架。",
    tags: ["社区工具", "Bot"],
    stack: ["Go", "ZeroBot", "React", "Satori", "Resvg"],
    accent: "#4a6741",
    links: [
      { label: "GitHub", href: "https://github.com/moe-sekai/Moebot-NEXT" },
    ],
    stats: [
      { label: "Stars", value: "2" },
      { label: "渲染方案", value: "Satori" },
      { label: "Sub", value: "bun+golang" },
    ],
  },
  {
    id: "clickzen",
    title: "ClickZen",
    jp: "禅の自動化",
    sub: "Android 自动化控制工具",
    desc: "基于 Python + PyQt6 的 Android 设备自动化控制工具，通过 ADB 和 Scrcpy 实现设备投屏、操作录制回放、图像识别自动化。特别适用于自动化测试、游戏挂机、批量操作。",
    tags: ["自动化", "虽烂尾但精彩"],
    stack: ["Python", "PyQt6", "ADB", "Scrcpy", "OpenCV"],
    accent: "#d4a84b",
    links: [
      { label: "GitHub", href: "https://github.com/Exmeaning/ClickZen" },
    ],
    stats: [
      { label: "版本", value: "v1.6.3" },
      { label: "平台", value: "Android" },
      { label: "驱动", value: "ADB" },
    ],
  },
  {
    id: "clickyen",
    title: "ClickYen",
    jp: "縁の自動化",
    sub: "Windows 桌面自动化工具",
    desc: "ClickZen 的 Windows 演化版，基于 Interception 驱动实现硬件级键鼠模拟，支持操作录制回放、图像识别自动化监控、后台窗口操作，完全后台运行不占用鼠标。",
    tags: ["自动化", "虽烂尾但精彩"],
    stack: ["Python", "PyQt6", "Interception", "OpenCV"],
    accent: "#2d6a7a",
    links: [
      { label: "GitHub", href: "https://github.com/Exmeaning/ClickYen" },
    ],
    stats: [
      { label: "注入方式", value: "双模式" },
      { label: "平台", value: "Windows" },
      { label: "驱动", value: "Interception" },
    ],
  },
];

export default function Works() {
  return (
    <section id="works" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-20">
        <SectionHeader number="肆" jp="作品" en="Projects & Works" />

        {/* PJSK Ecosystem intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 mb-16 p-8 border border-shu/30 bg-gradient-to-br from-shu/5 to-washi"
        >
          <div className="flex items-start gap-6 flex-wrap">
            <div className="font-brush text-5xl text-shu">♪</div>
            <div className="flex-1 min-w-[200px]">
              <div className="font-serif-en text-[10px] tracking-[0.3em] text-shu uppercase mb-2">
                Featured Ecosystem
              </div>
              <h3 className="font-brush text-3xl text-ink mb-3">Project SEKAI 同人工具生态</h3>
              <p className="font-serif-cn text-sm text-ink-muted leading-relaxed">
                作为社区的核心开发者之一，围绕 PJSK 独立搭建并运营了一套完整的 Web 与 Bot 服务生态。
                组织 <span className="text-shu">moe-sekai</span> 已验证 pjsk.moe 域名，持续维护 12+ 个仓库，
                涵盖剧情翻译、数据 API、组卡算法、资产更新等多个方向。
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>

        {/* Small org banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 border border-ink/15 bg-washi/50 backdrop-blur text-center"
        >
          <div className="font-brush text-2xl text-ink mb-2">moe-sekai</div>
          <div className="font-serif-en text-xs tracking-[0.3em] text-ink-faint uppercase mb-4">
            微型开源组织 · A tiny org with big dreams
          </div>
          <p className="font-serif-cn text-sm text-ink-muted max-w-2xl mx-auto leading-relaxed mb-6">
            我建立的微型组织，汇聚了 PJSK 相关的一众工具与仓库：
            Moesekai、Moebot NEXT、NEXTonebotfilter、Moe-Sekai-API、Moe-Asset-Updater、sekai-deck-recommend-cpp 等。
          </p>
          <a
            href="https://github.com/moe-sekai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-ink text-washi px-6 py-3 font-serif-cn text-sm hover:bg-shu transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2.2c-3.34.73-4.04-1.4-4.04-1.4-.55-1.4-1.33-1.76-1.33-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.37.8 1.1.8 2.22v3.3c0 .32.22.7.82.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            探索 moe-sekai 组织
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className={`relative grid md:grid-cols-12 gap-8 items-start ${
        p.featured ? "md:gap-12" : ""
      }`}
    >
      {/* Number marker */}
      <div className={`md:col-span-1 ${isLeft ? "" : "md:order-3"}`}>
        <div className="font-brush text-6xl md:text-7xl text-ink/10 leading-none">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className={`md:col-span-7 ${isLeft ? "" : "md:order-2"}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-serif-en text-[10px] tracking-[0.3em] uppercase" style={{ color: p.accent }}>
            {p.sub}
          </span>
          <div className="h-[1px] flex-1 max-w-[80px]" style={{ background: p.accent }} />
        </div>

        <div className="flex items-baseline gap-4 mb-4 flex-wrap">
          <h3 className="font-serif-en text-4xl md:text-5xl text-ink font-light">{p.title}</h3>
          <span className="font-brush text-2xl" style={{ color: p.accent }}>
            {p.jp}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[10px] font-mono tracking-wider"
              style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}40` }}
            >
              {t}
            </span>
          ))}
        </div>

        <p className="font-serif-cn text-base text-ink-muted leading-relaxed mb-5">{p.desc}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 font-mono text-[11px] bg-washi-dark/60 text-ink-soft border border-ink/10"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-serif-cn hover:text-shu transition-colors group"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
              {l.label}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Stats panel */}
      {p.stats && (
        <div className={`md:col-span-4 ${isLeft ? "" : "md:order-1"}`}>
          <div
            className="border bg-washi/60 backdrop-blur p-6"
            style={{ borderColor: `${p.accent}40` }}
          >
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-ink/10">
              <span className="font-serif-en text-[10px] tracking-[0.3em] text-ink-faint uppercase">
                Stats
              </span>
              <div
                className="w-6 h-6 flex items-center justify-center font-brush text-sm text-washi"
                style={{ background: p.accent }}
              >
                統
              </div>
            </div>
            <div className="space-y-4">
              {p.stats.map((s) => (
                <div key={s.label} className="flex justify-between items-baseline">
                  <span className="font-serif-cn text-xs text-ink-faint">{s.label}</span>
                  <span className="font-serif-en text-xl text-ink font-light tabular-nums">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.article>
  );
}
