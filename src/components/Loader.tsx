import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconNote } from "./Icons";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-ink text-cream flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="font-display text-[20vw] md:text-9xl tracking-tight"
            >
              <span className="text-stroke">東</span>
              <span className="text-pjsk-pink">雪</span>
              <span className="text-stroke">。</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 justify-center mt-4 font-mono text-sm"
            >
              <span>LOADING</span>
              <span className="w-1 h-1 bg-pjsk-cyan rounded-full blink" />
              <span className="w-1 h-1 bg-pjsk-yellow rounded-full blink" style={{ animationDelay: "0.2s" }} />
              <span className="w-1 h-1 bg-pjsk-pink rounded-full blink" style={{ animationDelay: "0.4s" }} />
            </motion.div>
          </div>
          {/* 角标 */}
          <div className="absolute top-6 left-6 font-mono text-xs text-cream/50">
            [ EXMEANING.COM / V2.0 ]
          </div>
          <div className="absolute top-6 right-6 font-mono text-xs text-cream/50">
            © 2026
          </div>
          <div className="absolute bottom-6 left-6 font-jp text-xs text-cream/50">
            世界は、まだ、終わらない。
          </div>
          <div className="absolute bottom-6 right-6 font-mono text-xs text-cream/50">
            <IconNote /> now loading...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
