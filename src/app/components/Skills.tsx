import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Atom,
  Braces,
  Bot,
  Boxes,
  Cuboid,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Triangle,
  Wand2,
  Wind,
  Network
  
} from 'lucide-react';
import { SiExpress } from "react-icons/si";
import{
  FaNodeJs ,
  // SiExpress
} from 'react-icons/fa';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stack = [
    // { name: 'Next.js', icon: Atom },
    { name: 'React', icon: Atom },
    { name: 'TypeScript', icon: Braces },
    // { name: 'AI SDK', icon: Bot },
    { name: 'Tailwind CSS', icon: Wind },
     { name: 'Node.JS', icon: FaNodeJs },
    //  { name: 'Node.JS', icon: FaNodeJs },
     { name: 'Express.js', icon: SiExpress},
    { name: 'shadcn/ui', icon: Wand2 },
    // { name: 'better-auth', icon: ShieldCheck },
    // { name: 'Prisma', icon: Triangle },
    // { name: 'TRPC', icon: Boxes },
    // { name: 'Claude', icon: Sparkles },
    // { name: 'Tanstack', icon: Cuboid },
    // { name: 'Cursor', icon: MousePointer2 }
  ];

  return (
    <section id="skills" ref={ref} className="py-16 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-none border-2 border-zinc-700 bg-black"
          style={{ borderStyle: 'dotted' }}
        >
          <div className="border-b-1 border-zinc-700 px-6 py-4" style={{ borderBottomStyle: 'dotted' }}>
            <h3 className="text-xl font-semibold leading-none text-zinc-300">Tools I Use</h3>
          </div>

          <div className="px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {stack.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.2, delay: 0.05 + index * 0.03 }}
                    className="inline-flex items-center gap-2.5 rounded-xl border-2 border-zinc-700 bg-zinc-950 px-4 py-2 text-zinc-300"
                    style={{ borderStyle: 'dotted' }}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm leading-none sm:text-base">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
