import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Nav } from "./components/Nav";
import { Cursor } from "./components/Cursor";
import { Loader } from "./components/Loader";
import { IconHeart, IconSparkle } from "./components/Icons";

export default function App() {
  return (
    <div id="scroll-root" className="relative bg-cream text-ink">
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </main>

      {/* 页脚小彩蛋 */}
      <div className="bg-ink text-cream py-3 text-center font-mono text-xs">
        <span className="text-cream/60">[ EOF ]</span>
        <span className="mx-3 text-pjsk-pink"><IconHeart /></span>
        <span className="text-cream/60">made by 東雪 in Chengdu</span>
        <span className="mx-3 text-pjsk-cyan"><IconSparkle /></span>
        <span className="text-cream/60">moe moe jump!</span>
      </div>
    </div>
  );
}
