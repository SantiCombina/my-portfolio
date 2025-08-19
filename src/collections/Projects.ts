import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'nameEN',
    defaultColumns: ['nameEN', 'order', 'deploy', 'updatedAt'],
    listSearchableFields: ['nameEN', 'nameES'],
    pagination: {
      defaultLimit: 50,
    },
  },
  defaultSort: 'order',
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
      type: 'relationship',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Image representing the project',
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
};
