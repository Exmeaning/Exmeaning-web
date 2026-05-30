import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconClose, IconMenu } from "./Icons";

const NAV = [
  { k: "about", l: "ABOUT" },
  { k: "tech", l: "TECH" },
  { k: "projects", l: "PROJECTS" },
  { k: "contact", l: "CONTACT" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const ids = ["about", "tech", "projects", "contact"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 150 && r.bottom >= 150) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <div className="bg-cream border-3 border-ink hard-shadow-pink px-3 md:px-5 py-2 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="w-8 h-8 bg-pjsk-pink border-2 border-ink flex items-center justify-center text-white font-display text-lg group-hover:rotate-12 transition-transform">
            東
          </span>
          <span className="font-display tracking-widest text-sm md:text-base hidden sm:block">
            EXMEANING<span className="text-pjsk-pink">.</span>COM
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.k}
              onClick={() => go(n.k)}
              className={`relative px-3 py-1.5 font-display text-sm tracking-widest transition-colors ${
                active === n.k ? "text-white" : "text-ink hover:text-pjsk-pink"
              }`}
            >
              {active === n.k && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 bg-ink -z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{n.l}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Exmeaning"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 bg-pjsk-pink text-white border-2 border-ink px-3 py-1 text-xs font-mono hover:bg-pjsk-coral transition-colors"
          >
            GITHUB <IconArrowUpRight />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 bg-ink text-cream border-2 border-ink flex items-center justify-center font-display"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* 移动菜单 */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-cream border-3 border-ink hard-shadow p-2 flex flex-col"
        >
          {NAV.map((n) => (
            <button
              key={n.k}
              onClick={() => go(n.k)}
              className={`text-left px-4 py-3 font-display tracking-widest border-b border-dashed border-ink/20 last:border-0 ${
                active === n.k ? "bg-ink text-cream" : ""
              }`}
            >
              {n.l}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
