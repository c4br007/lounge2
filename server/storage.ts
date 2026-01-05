import { db } from "./db";
import {
  reviews,
  type InsertReview,
  type Review
} from "@shared/schema";

export interface IStorage {
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
}

export class DatabaseStorage implements IStorage {
  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews).orderBy(reviews.id);
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const [review] = await db.insert(reviews).values(insertReview).returning();
    return review;
  }
}

export const storage = new DatabaseStorage();
