import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import Navbar from "@/components/sections/Navbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import links from "@/constants/dockContent";

export default function Home() {
  return (
    <div>
      <FloatingDock items={links} />
      <Navbar />
      <Header />
      <About />
    </div>
  );
}
