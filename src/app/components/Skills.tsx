import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'var(--neutral-sage-light)',
      barColor: 'var(--neutral-sage)',
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Motion & Animations', level: 85 }
      ]
    },
    {
      title: 'Backend & Tools',
      color: 'var(--neutral-mauve-light)',
      barColor: 'var(--neutral-mauve)',
      skills: [
        { name: 'Node.js & APIs', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Git & CI/CD', level: 90 },
        { name: 'Cloud Services', level: 75 }
      ]
    },
    {
      title: 'Design & UX',
      color: 'var(--neutral-peach-light)',
      barColor: 'var(--neutral-peach)',
      skills: [
        { name: 'Figma & Design Systems', level: 95 },
        { name: 'UI/UX Design', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'Accessibility', level: 88 }
      ]
    }
  ];

  const tools = [
    'Figma',
    'VS Code',
    'Git',
    'Docker',
    'Vercel',
    'Notion',
    'Linear',
    'Slack',
    'Photoshop',
    'Illustrator'
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center py-20 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            Technical Proficiency &
            <br />
            <span className="text-muted-foreground">Tools I Use</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="p-8 rounded-2xl border border-border/40"
              style={{ backgroundColor: category.color }}
            >
              <h3 className="text-xl mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(0,0,0,0.08)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.barColor }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 md:p-10 rounded-2xl bg-background border border-border/40"
        >
          <h3 className="text-2xl mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.6 + index * 0.03,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="px-4 py-2 rounded-full bg-muted/50 text-sm hover:bg-muted transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}