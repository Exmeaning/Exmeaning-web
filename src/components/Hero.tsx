import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconNote, IconStar, IconHeart, IconHeartLine, IconArrowRight } from "./Icons";

const ROTATING = ["東雪", "浅忆清梦", "Exmeaning"];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100vh] pt-24 pb-16 overflow-hidden grid-bg">
      {/* 顶部 ticker */}
      <div className="absolute top-0 left-0 right-0 bg-pjsk-pink text-white border-b-4 border-ink overflow-hidden z-20">
        <div className="flex whitespace-nowrap marquee-track py-2 font-display tracking-wider text-lg">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 px-4">
              <span><IconStar /> NOW PLAYING</span>
              <span>// MOESEKAI × MOEBOT NEXT</span>
              <span>◆ SCU · 机械工程 · UNDERGRAD</span>
              <span>// VIBE CODING ENTHUSIAST</span>
              <span><IconStar /> 世界は、まだ、終わらない</span>
              <span>// GO · NEXT.JS · ZEROBOT</span>
              <span>◆ PJSK · GAKUMAS · BANDORI</span>
              <span>// FULL-STACK · OTAKU · EFFICIENCY</span>
            </div>
          ))}
        </div>
      </div>

      {/* 装饰：大圆 */}
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-pjsk-yellow opacity-60 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full bg-pjsk-cyan opacity-40 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-12">
        {/* 顶部标签条 */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white ink-border rounded-full text-sm font-mono">
            <span className="w-2 h-2 bg-pjsk-coral rounded-full pulse-dot" />
            status: online
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-pjsk-yellow ink-border rounded-full text-sm font-mono">
            <IconNote /> now spinning: 小豆沢こはね × 光線歌
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-pjsk-cyan ink-border rounded-full text-sm font-mono">
            v2.0.26 / 成都 · Chengdu
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* 左侧大标题 */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="font-display text-ink"
            >
              <div className="text-6xl md:text-8xl leading-[0.85] tracking-tight">
                HELLO, I'M
              </div>
              <div className="text-[20vw] md:text-[13rem] leading-[0.82] tracking-tight relative">
                <span className="text-stroke">東</span>
                <span className="relative inline-block">
                  <span className="relative z-10">雪</span>
                  <span className="absolute inset-0 bg-pjsk-pink -skew-x-6 -z-0 translate-x-1 translate-y-1" />
                </span>
                <span className="text-stroke">。</span>
              </div>
              <div className="text-4xl md:text-6xl mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="inline-block px-3 bg-ink text-cream font-jp">またの名を</span>
                <motion.span
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-pjsk-pink font-jp"
                >
                  {ROTATING[idx]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 max-w-2xl text-lg md:text-xl font-jp text-ink-soft leading-relaxed"
            >
              独立全栈开发者 / <span className="text-pjsk-pink font-bold">PJSK 社区工具作者</span> /
              效率主义折腾党。
              <br className="hidden md:block" />
              在四川大学读机械工程，偶尔写 Go，偶尔造轮子，大部分时间在摸 Sekai。
            </motion.p>

            {/* 动作按钮 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-ink text-cream ink-border-3 hard-shadow-pink hover:-translate-y-1 hover:translate-x-1 transition-transform font-display tracking-widest text-xl"
              >
                SEE MY WORK
                <span className="transition-transform group-hover:translate-x-1"><IconArrowRight /></span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-4 bg-pjsk-yellow ink-border-3 hard-shadow hover:-translate-y-1 hover:translate-x-1 transition-transform font-display tracking-widest text-xl"
              >
                SAY HI <IconNote />
              </a>
            </motion.div>
          </div>

          {/* 右侧头像卡 */}
          <motion.div
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 4, scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 px-3 py-1 bg-pjsk-yellow ink-border font-display text-ink rotate-[-8deg] z-10">
                ID CARD <IconStar />
              </div>
              <div className="absolute -bottom-4 -right-4 px-3 py-1 bg-pjsk-pink ink-border text-white font-mono text-xs rotate-[6deg] z-10">
                since 2024
              </div>
              <div className="w-64 h-80 md:w-72 md:h-96 bg-white ink-border-3 hard-shadow-cyan p-4 relative overflow-hidden">
                <div className="w-full h-full relative ink-border">
                  <img
                    src="/assets/avatar.png"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 scanlines pointer-events-none" />
                  <div className="absolute top-2 left-2 bg-ink text-cream px-2 py-0.5 font-mono text-xs">
                    NO. 001
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-pjsk-pink text-white py-1.5 font-display tracking-widest text-sm text-center border-t-3 border-ink">
                    東雪
                  </div>
                </div>
                {/* 贴纸 */}
                <div className="absolute -right-3 top-10 bg-pjsk-cyan ink-border px-2 py-1 font-mono text-[10px] rotate-12">
                  <IconHeartLine /> OTAKU
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 底部统计条 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { n: "04+", l: "SIDE PROJECTS", c: "bg-white" },
            { n: "90%", l: "SEKAI.BEST CORE", c: "bg-pjsk-pink text-white" },
            { n: "GO", l: "FAVORITE LANG", c: "bg-pjsk-yellow", icon: <IconHeart /> },
            { n: "∞", l: "CUPS OF MILK TEA", c: "bg-pjsk-cyan" },
          ].map((s, i) => (
            <div
              key={i}
              className={`${s.c} ink-border-3 px-5 py-4 hard-shadow relative overflow-hidden`}
            >
              <div className="font-display text-5xl md:text-6xl leading-none flex items-center gap-2">{s.icon ? <>GO {s.icon}</> : s.n}</div>
              <div className="font-mono text-xs mt-2 tracking-wider">{s.l}</div>
              <div className="absolute top-2 right-2 font-display text-2xl opacity-30">0{i + 1}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
