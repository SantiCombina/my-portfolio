'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

import { Button, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea } from '@/components/ui';
import { useLanguage } from '@/lib/contexts/language-context';

export function EmailForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

  const emailSchema = z.object({
    name: z.string().min(1, t.contact.form.validation.name_required),
    email: z.string().min(1, t.contact.form.validation.email_required).email(t.contact.form.validation.email_invalid),
    message: z.string().min(1, t.contact.form.validation.message_required),
  });

  type EmailValues = z.infer<typeof emailSchema>;

  const methods = useForm<EmailValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onTouched',
    reValidateMode: 'onBlur',
  });

  useEffect(() => {
    const triggers: Array<'name' | 'email' | 'message'> = [];
    if (methods.getFieldState('name').invalid) triggers.push('name');
    if (methods.getFieldState('email').invalid) triggers.push('email');
    if (methods.getFieldState('message').invalid) triggers.push('message');
    if (triggers.length > 0) methods.trigger(triggers);
  }, [language]);

  const onSubmit = async (data: EmailValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xrblzgrn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        methods.reset({
          name: '',
          email: '',
          message: '',
        });
        toast.success(t.contact.form.success);
      } else {
        toast.error(t.contact.form.error);
      }
    } catch {
      toast.error(t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="relative bg-white/[0.03] backdrop-blur-xs border border-white/10 hover:border-pink-400/50 rounded-2xl space-y-3 p-5 transition-colors duration-300 h-full flex flex-col"
      >
        <h3 className="text-base font-semibold mb-3 text-gray-100">{t.contact.form.title}</h3>

        <FormField
          control={methods.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300">{t.contact.form.name}</FormLabel>
              <FormControl>
                <Input placeholder={t.contact.form.placeholder.name} {...field} />
              </FormControl>
              <div className="min-h-[1.25rem] -mt-1">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300">{t.contact.form.email}</FormLabel>
              <FormControl>
                <Input placeholder={t.contact.form.placeholder.email} type="email" {...field} />
              </FormControl>
              <div className="min-h-[1.25rem] -mt-1">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300">{t.contact.form.message}</FormLabel>
              <FormControl>
                <Textarea rows={5} placeholder={t.contact.form.placeholder.message} {...field} />
              </FormControl>
              <div className="min-h-[1.25rem] -mt-1">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
          size="sm"
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
      </form>
    </FormProvider>
  );
}
