export const translations = {
  en: {
    navbar_logo: 'Developer',
    navbar_sections: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer',
      description:
        'I build software products that combine engineering technical rigor with attention to design and user experience.',
      resume: 'Resume',
    },
    about: {
      overline: 'About me',
      title: 'Built different',
      description1:
        "I'm a software developer based in Argentina with a strong focus on frontend. I care about craft, execution, and shipping products that actually work.",
      description2:
        "I've led projects end-to-end, from architecture decisions to client conversations, and I bring that same ownership mentality to every line of code I write.",
      forge: {
        overline: 'Software Studio',
        description:
          'I founded Forge, a boutique software studio of highly skilled developers building tailored products for businesses that want to grow, automate, sell and scale, with a strong focus on security, performance and design.',
      },
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
        send: 'Send message',
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
      about: 'Sobre mí',
      work: 'Trabajo',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Desarrollador Full Stack',
      description:
        'Construyo productos de software que combinan el rigor técnico de ingeniería con atención al diseño y experiencia del usuario.',
      resume: 'Currículum',
    },
    about: {
      overline: 'Sobre mí',
      title: 'Construido diferente',
      description1:
        'Soy desarrollador de software radicado en Argentina con foco en frontend. Me importa hacer las cosas bien, la ejecución y entregar productos que realmente funcionen.',
      description2:
        'He liderado proyectos de punta a punta, desde decisiones de arquitectura hasta conversaciones con clientes, y traigo esa misma mentalidad a cada línea de código que escribo.',
      forge: {
        overline: 'Software Studio',
        description:
          'Fundé Forge, un estudio de software boutique compuesto por profesionales altamente cualificados que construyen productos digitales a medida para negocios que quieren crecer, automatizar, vender y escalar, con foco en seguridad, rendimiento y diseño.',
      },
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
        send: 'Enviar mensaje',
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
