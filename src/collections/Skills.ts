import type { CollectionConfig } from 'payload';

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'image', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Name of the skill (e.g., HTML, CSS, JavaScript)',
      },
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Image representing the skill',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Order in which the skill should appear',
        position: 'sidebar',
      },
    },
  ],
  defaultSort: 'order',
};
