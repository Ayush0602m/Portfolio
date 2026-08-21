import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 py-24 text-white sm:px-8 lg:px-12"
      style={{ backgroundColor: '#080909' }}
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/45">
            Get in touch
          </p>
          <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/55">
            I&apos;m open to thoughtful collaborations, freelance work, and new opportunities.
          </p>
        </motion.div>

        <div className="grid min-w-0 gap-12 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-7"
          >
            <a
              href="mailto:ayushmangla73@gmail.com"
              className="group flex min-w-0 items-start gap-4"
            >
              <Mail className="mt-1 h-5 w-5 shrink-0 text-white/45" />
              <span className="min-w-0">
                <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/40">
                  Email
                </span>
                <span className="break-all text-sm text-white/80 transition-colors group-hover:text-white">
                  ayushmangla73@gmail.com
                </span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-white/45" />
              <span>
                <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-white/40">
                  Based in
                </span>
                <span className="text-sm text-white/80">New Delhi, India</span>
              </span>
            </div>

            <p className="border-l border-white/20 pl-4 text-sm leading-6 text-white/45">
              Usually replies within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="min-w-0 space-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                  Name
                </span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-white/70"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-white/70"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/40">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me a little about your project..."
                className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-white/70"
              />
            </label>

            <div className="flex items-center justify-between gap-4 pt-2">
              <span className="text-xs text-white/35">Let&apos;s make something useful.</span>
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/80"
              >
                Send message
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>

        <p className="mt-20 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          © 2026 Portfolio
        </p>
      </div>
    </section>
  );
}
