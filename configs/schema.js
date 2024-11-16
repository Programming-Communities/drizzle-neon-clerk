import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable('users', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(), // Adjust length as needed
  email: varchar({ length: 255 }).notNull(), // Adjust length as needed
  isMember: boolean().default(false)
});
