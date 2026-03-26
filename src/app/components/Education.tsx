import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'B.TECH CSE',
      school: 'Manav rachna university',
      period: '2023 - 2027',
      description: 'Haryana, India',
      achievements: [
       
      ]
    },
   
  ];

  

  return (
    <section id="education" ref={ref} className=" py-10 px-5 sm:px-6 g:px-8" style={{ backgroundColor: 'black' }}>
      <div className="max-w-4xl mx-auto w-full">
        
          <span className="text-2xl font-bold text-white  uppercase tracking-wider mb-2 block text-left">
            Education
          </span>
        
         

        <div className="grid gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative p-8 md:p-10 rounded-2xl bg-background border border-border/40"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" 
                  style={{ backgroundColor: index === 0 ? 'var(--neutral-blue-light)' : 'var(--neutral-sage-light)' }}
                >
                  <GraduationCap className="w-8 h-8" style={{ color: index === 0 ? 'var(--neutral-blue)' : 'var(--neutral-sage)' }} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <span 
                      className="inline-block px-4 py-2 rounded-full text-sm whitespace-nowrap"
                      style={{ 
                        backgroundColor: index === 0 ? 'var(--neutral-blue-light)' : 'var(--neutral-sage-light)',
                        color: index === 0 ? 'var(--neutral-blue)' : 'var(--neutral-sage)'
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{edu.description}</p>
                  
                  <div className="space-y-2">
                    {edu.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-center gap-3">
                        <div 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ backgroundColor: index === 0 ? 'var(--neutral-blue)' : 'var(--neutral-sage)' }}
                        />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
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