import path from 'path';
import { fileURLToPath } from 'url';

import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { uploadthingStorage } from '@payloadcms/storage-uploadthing';
import { en } from '@payloadcms/translations/languages/en';
import { es } from '@payloadcms/translations/languages/es';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Media } from './collections/Media';
import { Projects } from './collections/Projects';
import { Skills } from './collections/Skills';
import { Users } from './collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Skills, Projects],
  i18n: {
    fallbackLanguage: 'es',
    supportedLanguages: { es, en },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
  ],
});
