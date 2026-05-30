import { motion } from "framer-motion";
import { SectionHeader } from "./About";

type Tech = {
  name: string;
  sub?: string;
  color: string;
  category: string;
};

const stack: Record<string, Tech[]> = {
  "后端 Backend": [
    { name: "Go", sub: "Golang", color: "#00ADD8", category: "最爱 · 极低 RSS" },
    { name: "Python", sub: "自动化", color: "#3776AB", category: "ClickZen / ClickYen" },
    { name: "Rust", sub: "API", color: "#CE422B", category: "Moe-Sekai-API" },
    { name: "Redis", sub: "缓存", color: "#DC382D", category: "Go 后端标配" },
  ],
  "前端 Frontend": [
    { name: "Next.js", sub: "App Router", color: "#1a1a2e", category: "Moesekai 主站" },
    { name: "Vue 3", sub: "Composition API", color: "#42b883", category: "老项目仍在服役" },
    { name: "React", sub: "Satori", color: "#61DAFB", category: "图像渲染核心" },
    { name: "Tailwind", sub: "CSS", color: "#38BDF8", category: "UI 速写工具" },
  ],
  "机器人 Bot": [
    { name: "ZeroBot", sub: "框架", color: "#c8385a", category: "Moebot NEXT 底层" },
    { name: "Lagrange", sub: "LLOneBot", color: "#8b8680", category: "NTQQ 协议端" },
    { name: "NapCat", sub: "协议", color: "#5a5a70", category: "备选方案" },
    { name: "Resvg", sub: "渲染", color: "#FFB800", category: "SVG → PNG" },
  ],
  "基础设施 Infra": [
    { name: "Docker", sub: "容器化", color: "#2496ED", category: "全部服务容器化" },
    { name: "Zeabur", sub: "托管", color: "#6300FF", category: "入坑首选面板" },
    { name: "Cloudflare", sub: "EdgeOne", color: "#F38020", category: "边缘加速 ESA" },
    { name: "GitHub", sub: "仓库", color: "#1a1a2e", category: "moe-sekai 组织" },
  ],
};

export default function Stack() {
  return (
    <section id="stack" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-20">
        <SectionHeader number="参" jp="技術棧" en="Tech Stack" />
        <p className="mt-4 font-serif-cn text-base text-ink-muted max-w-2xl leading-relaxed">
          作为一个务实的开发者，我热衷于探索
          <span className="text-shu"> Vibe Coding（AI 辅助开发）</span>
          的高效形态，注重提示词工程与逻辑架构，追求敏捷开发与极低资源占用。
        </p>

        <div className="mt-16 space-y-12">
          {Object.entries(stack).map(([category, techs], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <div className="font-brush text-2xl text-shu">{category.split(" ")[0]}</div>
                <span className="font-serif-en text-xs tracking-[0.3em] text-ink-faint uppercase">
                  {category.split(" ")[1]}
                </span>
                <div className="flex-1 h-[1px] bg-ink/10" />
                <span className="font-mono text-xs text-ink-faint">
                  {String(catIdx + 1).padStart(2, "0")} / {String(Object.keys(stack).length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techs.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative border border-ink/10 bg-washi/60 p-5 hover:border-shu/30 hover:shadow-lg transition-all cursor-default card-lift"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="w-3 h-3 rounded-sm transition-transform group-hover:rotate-45"
                        style={{ background: t.color }}
                      />
                      <span className="font-mono text-[10px] text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="font-mono text-lg text-ink font-medium">{t.name}</div>
                    {t.sub && (
                      <div className="font-serif-en text-[10px] tracking-wider text-ink-faint uppercase mt-0.5">
                        {t.sub}
                      </div>
                    )}
                    <div className="mt-3 pt-3 border-t border-ink/10 font-serif-cn text-[11px] text-ink-muted leading-snug">
                      {t.category}
                    </div>

                    {/* Hover accent */}
                    <div
                      className="absolute top-0 left-0 h-full w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: t.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Signature stat line */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-ink/10">
          {[
            { num: "<50MB", label: "核心服务 RSS", sub: "Core Service Memory" },
            { num: "90%+", label: "sekai.best 功能覆盖", sub: "Feature Coverage" },
            { num: "12+", label: "moe-sekai 仓库", sub: "Organization Repos" },
            { num: "5+", label: "主力项目", sub: "Major Projects" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="font-serif-en text-4xl md:text-5xl text-ink font-light">{s.num}</div>
              <div className="font-serif-cn text-sm text-ink-soft mt-2">{s.label}</div>
              <div className="font-serif-en text-[10px] tracking-wider text-ink-faint uppercase">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
