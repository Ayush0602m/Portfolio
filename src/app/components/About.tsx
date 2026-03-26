import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern standards.',
      color: 'var(--neutral-blue-light)',
      iconColor: 'var(--neutral-blue)'
    },
    {
      icon: Palette,
      title: 'Design First',
      description: 'Creating beautiful interfaces that balance aesthetics with functionality.',
      color: 'var(--neutral-terracotta-light)',
      iconColor: 'var(--neutral-terracotta)'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing every detail for speed, efficiency, and seamless user experience.',
      color: 'var(--neutral-peach-light)',
      iconColor: 'var(--neutral-peach)'
    }
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >

         {/* Header Background */}
        
          
          <div className="text-left mb-6 flex items-center justify-between ">

  <h2 className="text-5xl md:text-5xl tracking-tight font-bold mt-9">
    Hi, I'm Ayush Mangla

    <span className="block font-extralight text-[20px]/7 mt-5 ">
    Software Engineer, building stuff that matters. Passionate about creating innovative web solutions and enhancing user experiences.
  </span>
  </h2>


 

  <div className="flex items-center mt-0">
    {/* <img 
      src="/profile.jpg" 
      alt="Ayush Mangla profile"
      className="w-16 h-16 md:w-30 md:h-30 rounded-full object-cover border-2 border-muted-foreground"
      style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.07)' }}
    /> */}

    <span className="ml-4 text-muted-foreground hidden sm:inline">
      {/* location or tagline */}
    </span>
  </div>

</div>
          
          
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16 border-b border-grey">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground font-bold leading-relaxed mb-6 text-white">
            About me
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed ">
              scoobdy 2 
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative aspect-square rounded-2xl overflow-hidden "
            style={{ 
              background: 'black '
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-48 h-48 rounded-full " 
                style={{ 
                  background: `linear-gradient(135deg, var(--neutral-sage) 0%, var(--neutral-mauve) 100%)`,
                  opacity: 0.3
                }}
              />
            </div>
          </motion.div> */}
        </div>
<section>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="p-8 rounded-2xl transition-all hover:scale-105"
              style={{ backgroundColor: feature.color }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: feature.iconColor + '20' }}>
                <feature.icon className="w-6 h-6" style={{ color: feature.iconColor }} />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        </section>
        <div className="border-b border-gray-300 w-full"></div>
      </div>
    
    </section>
  );
}