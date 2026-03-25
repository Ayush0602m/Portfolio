import * as React from "react";
import { useEffect, useMemo, useRef, useState, type ElementType } from "react";
import { motion } from "motion/react";
import { Home, User, GraduationCap, FolderGit2, Wrench, Mail, GithubIcon,Linkedin} from "lucide-react";

type DockItem = { id: string; label: string; icon: ElementType };

export function DockNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [mouseX, setMouseX] = useState<number | null>(null);

  const items: DockItem[] = useMemo(
    () => [
      { id: "home", label: "Home", icon: GithubIcon },
      { id: "about", label: "About", icon: User },
      { id: "education", label: "linkedin", icon: Linkedin},
      { id: "projects", label: "github", icon: GithubIcon },
      { id: "skills", label: "Skills", icon: Wrench },
      { id: "contact", label: "Contact", icon: Mail },
    ],
    []
  );


  // toggle navigation based on scroll position
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = items.map((i) => i.id);
  //     const current = sections.find((section) => {
  //       const el = document.getElementById(section);
  //       if (!el) return false;
  //       const rect = el.getBoundingClientRect();
  //       return rect.top <= 120 && rect.bottom >= 120;
  //     });
  //     if (current) setActiveSection(current);
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [items]);

  // const scrollToSection = (sectionId: string) => {
  //   const el = document.getElementById(sectionId);
  //   if (!el) return;
  //   const offset = 80;
  //   const top = el.getBoundingClientRect().top + window.scrollY - offset;
  //   window.scrollTo({ top, behavior: "smooth" });
  // };

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="group flex items-end gap-2 rounded-2xl border border-border/40 bg-background/70 px-3 py-2 backdrop-blur-xl shadow-lg"
        onMouseMove={(e) => setMouseX(e.clientX)}
        onMouseLeave={() => setMouseX(null)}
        role="navigation"
        aria-label="Dock navigation"
      >
        {items.map((item) => (
          <DockButton
            key={item.id}
            item={item}
            mouseX={mouseX}
            active={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </motion.div>
    </div>
  );
}

function DockButton({
  item,
  mouseX,
  active,
  onClick,
}: {
  item: DockItem;
  mouseX: number | null;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);

  // distance-based magnification
  let scale = 1;
  if (mouseX != null && ref.current) {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const dist = Math.abs(mouseX - centerX);
    const maxDist = 140; // wider = smoother
    const t = Math.max(0, 1 - dist / maxDist); // 1 near, 0 far
    scale = 1 + t * 0.55; // peak scale ~1.55
  }

  const Icon = item.icon;

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
      className={[
        "relative grid place-items-center rounded-2xl px-3 py-2",
        "text-muted-foreground hover:text-foreground",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
        active ? "text-foreground" : "",
      ].join(" ")}
      aria-label={item.label}
    >
      <Icon className="h-5 w-5" />

      {/* active dot */}
      {active && (
        <motion.div
          layoutId="dockActiveDot"
          className="absolute -bottom-1 h-1 w-1 rounded-full bg-foreground"
        />
      )}
    </motion.button>
  );
}