import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-playfair font-bold text-gold">
          The Casa Lima
        </Link>
        
        <div className="flex gap-8">
          <Link
            to="/"
            className={cn(
              "elegant-underline text-sm tracking-wide transition-colors",
              location.pathname === "/" ? "text-gold" : "text-foreground hover:text-gold"
            )}
          >
            Início
          </Link>
          <Link
            to="/nossa-historia"
            className={cn(
              "elegant-underline text-sm tracking-wide transition-colors",
              location.pathname === "/nossa-historia" ? "text-gold" : "text-foreground hover:text-gold"
            )}
          >
            Nossa História
          </Link>
          <Link
            to="/cardapio"
            className={cn(
              "elegant-underline text-sm tracking-wide transition-colors",
              location.pathname === "/cardapio" ? "text-gold" : "text-foreground hover:text-gold"
            )}
          >
            Cardápio
          </Link>
        </div>
      </div>
    </nav>
  );
};
