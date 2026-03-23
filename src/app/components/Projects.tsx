import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Modern Architecture Platform',
      category: 'Web Design & Development',
      description: 'A comprehensive platform showcasing contemporary architectural projects with immersive 3D visualizations and interactive galleries.',
      image: 'https://images.unsplash.com/photo-1665043547526-a2b0c800d130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzExMTk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Three.js', 'TypeScript'],
      link: 'https://example.com',
      github: 'https://github.com',
      accent: 'var(--neutral-terracotta)'
    },
    {
      title: 'Workspace Management System',
      category: 'SaaS Product',
      description: 'An intuitive workspace management tool designed for remote teams, featuring real-time collaboration and smart scheduling.',
      image: 'https://images.unsplash.com/photo-1622814859704-c6cd5ae75dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzMxMjI5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
      link: 'https://example.com',
      github: 'https://github.com',
      accent: 'var(--neutral-blue)'
    },
    {
      title: 'Design System & Components',
      category: 'UI/UX Framework',
      description: 'A comprehensive design system with reusable components, focusing on accessibility and developer experience.',
      image: 'https://images.unsplash.com/photo-1595411425732-e69c1abe2763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm58ZW58MXx8fHwxNzczMDk2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Figma', 'React', 'Storybook'],
      link: 'https://example.com',
      github: 'https://github.com',
      accent: 'var(--neutral-sage)'
    }
  ];

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          
          <h2 className="text-4xl md:text-5xl tracking-tight">
             Projects 
           
          </h2>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted/30">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="text-sm mb-2 block" style={{ color: project.accent }}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ 
                          backgroundColor: tagIndex === 0 ? project.accent + '15' : 'var(--muted)',
                          color: tagIndex === 0 ? project.accent : 'var(--foreground)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: project.accent }}
                      whileHover={{ x: 5 }}
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Source Code <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}