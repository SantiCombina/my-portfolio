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
        'I build digital products that combine technical precision with a sharp eye for design — frontend-first, full-stack when it matters.',
      resume: 'Resume',
    },
    about: {
      overline: 'About me',
      title: 'Built different',
      description:
        "I'm a software developer based in Argentina with a strong focus on frontend. I care about craft, execution, and shipping products that actually work. I've led projects end-to-end — from architecture decisions to client conversations — and I bring that same ownership mentality to every line of code I write.",
      traits: [
        {
          title: 'Frontend-first',
          description: 'I obsess over interfaces — performance, accessibility, and every pixel that matters.',
        },
        {
          title: 'Execution',
          description: 'From idea to shipped product. I own the full cycle and deliver.',
        },
        {
          title: 'Product mindset',
          description: 'I think about users and business goals, not just code.',
        },
      ],
      forge: {
        overline: 'Agency',
        description1:
          "I'm currently founding Forge, a software agency focused on crafting high-quality digital products with clarity, performance and long-term scalability.",
        description2: 'The goal is simple: build software that feels intentional, strategic and built to last.',
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
        'Construyo productos digitales que combinan precisión técnica con atención al diseño — frontend primero, full-stack cuando importa.',
      resume: 'Currículum',
    },
    about: {
      overline: 'Sobre mí',
      title: 'Construido diferente',
      description:
        'Soy desarrollador de software radicado en Argentina con foco en frontend. Me importa el craft, la ejecución y entregar productos que realmente funcionen. He liderado proyectos de punta a punta — desde decisiones de arquitectura hasta conversaciones con clientes — y traigo esa misma mentalidad a cada línea de código que escribo.',
      traits: [
        {
          title: 'Frontend primero',
          description: 'Me obsesionan las interfaces — rendimiento, accesibilidad y cada píxel que importa.',
        },
        {
          title: 'Ejecución',
          description: 'De la idea al producto entregado. Me hago cargo del ciclo completo.',
        },
        {
          title: 'Mentalidad de producto',
          description: 'Pienso en usuarios y objetivos de negocio, no solo en código.',
        },
      ],
      forge: {
        overline: 'Agencia',
        description1:
          'Actualmente estoy fundando Forge, una agencia de software enfocada en crear productos digitales de alta calidad con claridad, performance y escalabilidad a largo plazo.',
        description2:
          'El objetivo es simple: construir software que se sienta intencional, estratégico y hecho para durar.',
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
