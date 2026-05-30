import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconHeartLine, IconNote, IconSparkle, IconSparkle8, IconArrowRight, IconHeart } from "./Icons";

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const links = [
    {
      label: "GITHUB",
      value: "@Exmeaning",
      sub: "个人仓库 · 所有项目都在这",
      href: "https://github.com/Exmeaning",
      color: "bg-ink text-cream",
      icon: "GH",
    },
    {
      label: "ORG",
      value: "@moe-sekai",
      sub: "微型组织 · moe moe jump!",
      href: "https://github.com/moe-sekai",
      color: "bg-pjsk-pink text-white",
      icon: <IconHeartLine />,
    },
    {
      label: "WEBSITE",
      value: "pjsk.moe",
      sub: "Moesekai · PJSK WIKI",
      href: "https://pjsk.moe",
      color: "bg-pjsk-cyan",
      icon: <IconNote />,
    },
    {
      label: "EMAIL",
      value: "mail@exmeaning.com",
      sub: "有事找我可以发邮件",
      href: "mailto:mail@exmeaning.com",
      color: "bg-pjsk-yellow",
      icon: "@",
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 bg-pjsk-yellow overflow-hidden">
      {/* 装饰 */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-20 right-10 text-ink text-9xl font-display opacity-10 spin-slow"><IconSparkle /></div>
      <div className="absolute bottom-20 left-10 text-pjsk-pink text-8xl font-display opacity-30 spin-slow"><IconSparkle8 /></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-4 mb-4"
        >
          <span className="font-display text-pjsk-pink text-6xl md:text-8xl">04</span>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight">
            GET IN <span className="text-stroke">TOUCH</span>
          </h2>
          <span className="font-jp text-ink/70 hidden md:inline">— 連絡先</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-lg font-jp text-ink/80 mb-12"
        >
          无论是聊 PJSK、聊技术、聊合作，还是只是想打个招呼，都欢迎。
          <br />
          世界は、まだ、終わらない。——让我们继续造点什么吧。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className={`${l.color} border-3 border-ink p-6 md:p-8 hard-shadow hover:-translate-y-2 hover:translate-x-1 transition-transform group relative overflow-hidden`}
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 border-3 border-ink bg-cream text-ink font-display text-3xl md:text-4xl flex items-center justify-center shrink-0">
                  {l.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs tracking-widest opacity-70">{l.label}</div>
                  <div className="font-display text-2xl md:text-3xl mt-1 break-all">
                    {l.value}
                  </div>
                  <div className="font-jp text-sm mt-2 opacity-80">{l.sub}</div>
                </div>
                <div className="font-display text-3xl group-hover:translate-x-1 transition-transform shrink-0">
                  <IconArrowRight />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* 大签名 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative bg-ink text-cream border-4 border-ink p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute top-4 left-4 font-mono text-xs text-cream/50">// EOF</div>
          <div className="absolute top-4 right-4 font-mono text-xs text-cream/50">THANKS FOR READING <IconHeartLine /></div>
          <div className="font-jp text-cream/60 mb-2">— 最後に</div>
          <div className="font-display text-5xl md:text-8xl tracking-tight mb-4">
            LET'S BUILD <span className="text-pjsk-pink">SOMETHING</span>
            <br />
            <span className="text-pjsk-cyan">WONDERFUL</span> TOGETHER.
          </div>
          <div className="font-jp text-xl md:text-2xl text-cream/80">
            一緒に、素晴らしいものを作ろう。
          </div>

          {/* 底部签名行 */}
          <div className="mt-10 pt-6 border-t-2 border-dashed border-cream/20 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-sm text-cream/60">
            <span>© 2026 東雪 / 浅忆清梦</span>
            <span className="hidden md:inline">·</span>
            <span>built with <IconHeart /> and too much milk tea</span>
            <span className="hidden md:inline">·</span>
            <span>成都 · Chengdu</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
