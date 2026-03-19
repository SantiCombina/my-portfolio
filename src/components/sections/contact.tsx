'use client';

import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

import { EmailForm, Title } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      id: 'email',
      icon: Mail,
      label: t.contact.email,
      value: 'santicombina@gmail.com',
      href: 'mailto:santicombina@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: t.contact.linkedin,
      value: 'Santiago Combina',
      href: 'https://linkedin.com/in/santiago-combina',
      color: 'from-blue-600 to-blue-800',
    },
    {
      id: 'github',
      icon: Github,
      label: t.contact.github,
      value: 'santicombina',
      href: 'https://github.com/santicombina',
      color: 'from-gray-700 to-gray-900',
    },
    {
      id: 'location',
      icon: MapPin,
      label: t.contact.location,
      value: 'Argentina',
      href: '#',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden flex items-center justify-center">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Title overline={t.contact.title} title={t.contact.subtitle} />
        </div>

        <div className="flex flex-col lg:flex-row gap-0 items-stretch max-w-4xl mx-auto">
          <motion.div
            className="relative group flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <EmailForm />
          </motion.div>

          <motion.div
            className="hidden lg:block w-px self-stretch mx-10 bg-gradient-to-b from-transparent via-white/10 to-transparent flex-shrink-0"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 flex flex-col gap-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.id}
                    href={contact.href}
                    target={contact.id === 'location' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`group relative block flex-1 ${contact.id === 'location' ? 'pointer-events-none' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-all duration-500`}
                    />
                    <div className="relative bg-white/[0.03] backdrop-blur-xs border border-white/10 rounded-xl p-4 group-hover:border-purple-500/50 transition-all duration-500 h-full flex items-center">
                      <div className="flex items-center gap-3 w-full">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${contact.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-100 group-hover:text-purple-300 transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
