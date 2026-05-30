import { motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "关于", en: "About" },
  { href: "#philosophy", label: "理念", en: "Philosophy" },
  { href: "#stack", label: "技术", en: "Stack" },
  { href: "#works", label: "作品", en: "Works" },
  { href: "#contact", label: "联系", en: "Contact" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 backdrop-blur-md"
      style={{ background: "rgba(245, 241, 232, 0.7)", borderBottom: "1px solid rgba(139, 134, 128, 0.15)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo char="雪" size={40} />
          <div className="flex flex-col leading-none">
            <span className="font-brush text-xl text-ink transition-colors group-hover:text-shu">東雪</span>
            <span className="font-serif-en text-[10px] tracking-[0.2em] text-ink-faint mt-0.5">AZUMA · YUKI</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-8 font-serif-cn text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative flex flex-col items-center text-ink-soft hover:text-shu transition-colors"
              >
                <span>{l.label}</span>
                <span className="font-serif-en text-[9px] tracking-[0.2em] text-ink-faint group-hover:text-shu-soft uppercase">
                  {l.en}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-shu scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/moe-sekai"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-ink/20 hover:border-shu hover:text-shu transition-all font-mono text-xs tracking-wider"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2.2c-3.34.73-4.04-1.4-4.04-1.4-.55-1.4-1.33-1.76-1.33-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.64 1.66.24 2.88.12 3.18.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.37.8 1.1.8 2.22v3.3c0 .32.22.7.82.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          moe-sekai
        </a>
      </div>
    </motion.nav>
  );
}
