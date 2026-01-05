import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  authorName: text("author_name").notNull(),
  rating: integer("rating").notNull().default(5),
  content: text("content").notNull(),
  date: text("date").notNull(), // Storing as text to match source format, or could parse to date
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertReviewSchema = createInsertSchema(reviews).omit({ 
  id: true, 
  createdAt: true 
});

export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;
