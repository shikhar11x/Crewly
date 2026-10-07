import { z } from 'zod';

const schema = z.object({
  apiUrl: z.string().url(),
  appEnv: z.enum(['development', 'staging', 'production']),
});

export const env = schema.parse({
  apiUrl: process.env.EXPO_PUBLIC_API_URL,
  appEnv: process.env.EXPO_PUBLIC_APP_ENV ?? 'development',
});
