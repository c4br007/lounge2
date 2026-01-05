import { Star, User } from "lucide-react";
import type { Review } from "@shared/schema";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <div className={cn(
      "bg-secondary/50 backdrop-blur-sm border border-white/5 p-6 rounded-xl flex flex-col h-full hover:border-primary/30 transition-all duration-300",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
            <User size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-foreground leading-none">{review.authorName}</h4>
            <span className="text-xs text-muted-foreground">{review.date}</span>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"}
            />
          ))}
        </div>
      </div>
      <p className="text-muted-foreground text-sm italic leading-relaxed">
        "{review.content}"
      </p>
    </div>
  );
}
