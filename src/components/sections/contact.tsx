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
    <section id="contact" className="relative min-h-[100dvh] py-10 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title h2={t.contact.title} h3={t.contact.subtitle} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            className="relative group h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/8 to-pink-600/8 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <EmailForm />
          </motion.div>

          <motion.div
            className="space-y-6 h-full flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 flex flex-col justify-between space-y-6">
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
                    <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 group-hover:border-purple-500/50 transition-all duration-500 h-full flex items-center">
                      <div className="flex items-center gap-4 w-full">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-100 group-hover:text-purple-300 transition-colors">
                            {contact.label}
                          </h4>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{contact.value}</p>
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
