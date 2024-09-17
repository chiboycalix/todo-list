import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  name: text("title").notNull(),
  description: text("description"),
  isCompleted: boolean("false").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type FetchTodos = typeof todos.$inferSelect;
