import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconTriangle, IconSparkle } from "./Icons";

const STACKS = [
  {
    cat: "BACKEND",
    jp: "后端开发",
    color: "bg-pjsk-pink text-white",
    items: [
      { n: "Go", d: "Favorite. 编译速度 · 低内存 · Docker 原生" },
      { n: "Zerobot", d: "OneBot 11 / 12 机器人框架" },
      { n: "llonebot / NapCat", d: "QQ 协议端" },
    ],
  },
  {
    cat: "FRONTEND",
    jp: "前端工程",
    color: "bg-pjsk-yellow",
    items: [
      { n: "Next.js", d: "SSR + 现代化 Web 架构" },
      { n: "Vue 3", d: "响应式 WebUI · 控制面板" },
      { n: "React", d: "配合 satori + resvg 做渲染" },
    ],
  },
  {
    cat: "RENDER",
    jp: "图片渲染",
    color: "bg-pjsk-cyan",
    items: [
      { n: "satori", d: "JSX → SVG 的声明式渲染" },
      { n: "resvg", d: "高性能 SVG → PNG" },
      { n: "Bot Image", d: "动态卡片 / 数据图" },
    ],
  },
  {
    cat: "INFRA",
    jp: "基础架构",
    color: "bg-pjsk-purple text-white",
    items: [
      { n: "Zeabur", d: "入坑面板 · 全托管 · 敏捷省心" },
      { n: "Docker", d: "容器化部署 · 一键起服务" },
      { n: "Cloudflare EdgeOne", d: "ESA 边缘加速 · 国内体验佳" },
    ],
  },
];

const TOOLS = ["Go", "TypeScript", "Vue", "React", "Next.js", "Rust", "Python", "C++", "Docker", "Git", "PostgreSQL", "Redis"];

export function Tech() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tech" ref={ref} className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden">
      {/* 装饰网格 */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* 大背景字 */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[20vw] text-cream/[0.04] whitespace-nowrap pointer-events-none select-none">
        TECH · STACK · テクノロジー
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-4 mb-4"
        >
          <span className="font-display text-pjsk-pink text-6xl md:text-8xl">02</span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight">
            TECH <span className="text-stroke">STACK</span>
          </h2>
          <span className="font-jp text-cream/60 hidden md:inline">— 技術構成</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-lg font-jp text-cream/80 mb-12"
        >
          作为一个务实的开发者，我热衷于探索
          <span className="bg-pjsk-pink text-white px-2 mx-1">Vibe Coding</span>
          的高效形态——注重提示词工程与逻辑架构，追求敏捷开发与极低资源占用。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACKS.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="bg-cream text-ink border-3 border-cream p-6 md:p-8 relative group hover:-translate-y-2 transition-transform"
              style={{ boxShadow: `10px 10px 0 0 ${["#FF3D7F", "#FFE500", "#00D9C0", "#9D4EDD"][i]}` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-block ${s.color} border-2 border-ink px-3 py-1 font-display tracking-widest text-sm`}>
                    {s.cat}
                  </div>
                  <div className="font-jp text-ink/60 mt-2 text-sm">{s.jp}</div>
                </div>
                <div className="font-display text-7xl text-ink/10 leading-none group-hover:text-pjsk-pink/30 transition-colors">
                  0{i + 1}
                </div>
              </div>

              <div className="space-y-3">
                {s.items.map((it) => (
                  <div key={it.n} className="flex items-start gap-3 pb-3 border-b border-dashed border-ink/20 last:border-0">
                    <span className="text-pjsk-pink mt-1.5"><IconTriangle /></span>
                    <div>
                      <div className="font-mono font-bold text-lg">{it.n}</div>
                      <div className="font-jp text-sm text-ink/60">{it.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 工具滚动条 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 overflow-hidden border-y-4 border-pjsk-pink py-4 relative"
        >
          <div className="flex whitespace-nowrap marquee-track gap-8 font-display text-3xl md:text-4xl tracking-widest">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-8">
                {TOOLS.concat(TOOLS).map((t, i) => (
                  <span key={i} className="flex items-center gap-8">
                    <span className={i % 3 === 0 ? "text-pjsk-yellow" : i % 3 === 1 ? "text-pjsk-cyan" : "text-cream"}>
                      {t}
                    </span>
                    <span className="text-pjsk-pink"><IconSparkle /></span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
