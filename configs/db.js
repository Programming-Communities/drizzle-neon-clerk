import { drizzle } from 'drizzle-orm/neon-http';

export const db = drizzle(process.env.NEXT_PUBLIC_DATABSE_CONNECTION_STRING);
