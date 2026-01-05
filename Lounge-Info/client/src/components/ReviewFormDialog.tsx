import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCreateReview } from "@/hooks/use-reviews";
import { insertReviewSchema, type InsertReview } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Star, MessageSquarePlus } from "lucide-react";

export function ReviewFormDialog() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const createReview = useCreateReview();
  
  const form = useForm<InsertReview>({
    resolver: zodResolver(insertReviewSchema),
    defaultValues: {
      authorName: "",
      content: "",
      rating: 5,
      date: new Date().toLocaleDateString('ru-RU'),
    },
  });

  const onSubmit = (data: InsertReview) => {
    createReview.mutate(data, {
      onSuccess: () => {
        setOpen(false);
        form.reset();
        toast({
          title: "Спасибо за отзыв!",
          description: "Ваш отзыв успешно добавлен.",
        });
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Ошибка",
          description: error.message,
        });
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wider uppercase">
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          Оставить отзыв
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-secondary border-border text-foreground">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">Ваш Отзыв</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="authorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ваше Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Представьтесь, пожалуйста" {...field} className="bg-background border-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Оценка</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => field.onChange(star)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            size={28}
                            className={star <= field.value ? "fill-primary text-primary" : "fill-transparent text-muted-foreground"}
                          />
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Отзыв</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Расскажите о ваших впечатлениях..." 
                      className="resize-none bg-background border-input min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold" disabled={createReview.isPending}>
              {createReview.isPending ? "Отправка..." : "Отправить Отзыв"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
