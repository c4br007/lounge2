import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  app.post(api.reviews.create.path, async (req, res) => {
    try {
      const input = api.reviews.create.input.parse(req.body);
      const review = await storage.createReview(input);
      res.status(201).json(review);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getReviews();
  if (existing.length > 0) return;

  const seedReviews = [
    { authorName: "Aznavur Pogosyan", date: "14 августа 2024", content: "Отличная атмосфера, кальяные мастера - толковые. Обширный выбор по табакам, и отличные лимонады. Рекомендую", rating: 5 },
    { authorName: "Игорь Гаспарян", date: "7 ноября 2024", content: "Адекватные цены, адекватный контингент, адекватное обслуживание, посидели попили, поели, поиграли в настольные игры, всем советую ❗️", rating: 5 },
    { authorName: "Александр", date: "15 января 2024", content: "Хорошие кальяны, уютная атмосфера, отличный вежливый персонал. Широкий ассортимент табаков. Все на уровне.", rating: 5 },
    { authorName: "Рома Казарян", date: "7 ноября 2024", content: "Были сегодня в этом заведение, приятная атмосфера, крутое обслуживание, классные кальяны", rating: 5 },
    { authorName: "Даниил Гер1", date: "14 августа 2024", content: "Отличное место! Уютно и спокойно, цены приемлемые и вкусные кальяны", rating: 5 },
    { authorName: "савва танов", date: "20 сентября 2022", content: "Случайно попали в это место, и к нашему удивлению всё было на хорошем уровне. Приветливый персонал, хороший подход, качественно забитые кальяны. Остались довольны! Советую", rating: 5 },
    { authorName: "Артем А.", date: "12 сентября 2024", content: "Все понравилось, заведение высокого уровня", rating: 5 },
    { authorName: "Allccee", date: "18 ноября 2024", content: "Лучшая кальянная в городе!", rating: 5 },
    { authorName: "Royall G.", date: "20 сентября 2022", content: "Лучшее место в Пятигорске!", rating: 5 }
  ];

  for (const review of seedReviews) {
    await storage.createReview(review);
  }
}
