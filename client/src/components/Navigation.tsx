import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "О нас" },
    { href: "#menu", label: "Меню" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold tracking-wider text-primary">
          GUEST<span className="text-foreground"> LAUNGE BAR</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <BookingDialog>
            <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide rounded-sm hover:bg-primary/90 transition-colors">
              Забронировать
            </button>
          </BookingDialog>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-2xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium py-2 hover:text-primary text-center"
            >
              {link.label}
            </a>
          ))}
          <BookingDialog>
            <button className="w-full py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-sm">
              Забронировать
            </button>
          </BookingDialog>
        </div>
      )}
    </nav>
  );
}
