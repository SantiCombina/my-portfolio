export const translations = {
  en: {
    navbar_logo: 'Developer',
    navbar_sections: {
      home: 'Home',
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      description: 'I develop landing pages, user interfaces and web applications',
      resume: 'Resume',
    },
    skills: {
      title: 'My skills',
      subtitle: 'Knowledge',
    },
    projects: {
      title: 'My work',
      subtitle: 'Projects',
      view_demo: 'View Demo',
      no_projects: 'No projects available at the moment.',
    },
    contact: {
      title: 'Get in touch with me',
      subtitle: 'Contact',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
      form: {
        title: 'Send me a message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
        validation: {
          name_required: 'Name is required',
          email_required: 'Email is required',
          email_invalid: 'Invalid email address',
          message_required: 'Message is required',
        },
        placeholder: {
          name: 'Your name',
          email: 'your.email@example.com',
          message: 'Tell me about your project...',
        },
      },
    },
    footer: {
      role: 'Full Stack Developer',
      made_with: 'Made with',
      rights: 'All rights reserved.',
      back_to_top: 'Back to top',
    },
  },
  es: {
    navbar_logo: 'Desarrollador',
    navbar_sections: {
      home: 'Inicio',
      work: 'Trabajo',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      description: 'Desarrollo landing pages, interfaces de usuario y aplicaciones web',
      resume: 'Currículum',
    },
    skills: {
      title: 'Mis habilidades',
      subtitle: 'Conocimientos',
    },
    projects: {
      title: 'Mi trabajo',
      subtitle: 'Proyectos',
      view_demo: 'Ver Demo',
      no_projects: 'No hay proyectos disponibles en este momento.',
    },
    contact: {
      title: 'Ponte en contacto conmigo',
      subtitle: 'Contacto',
      email: 'Correo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Ubicación',
      form: {
        title: 'Envíame un mensaje',
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado exitosamente!',
        error: 'Error al enviar el mensaje. Intenta nuevamente.',
        validation: {
          name_required: 'El nombre es obligatorio',
          email_required: 'El correo es obligatorio',
          email_invalid: 'El correo no es válido',
          message_required: 'El mensaje es obligatorio',
        },
        placeholder: {
          name: 'Tu nombre',
          email: 'tu.email@ejemplo.com',
          message: 'Cuéntame sobre tu proyecto...',
        },
      },
    },
    footer: {
      role: 'Desarrollador Full Stack',
      made_with: 'Hecho con',
      rights: 'Todos los derechos reservados.',
      back_to_top: 'Volver arriba',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
