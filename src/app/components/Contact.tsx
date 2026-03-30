import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const promptRows = [
  { label: 'name', placeholder: 'Your name' },
  { label: 'email', placeholder: 'your.email@example.com' },
] as const;

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Primary channel',
      value: 'ayushmangla73@gmail.com',
      href: 'mailto:ayushmangla73@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Current location',
      value: 'New Delhi, India',
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6 lg:px-8 text-white"
      style={{
        background:
          'radial-gradient(circle at 15% 10%, rgba(157,180,192,0.12) 0%, rgba(0,0,0,0) 40%), linear-gradient(180deg, #060709 0%, #030405 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm text-white/55 uppercase tracking-[0.35em] mb-4 block">
            Contact.exe
          </span>
         
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="overflow-hidden rounded-[2rem] border shadow-2xl"
          style={{
            background:
              'linear-gradient(180deg, #0f1418 0%, #0a0f13 52%, #080c10 100%)',
            borderColor: 'rgba(122, 154, 172, 0.32)',
            boxShadow: '0 28px 90px rgba(0, 0, 0, 0.45)',
          }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-b"
            style={{
              borderColor: 'rgba(255,255,255,0.09)',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
            }}
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div
              className="text-xs uppercase tracking-[0.35em] text-white/55"
              style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
            >
              portfolio-contact.sh
            </div>
            <div
              className="rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[#9ff6c2]"
              style={{
                borderColor: 'rgba(159,246,194,0.26)',
                backgroundColor: 'rgba(159,246,194,0.08)',
                fontFamily: '"IBM Plex Mono", "Fira Code", monospace',
              }}
            >
              session live
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="border-b px-5 py-6 lg:border-b-0 lg:border-r md:px-8 md:py-8"
              style={{ borderColor: 'rgba(255,255,255,0.09)' }}
            >
              <div
                className="mb-6 space-y-2 text-sm text-white/68"
                style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
              >
                <p>$ initialize contact session</p>
                <p className="text-[#9ff6c2]">status: accepting freelance + full-time opportunities</p>
                <p className="text-white/45">hint: fill the fields below to queue a message.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {promptRows.map((field) => (
                  <label key={field.label} className="block">
                    <div
                      className="mb-2 flex items-center gap-3 text-sm text-[#9ff6c2]"
                      style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
                    >
                      <span className="text-white/45">$</span>
                      <span>set {field.label}</span>
                    </div>
                    <input
                      type={field.label === 'email' ? 'email' : 'text'}
                      id={field.label}
                      name={field.label}
                      value={formData[field.label]}
                      onChange={handleChange}
                      required
                      placeholder={field.placeholder}
                      className="w-full rounded-2xl border px-4 py-3 text-base text-white placeholder:text-white/28 transition-colors focus:outline-none"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        borderColor: 'rgba(255,255,255,0.12)',
                        fontFamily: '"IBM Plex Mono", "Fira Code", monospace',
                      }}
                    />
                  </label>
                ))}

                <label className="block">
                  <div
                    className="mb-2 flex items-center gap-3 text-sm text-[#9ff6c2]"
                    style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
                  >
                    <span className="text-white/45">$</span>
                    <span>cat project-brief.txt</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell me what you're building, the timeline, and what kind of help you need."
                    className="w-full rounded-2xl border px-4 py-3 text-base text-white placeholder:text-white/28 transition-colors focus:outline-none resize-none"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.12)',
                      fontFamily: '"IBM Plex Mono", "Fira Code", monospace',
                    }}
                  />
                </label>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p
                    className="text-xs uppercase tracking-[0.25em] text-white/42"
                    style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
                  >
                    expected response time: &lt; 24 hours
                  </p>
                  <motion.button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm uppercase tracking-[0.25em] text-[#08110b]"
                    style={{
                      background:
                        'linear-gradient(135deg, #9ff6c2 0%, color-mix(in srgb, #9ff6c2 55%, var(--neutral-blue) 45%) 100%)',
                      fontFamily: '"IBM Plex Mono", "Fira Code", monospace',
                    }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send packet <Send className="h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="px-5 py-6 md:px-8 md:py-8"
            >
              <div className="space-y-6">
                <div
                  className="rounded-[1.5rem] border p-5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    borderColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="mb-4 text-xs uppercase tracking-[0.3em] text-white/45"
                    style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
                  >
                    network routes
                  </div>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <div
                        key={info.label}
                        className="flex items-start gap-4 rounded-2xl border p-4"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          borderColor: 'rgba(255,255,255,0.06)',
                        }}
                      >
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl"
                          style={{ backgroundColor: 'rgba(159,246,194,0.1)' }}
                        >
                          <info.icon className="h-5 w-5 text-[#9ff6c2]" />
                        </div>
                        <div className="min-w-0">
                          <p
                            className="mb-1 text-[11px] uppercase tracking-[0.25em] text-white/42"
                            style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
                          >
                            {info.label}
                          </p>
                          {info.href ? (
                            <a href={info.href} className="break-all text-sm text-white transition-opacity hover:opacity-75">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-white">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-[1.5rem] border p-5"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(159,246,194,0.1) 0%, rgba(157,180,192,0.08) 100%)',
                    borderColor: 'rgba(159,246,194,0.12)',
                  }}
                >
                  <div
                    className="mb-3 text-xs uppercase tracking-[0.3em] text-white/45"
                    style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
                  >
                    session status
                  </div>
                  <p className="text-2xl text-white">Available for work</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Best fit for portfolio sites, product frontends, landing pages, and polished UI refreshes that need both design taste and clean implementation.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9ff6c2] shadow-[0_0_14px_rgba(159,246,194,0.85)]" />
                    <span
                      className="text-xs uppercase tracking-[0.25em] text-white/55"
                      style={{ fontFamily: '"IBM Plex Mono", "Fira Code", monospace' }}
                    >
                      listening on port 443
                    </span>
                  </div>
                </div>

                <div
                  className="rounded-[1.5rem] border p-5 text-sm text-white/62"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'rgba(255,255,255,0.06)',
                    fontFamily: '"IBM Plex Mono", "Fira Code", monospace',
                  }}
                >
                  <p className="text-white/45">recent command</p>
                  <p className="mt-2 text-[#9ff6c2]">$ ship thoughtful interfaces</p>
                  <p className="mt-1">result: fast, polished, and human-centered experiences.</p>
                </div>
              </div>
            </motion.aside>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-white/55"
        >
          <p>&copy; 2026 Portfolio. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
}
