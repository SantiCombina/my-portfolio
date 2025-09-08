import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'curriculum',
      type: 'text',
      label: 'Curriculum (Español)',
      admin: {
        description: 'URL del CV en español',
        placeholder: 'https://example.com/cv-es.pdf',
      },
    },
    {
      name: 'resume',
      type: 'text',
      label: 'Resume (English)',
      admin: {
        description: 'URL del CV en inglés',
        placeholder: 'https://example.com/resume-en.pdf',
      },
    },
  ],
};
