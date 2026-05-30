import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const principles = [
  {
    kanji: "速",
    en: "Speed",
    title: "编译速度即正义",
    desc: "钟情 Go 的编译速度与超低内存占用。核心服务常年压在 10MB 以内 —— 这是我对资源最本能的敬意。",
    accent: "#c8385a",
  },
  {
    kanji: "簡",
    en: "Simplicity",
    title: "敏捷，而非完美",
    desc: "Vibe Coding 的践行者：注重提示词工程与逻辑架构，让 AI 成为协作者。追求敏捷开发与极低资源占用。",
    accent: "#d4a84b",
  },
  {
    kanji: "美",
    en: "Aesthetic",
    title: "纯自研的交互美学",
    desc: "追求丝滑的响应式设计与纯自研 UI 交互。从 Next.js 到 Vue3，从 Satori 图像渲染到 Resvg，每一像素都要有灵魂。",
    accent: "#4a6741",
  },
  {
    kanji: "縁",
    en: "Community",
    title: "为社区而生",
    desc: "Moesekai 覆盖 90% 以上 sekai.best 的核心体验；Moebot NEXT 用 React + Satori + Resvg 带来全新渲染方案。",
    accent: "#2d6a7a",
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-20">
        <SectionHeader number="弐" jp="開発理念" en="Philosophy" />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.kanji}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative border border-ink/15 bg-washi/50 backdrop-blur p-8 hover:border-shu/40 transition-all overflow-hidden card-lift"
            >
              {/* Decorative corner marks */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: p.accent }} />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: p.accent }} />

              <div className="flex items-start justify-between mb-6">
                <div
                  className="font-brush text-7xl leading-none transition-transform group-hover:scale-110 group-hover:rotate-[-3deg]"
                  style={{ color: p.accent, opacity: 0.85 }}
                >
                  {p.kanji}
                </div>
                <span className="font-serif-en text-[10px] tracking-[0.3em] text-ink-faint uppercase mt-2">
                  / {p.en}
                </span>
              </div>

              <h3 className="font-serif-cn text-xl text-ink mb-3">{p.title}</h3>
              <p className="font-serif-cn text-sm text-ink-muted leading-relaxed">{p.desc}</p>

              {/* Subtle accent line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                style={{ background: p.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 relative px-8 md:px-16 py-8 border-l-2 border-shu"
        >
          <div className="font-brush text-3xl md:text-4xl text-ink leading-relaxed">
            「 用 小型 的内存，<br />承载一整个 Sekai。」
          </div>
          <div className="mt-4 font-serif-en text-sm italic text-ink-faint">
            — A pragmatic dreamer's manifesto
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
