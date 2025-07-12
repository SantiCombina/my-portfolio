import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'nameEN',
    defaultColumns: ['nameEN', 'deploy', 'updatedAt'],
  },
  fields: [
    {
      name: 'nameEN',
      type: 'text',
      required: true,
      admin: {
        description: 'Project name in English (used as title)',
      },
    },
    {
      name: 'nameES',
      type: 'text',
      required: true,
      admin: {
        description: 'Project name in Spanish',
      },
    },
    {
      name: 'descriptionEN',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Project description in English',
      },
    },
    {
      name: 'descriptionES',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Project description in Spanish',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Project screenshot/image',
      },
    },
    {
      name: 'deploy',
      type: 'text',
      required: true,
      admin: {
        description: 'Live demo URL',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Order in which the project should appear',
        position: 'sidebar',
      },
    },
  ],
  defaultSort: 'order',
};
