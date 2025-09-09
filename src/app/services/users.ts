import { unstable_cache } from 'next/cache';

import { getPayloadClient } from '@/lib/payload';

export const getUser = unstable_cache(
  async () => {
    const payload = await getPayloadClient();

    try {
      const result = await payload.find({
        collection: 'users',
        limit: 1,
        where: {
          // Asumiendo que hay solo un usuario admin/principal
        },
      });

      if (!result.docs || result.docs.length === 0) {
        throw new Error('User not found');
      }

      return result.docs[0];
    } catch (error) {
      console.error('Error fetching user:', error);
      throw new Error('Failed to fetch user data');
    }
  },
  ['user-profile'],
  {
    revalidate: 3600, // 1 hora
    tags: ['user'],
  },
);

export const getUserById = unstable_cache(
  async (id: string) => {
    const payload = await getPayloadClient();

    try {
      const user = await payload.findByID({
        collection: 'users',
        id,
      });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw new Error('Failed to fetch user');
    }
  },
  ['user-by-id'],
  {
    revalidate: 3600,
    tags: ['user'],
  },
);
