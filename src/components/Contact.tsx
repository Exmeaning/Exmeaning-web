import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import Logo from "./Logo";

const links = [
  {
    label: "GitHub",
    value: "@Exmeaning",
    href: "https://github.com/Exmeaning",
    sub: "主仓库 · 个人",
    jp: "個人",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2.2c-3.34.73-4.04-1.4-4.04-1.4-.55-1.4-1.33-1.76-1.33-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.37.8 1.1.8 2.22v3.3c0 .32.22.7.82.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "moe-sekai",
    value: "@moe-sekai",
    href: "https://github.com/moe-sekai",
    sub: "PJSK 生态组织",
    jp: "組織",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: "Moesekai",
    value: "pjsk.moe",
    href: "https://pjsk.moe",
    sub: "PJSK 数据站",
    jp: "本拠",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "mail@exmeaning.com",
    href: "mailto:mail@exmeaning.com",
    sub: "主联系邮箱",
    jp: "連絡",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "Blog",
    value: "exmeaning.com",
    href: "https://exmeaning.com",
    sub: "主站 / 博客（建设中）",
    jp: "日記",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto relative z-20">
        <SectionHeader number="伍" jp="連絡先" en="Contact & Links" />

        <div className="mt-16 grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="space-y-3">
              <div className="font-brush text-5xl text-ink leading-tight">
                連絡を<br />お待ちしております
              </div>
              <div className="font-serif-en text-xs tracking-[0.2em] text-ink-faint uppercase">
                Looking forward to hearing from you
              </div>
            </div>
            <p className="font-serif-cn text-sm text-ink-muted leading-relaxed">
              无论是关于 PJSK 的讨论、技术合作的邀约，还是对 moe-sekai 生态的建议，都欢迎联系我。
              邮件通常会在 <span className="text-shu">24 小时内</span> 回复。
            </p>

            {/* Decorative card */}
            <div className="relative p-6 border border-shu/30 bg-shu/5">
              <div className="absolute -top-3 -left-3 stamp w-10 h-10 text-lg">夢</div>
              <div className="font-brush text-2xl text-ink mb-2">「 浅忆清梦 」</div>
              <div className="font-serif-en text-[10px] tracking-wider text-ink-faint italic">
                A faint memory of a clear dream —
                <br />
                may every line of code we write
                <br />
                leave something beautiful behind.
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-3 space-y-3">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center gap-5 p-5 border border-ink/10 bg-washi/60 hover:border-shu/40 hover:bg-washi transition-all card-lift"
              >
                <div className="flex-shrink-0 w-12 h-12 border border-ink/15 group-hover:border-shu flex items-center justify-center text-ink-soft group-hover:text-shu transition-colors">
                  {l.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-serif-en text-sm tracking-wider text-ink-faint uppercase">
                      {l.label}
                    </span>
                    <span className="font-brush text-base text-shu">{l.jp}</span>
                  </div>
                  <div className="font-mono text-base text-ink truncate group-hover:text-shu transition-colors">
                    {l.value}
                  </div>
                  <div className="font-serif-cn text-[11px] text-ink-faint mt-0.5">{l.sub}</div>
                </div>

                <div className="flex-shrink-0 font-serif-en text-2xl text-ink-faint group-hover:text-shu group-hover:translate-x-1 transition-all">
                  →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-ink/10 px-6 md:px-12 py-12 mt-12">
      <div className="max-w-6xl mx-auto relative z-20 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-4 group">
          <Logo char="雪" size={44} />
          <div>
            <div className="font-brush text-xl text-ink transition-colors group-hover:text-shu">東雪</div>
            <div className="font-serif-en text-[10px] tracking-[0.3em] text-ink-faint uppercase">
              Azuma Yuki · MMXXVI
            </div>
          </div>
        </div>

        <div className="text-center font-serif-cn text-xs text-ink-faint leading-relaxed">
          <div>
            Built with <span className="text-shu">React · Vite · Tailwind</span>
          </div>
          <div className="mt-1 font-serif-en tracking-wider">
            Crafted with ❤ in Chengdu · Sichuan
          </div>
        </div>

        <div className="md:text-right font-mono text-[10px] text-ink-faint leading-loose">
          <div>© 2026 Azuma Yuki / 東雪</div>
          <div>pjsk.moe · moe-sekai</div>
          <div className="mt-1 font-serif-en italic">"Code lightly, dream deeply."</div>
        </div>
      </div>
    </footer>
  );
}
