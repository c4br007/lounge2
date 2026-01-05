import { Navigation } from "@/components/Navigation";
import { ReviewCard } from "@/components/ReviewCard";
import { useReviews } from "@/hooks/use-reviews";
import { ReviewFormDialog } from "@/components/ReviewFormDialog";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, Gamepad2, Coffee, Flame, Wifi, Car, GlassWater, ChevronLeft, ChevronRight, X as CloseIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import menuImg from "@assets/image_1767001671586.png";
import foodMenuImg from "@assets/image_1767002515206.png";
import interiorImg from "@assets/image_1767003763057.png";

export default function Home() {
  const { data: reviews, isLoading } = useReviews();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedMenuIdx, setSelectedMenuIdx] = useState<number | null>(null);

  const menuImages = [menuImg, foodMenuImg];

  const handlePrevMenu = () => {
    if (selectedMenuIdx === null) return;
    setSelectedMenuIdx((selectedMenuIdx - 1 + menuImages.length) % menuImages.length);
  };

  const handleNextMenu = () => {
    if (selectedMenuIdx === null) return;
    setSelectedMenuIdx((selectedMenuIdx + 1) % menuImages.length);
  };

  const BookingDialog = ({ children }: { children: React.ReactNode }) => (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center">Бронирование стола</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-6 py-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Наш номер для связи:</p>
            <a href="tel:+79620005039" className="text-3xl font-bold text-primary hover:opacity-80 transition-opacity">
              +7 (962) 000-50-39
            </a>
          </div>
          <Button 
            className="w-full h-14 bg-green-600 hover:bg-green-700 text-white gap-3 text-lg font-bold uppercase tracking-wider"
            onClick={() => window.open("https://wa.me/79620005039", "_blank")}
          >
            <MessageCircle className="w-6 h-6" />
            Написать в WhatsApp
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Нажмите на кнопку выше, чтобы забронировать стол прямо сейчас через мессенджер.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const features = [
    {
      icon: <Flame className="w-8 h-8 text-primary" />,
      title: "Премиум Кальяны",
      description: "Огромный выбор табаков, от легких до самых крепких. Мастера своего дела."
    },
    {
      icon: <GlassWater className="w-8 h-8 text-primary" />,
      title: "Авторский Бар",
      description: "Уникальные коктейли, домашние лимонады и элитные сорта чая."
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      title: "Развлечения",
      description: "PlayStation 5, широкий выбор настольных игр для любой компании."
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Комфорт",
      description: "Бесплатная парковка, быстрый Wi-Fi и уютные зоны отдыха."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden luxury-gradient">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background z-10" />
          {/* hookahs dark atmosphere smoke */}
          <img 
            src={interiorImg} 
            alt="Guest Lounge Bar Background" 
            className="w-full h-full object-cover opacity-40 animate-pulse-slow brightness-50 contrast-125"
          />
        </div>

        <div className="container relative z-20 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 border border-primary/50 rounded-full text-primary text-sm font-semibold tracking-widest uppercase mb-6 bg-black/30 backdrop-blur-sm">
              Пятигорск
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              <span className="text-primary">GUEST</span> LOUNGE <span className="text-primary">BAR</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Искусство отдыха в каждой детали. Дымные кальяны, авторские коктейли и атмосфера, в которую хочется возвращаться.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingDialog>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold px-8 h-14 uppercase tracking-wider"
                >
                  Забронировать стол
                </Button>
              </BookingDialog>
              <Button 
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 hover:text-white text-lg font-medium px-8 h-14 uppercase tracking-wider bg-transparent"
              >
                Смотреть меню
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 smoke-bg opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/40 border border-white/5 p-8 rounded-2xl hover:border-primary/40 hover:bg-secondary/60 transition-all duration-300 group"
              >
                <div className="mb-6 p-3 bg-background/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-white">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-24 bg-secondary/10 relative overflow-hidden luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Премиальная <br/> <span className="text-primary">Атмосфера</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                GUEST LOUNGE BAR — это не просто место для отдыха, это пространство с уникальной энергетикой. 
                Продуманное до мелочей освещение, стильный индустриальный дизайн и комфортные зоны 
                создают идеальные условия для вашего вечера.
              </p>
              <BookingDialog>
                <Button variant="outline" className="uppercase tracking-wider font-bold border-primary/20 hover:border-primary/50">
                  Забронировать сейчас
                </Button>
              </BookingDialog>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={interiorImg} 
                  alt="Lounge Interior" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 brightness-[1.1] contrast-[1.1] saturate-[1.1]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Teaser / Atmosphere */}
      <section id="menu" className="py-24 bg-background relative overflow-hidden smoke-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {menuImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedMenuIdx(idx)}
                    className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white block hover:ring-2 hover:ring-primary/50 transition-all text-left"
                  >
                    <img 
                      src={img} 
                      alt={`Menu ${idx + 1}`} 
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                    />
                  </button>
                ))}
              </div>

              <Dialog open={selectedMenuIdx !== null} onOpenChange={(open) => !open && setSelectedMenuIdx(null)}>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handlePrevMenu(); }}
                      className="absolute left-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    >
                      <ChevronLeft size={32} />
                    </button>
                    
                    <img 
                      src={selectedMenuIdx !== null ? menuImages[selectedMenuIdx] : ""} 
                      alt="Menu Full" 
                      className="max-w-full max-h-[90vh] object-contain rounded-lg" 
                    />

                    <button 
                      onClick={(e) => { e.stopPropagation(); handleNextMenu(); }}
                      className="absolute right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    >
                      <ChevronRight size={32} />
                    </button>

                    <button 
                      onClick={() => setSelectedMenuIdx(null)}
                      className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    >
                      <CloseIcon size={24} />
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  Вкус, который <br/> <span className="text-primary">Вдохновляет</span>
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Мы создали меню, которое идеально дополняет дымный отдых. 
                  Попробуйте наши фирменные чаи, освежающие лимонады из натуральных фруктов 
                  и коктейли, разработанные нашими миксологами специально для вас.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Coffee className="text-primary" />
                  <span className="font-medium">Чайная карта</span>
                </div>
                <div className="flex items-center gap-3">
                  <GlassWater className="text-primary" />
                  <span className="font-medium">Авторские лимонады</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="text-primary" />
                  <span className="font-medium">Бесплатный Wi-Fi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad2 className="text-primary" />
                  <span className="font-medium">PS5 & Настолки</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 relative bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Что говорят <span className="text-primary">Гости</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Мы ценим каждое мнение и стремимся стать лучше для вас.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="overflow-hidden p-4" ref={emblaRef}>
                <div className="flex -ml-4">
                  {reviews && reviews.length > 0 ? (
                    reviews.map((review) => (
                      <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                        <ReviewCard review={review} className="h-full" />
                      </div>
                    ))
                  ) : (
                    <div className="text-center w-full py-10 text-muted-foreground">
                      Пока нет отзывов. Станьте первым!
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex justify-center mt-12 gap-6">
               <ReviewFormDialog />
               <div className="flex gap-2">
                 <Button onClick={scrollPrev} variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/10">
                   ←
                 </Button>
                 <Button onClick={scrollNext} variant="outline" size="icon" className="rounded-full border-white/10 hover:bg-white/10">
                   →
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contacts" className="py-24 bg-secondary/30 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold">
                Ждем вас в <span className="text-primary">Гости</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Идеальное место для встречи с друзьями, деловых переговоров или расслабленного вечера в одиночестве.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Пятигорск, пр. Калинина 355</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Время работы</h4>
                    <p className="text-muted-foreground">Ежедневно: 14:00 – 02:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Бронь столов</h4>
                    <a href="tel:+79620005039" className="text-xl font-bold hover:text-primary transition-colors">
                      +7 (962) 000-50-39
                    </a>
                    <div className="flex gap-3 mt-3">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-2 border-green-600 text-green-500 hover:bg-green-600/10 hover:text-green-400"
                        onClick={() => window.open("https://wa.me/79620005039", "_blank")}
                      >
                        <MessageCircle size={16} /> WhatsApp
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="gap-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                        onClick={() => window.open("https://t.me/+79620005039", "_blank")}
                      >
                        <MessageCircle size={16} /> Telegram
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] w-full bg-secondary rounded-2xl overflow-hidden relative border border-white/10">
              {/* Yandex Maps Iframe with marker for address: просп. Калинина, 355 */}
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=43.080183%2C44.020358&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjI5MTM5ORJU0KDQvtGB0YHQuNGPLCDQodGC0LDQstGA0L7Qv9C-0LvRjNGB0LrQuNC5INC60YDQsNC5LCDQn9GP0YLQuNCz0L7RgNGB0LssINC_0YDQvtGB0L_QtdC60YIg0JrQsNC70LjQvdC40L3QsCwgMzU1IgoNc1V1H0IdYmVkQg%3D%3D&z=17" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(1)' }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Yandex Map"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-secondary rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">© {new Date().getFullYear()} Guest Lounge Bar Пятигорск. Все права защищены.</p>
          <p className="opacity-50 text-xs">Разработано с любовью к дыму.</p>
        </div>
      </footer>
    </div>
  );
}
