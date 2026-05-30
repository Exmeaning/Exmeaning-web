import SakuraCanvas from "./components/SakuraCanvas";
import InkCursor from "./components/InkCursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Stack from "./components/Stack";
import Works from "./components/Works";
import Contact, { Footer } from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen grain">
      {/* Ink-trail cursor (fine pointers only) */}
      <InkCursor />

      {/* Animated sakura/snow canvas */}
      <SakuraCanvas />

      {/* Decorative large brush strokes in background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute -top-20 -right-20 font-brush text-[22rem] leading-none text-ink/[0.025] select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          東
        </div>
        <div
          className="absolute top-1/3 -left-16 font-brush text-[18rem] leading-none text-shu/[0.04] select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          雪
        </div>
        <div
          className="absolute bottom-10 right-20 font-brush text-[14rem] leading-none text-ink/[0.02] select-none"
          style={{ writingMode: "vertical-rl" }}
        >
          夢
        </div>
      </div>

      {/* Main content */}
      <Nav />
      <main className="relative">
        <Hero />

        {/* Section divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="divider-line font-serif-en text-[10px] tracking-[0.4em] uppercase">
            目次 · Contents
          </div>
        </div>

        <About />

        <div className="max-w-4xl mx-auto px-6">
          <div className="divider-line" />
        </div>

        <Philosophy />

        <div className="max-w-4xl mx-auto px-6">
          <div className="divider-line" />
        </div>

        <Stack />

        <div className="max-w-4xl mx-auto px-6">
          <div className="divider-line" />
        </div>

        <Works />

        <div className="max-w-4xl mx-auto px-6">
          <div className="divider-line" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
