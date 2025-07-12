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
      resumeUrl:
        'https://o365sanfranciscoutneduar-my.sharepoint.com/:b:/g/personal/scombina_facultad_sanfrancisco_utn_edu_ar/ERI0MjlrTgJGk15jsbA5hW8BPi_rsVBCK4ZFyfA1p_2_jg?e=YkaArB',
    },
    skills: {
      title: 'My skills',
      subtitle: 'Knowledge',
    },
    projects: {
      title: 'My work',
      subtitle: 'Projects',
      view_demo: 'View Demo',
    },
    contact: {
      title: 'Get in touch with me',
      subtitle: 'Contact',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        placeholder: {
          name: 'Your name',
          email: 'your.email@example.com',
          message: 'Tell me about your project...',
        },
      },
    },
    footer: {
      made_with: 'Made with',
      using: 'using Next.js & PayloadCMS',
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
      resumeUrl:
        'https://o365sanfranciscoutneduar-my.sharepoint.com/:b:/g/personal/scombina_facultad_sanfrancisco_utn_edu_ar/EW8FPVcfeu5Cq4iePIy9OkgBkwDEmV_3JGFun1SIDznnTw?e=wnELm8',
    },
    skills: {
      title: 'Mis habilidades',
      subtitle: 'Conocimientos',
    },
    projects: {
      title: 'Mi trabajo',
      subtitle: 'Proyectos',
      view_demo: 'Ver Demo',
    },
    contact: {
      title: 'Ponte en contacto conmigo',
      subtitle: 'Contacto',
      email: 'Correo',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Ubicación',
      form: {
        name: 'Nombre',
        email: 'Correo',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado exitosamente!',
        placeholder: {
          name: 'Tu nombre',
          email: 'tu.email@ejemplo.com',
          message: 'Cuéntame sobre tu proyecto...',
        },
      },
    },
    footer: {
      made_with: 'Hecho con',
      using: 'usando Next.js y PayloadCMS',
      rights: 'Todos los derechos reservados.',
      back_to_top: 'Volver arriba',
    },
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
