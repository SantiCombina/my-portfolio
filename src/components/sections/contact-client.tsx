'use client';

import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Title } from '@/components/ui/title';
import { useLanguage } from '@/contexts/language-context';

export function ContactClient() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    // You can integrate with a form service like Formspree, EmailJS, etc.
    alert(t.contact.form.success);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
    <section id="contact" className="relative min-h-[100vh] py-10 overflow-hidden flex items-center justify-center">
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
            <form
              onSubmit={handleSubmit}
              className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-100">
                {language === 'en' ? 'Send me a message' : 'Envíame un mensaje'}
              </h3>

              <div className="space-y-6 flex-1">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.name}</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
                    placeholder={t.contact.form.placeholder.name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.email}</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus-visible:ring-purple-500 focus-visible:border-purple-500"
                    placeholder={t.contact.form.placeholder.email}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.message}</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-800/50 border-gray-600 text-gray-100 placeholder-gray-400 focus-visible:ring-purple-500 focus-visible:border-purple-500 resize-none"
                    placeholder={t.contact.form.placeholder.message}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      {t.contact.form.send}
                    </>
                  )}
                </Button>
              </div>
            </form>
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
                    whileHover={{ scale: contact.id === 'location' ? 1 : 1.02 }}
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
