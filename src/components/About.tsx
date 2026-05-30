import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconSparkle, IconSparkle6, IconSparkle8, IconStar, IconNote } from "./Icons";

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const tags = [
    { t: "独立全栈", c: "bg-pjsk-pink text-white", r: -3 },
    { t: "PJSK 厨", c: "bg-pjsk-yellow", r: 4 },
    { t: "效率主义", c: "bg-pjsk-cyan", r: -5 },
    { t: "Go 语言", c: "bg-white", r: 3 },
    { t: "GakuMas", c: "bg-pjsk-lime", r: 6 },
    { t: "BanG Dream!", c: "bg-pjsk-purple text-white", r: -3 },
    { t: "折腾党", c: "bg-ink text-cream", r: 5 },
    { t: "Vibe Coding", c: "bg-white", r: -6 },
    { t: "Docker 玩家", c: "bg-pjsk-cyan", r: 4 },
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-cream noise-bg">
      {/* 装饰星 */}
      <div className="absolute top-10 left-8 text-pjsk-pink text-5xl spin-slow"><IconSparkle /></div>
      <div className="absolute top-40 right-10 text-pjsk-cyan text-4xl spin-slow"><IconSparkle6 /></div>
      <div className="absolute bottom-20 left-1/4 text-pjsk-yellow text-6xl spin-slow"><IconSparkle8 /></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-4 mb-12"
        >
          <span className="font-display text-pjsk-pink text-6xl md:text-8xl">01</span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight">
            ABOUT <span className="text-stroke">ME</span>
          </h2>
          <span className="font-jp text-ink-soft hidden md:inline">— 私について</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 主介绍卡 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-7 bg-white ink-border-3 hard-shadow p-8 md:p-10 relative"
          >
            <div className="absolute -top-4 left-8 bg-ink text-cream px-4 py-1 font-display tracking-widest">
              // PROFILE.md
            </div>
            <div className="absolute top-6 right-6 font-mono text-xs text-ink-soft">
              [ last updated: 2026 ]
            </div>

            <div className="font-mono text-sm text-ink-soft mb-6">
              <span className="text-pjsk-pink">$</span> cat /etc/exmeaning/profile.txt
            </div>

            <p className="text-xl md:text-2xl font-jp leading-relaxed mb-6">
              我是<span className="bg-pjsk-pink text-white px-2">東雪</span>，在其它地方可能叫
              <span className="bg-pjsk-cyan px-2">浅忆清梦</span>。
              四川大学 <span className="bg-pjsk-yellow px-2 font-mono">SCU</span> 机械工程专业本科在读，
              但比起画图做 CAD，我更喜欢在深夜写 Go、造轮子，然后在 Sekai 里推剧情。
            </p>
            <p className="text-lg font-jp leading-relaxed mb-6 text-ink-soft">
              我痴迷于 <span className="text-pjsk-pink font-bold">Vibe Coding</span> 的高效形态——
              把提示词工程与逻辑架构玩明白，让 AI 成为真正的协作者，而不是只会写 boilerplate 的打字员。
              我相信低资源占用、快速编译、Docker 一键部署才是现代独立开发的浪漫。
            </p>
            <p className="text-lg font-jp leading-relaxed text-ink-soft">
              喜欢二次元，PJSK / 学园偶像大师 / BanG Dream! 都有涉猎。
            </p>

            {/* 代码片段 */}
            <div className="mt-8 bg-ink text-cream p-5 font-mono text-sm ink-border-3 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 text-xs">
                <span className="w-3 h-3 rounded-full bg-pjsk-coral" />
                <span className="w-3 h-3 rounded-full bg-pjsk-yellow" />
                <span className="w-3 h-3 rounded-full bg-pjsk-lime" />
                <span className="ml-3 text-cream/60">~/whoami.go</span>
              </div>
              <pre className="text-cream/90">
{`type Me struct {
    Name      []string  `}<span className="text-pjsk-cyan">`json:"aliases"`</span>{`
    School    string    `}<span className="text-pjsk-cyan">`json:"scu"`</span>{`
    Favorite  string    `}<span className="text-pjsk-cyan">`json:"golang"`</span>{`
    Hobby     []string  `}<span className="text-pjsk-cyan">`json:"otaku"`</span>{`
}
// `}<span className="text-pjsk-yellow"><IconStar /></span>{` compile speed >>> everything`}
              </pre>
            </div>
          </motion.div>

          {/* 侧边卡片 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 学校卡 */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -3 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-pjsk-yellow ink-border-3 hard-shadow-pink p-6 relative"
            >
              <div className="font-display text-4xl mb-2">SCU</div>
              <div className="font-jp text-lg">四川大学 · 机械工程</div>
              <div className="font-mono text-xs mt-2 text-ink/70">// currently undergraduate</div>
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-pjsk-pink ink-border-3 flex items-center justify-center text-white text-2xl spin-slow">
                <IconStar />
              </div>
            </motion.div>

            {/* 兴趣卡 */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 2 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-pjsk-cyan ink-border-3 hard-shadow-yellow p-6"
            >
              <div className="font-display text-2xl mb-3"><IconNote /> NOW LOVING</div>
              <ul className="font-jp space-y-2 text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pjsk-pink rounded-full" />
                  Project SEKAI — 世界计划
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pjsk-yellow rounded-full" />
                  学園アイドルマスター
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ink rounded-full" />
                  BanG Dream! — バンドリ
                </li>
              </ul>
            </motion.div>

            {/* 标签云 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-white ink-border-3 p-5"
            >
              <div className="font-display text-xl mb-3"># TAGS</div>
              <div className="flex flex-wrap gap-2">
                {tags.map((t, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className={`${t.c} ink-border px-3 py-1 text-sm font-jp inline-block`}
                    style={{ transform: `rotate(${t.r}deg)` }}
                  >
                    #{t.t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
