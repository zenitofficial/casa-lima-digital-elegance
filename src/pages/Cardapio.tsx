import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Import menu images
import menuBruschetta from "@/assets/menu-bruschetta.jpg";
import menuCarpaccio from "@/assets/menu-carpaccio.jpg";
import menuCheese from "@/assets/menu-cheese.jpg";
import menuRisotto from "@/assets/menu-risotto.jpg";
import menuFilet from "@/assets/menu-filet.jpg";
import menuSalmon from "@/assets/menu-salmon.jpg";
import menuPasta from "@/assets/menu-pasta.jpg";
import menuPetitgateau from "@/assets/menu-petitgateau.jpg";
import menuTiramisu from "@/assets/menu-tiramisu.jpg";
import menuCremebrulee from "@/assets/menu-cremebrulee.jpg";
import menuWine from "@/assets/menu-wine.jpg";
import menuEspumante from "@/assets/menu-espumante.jpg";
import menuCocktail from "@/assets/menu-cocktail.jpg";
import menuJuice from "@/assets/menu-juice.jpg";

type Category = "todas" | "entradas" | "principais" | "sobremesas" | "bebidas";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Exclude<Category, "todas">;
  image: string;
}

const menuItems: MenuItem[] = [
  // Entradas
  {
    id: 1,
    name: "Bruschetta de Tomate Confitado",
    description: "Pão artesanal com tomates confitados, burrata fresca e manjericão",
    price: "R$ 38,00",
    category: "entradas",
    image: menuBruschetta,
  },
  {
    id: 2,
    name: "Carpaccio de Salmão",
    description: "Salmão fresco em finas fatias, alcaparras, molho de limão siciliano",
    price: "R$ 52,00",
    category: "entradas",
    image: menuCarpaccio,
  },
  {
    id: 3,
    name: "Tábua de Queijos Especiais",
    description: "Seleção de queijos artesanais, geleias e pães",
    price: "R$ 65,00",
    category: "entradas",
    image: menuCheese,
  },
  
  // Pratos Principais
  {
    id: 4,
    name: "Risoto de Funghi Porcini",
    description: "Arroz arbóreo com cogumelos porcini, parmesão reggiano e trufa negra",
    price: "R$ 78,00",
    category: "principais",
    image: menuRisotto,
  },
  {
    id: 5,
    name: "Filé Mignon ao Molho Madeira",
    description: "Filé mignon grelhado, molho madeira, purê de batata trufado",
    price: "R$ 92,00",
    category: "principais",
    image: menuFilet,
  },
  {
    id: 6,
    name: "Salmão Grelhado",
    description: "Salmão ao molho de maracujá, legumes salteados e quinoa",
    price: "R$ 85,00",
    category: "principais",
    image: menuSalmon,
  },
  {
    id: 7,
    name: "Pappardelle ao Ragu",
    description: "Massa fresca com ragu de cordeiro ao vinho tinto",
    price: "R$ 72,00",
    category: "principais",
    image: menuPasta,
  },
  
  // Sobremesas
  {
    id: 8,
    name: "Petit Gâteau",
    description: "Bolo de chocolate com recheio cremoso, sorvete de baunilha",
    price: "R$ 28,00",
    category: "sobremesas",
    image: menuPetitgateau,
  },
  {
    id: 9,
    name: "Tiramisù Tradicional",
    description: "Clássico italiano com café expresso e mascarpone",
    price: "R$ 32,00",
    category: "sobremesas",
    image: menuTiramisu,
  },
  {
    id: 10,
    name: "Crème Brûlée",
    description: "Creme francês com açúcar caramelizado e frutas vermelhas",
    price: "R$ 30,00",
    category: "sobremesas",
    image: menuCremebrulee,
  },
  
  // Bebidas
  {
    id: 11,
    name: "Vinho Tinto Casa Lima",
    description: "Seleção especial de vinhos tintos da nossa adega",
    price: "R$ 120,00",
    category: "bebidas",
    image: menuWine,
  },
  {
    id: 12,
    name: "Espumante Brut",
    description: "Espumante italiano seco, ideal para aperitivos",
    price: "R$ 95,00",
    category: "bebidas",
    image: menuEspumante,
  },
  {
    id: 13,
    name: "Coquetel Signature",
    description: "Drink autoral da casa com destilados premium",
    price: "R$ 38,00",
    category: "bebidas",
    image: menuCocktail,
  },
  {
    id: 14,
    name: "Suco Natural Premium",
    description: "Sucos de frutas frescas e combinações exclusivas",
    price: "R$ 18,00",
    category: "bebidas",
    image: menuJuice,
  },
];

const categories = [
  { id: "todas", label: "Todas" },
  { id: "entradas", label: "Entradas" },
  { id: "principais", label: "Pratos Principais" },
  { id: "sobremesas", label: "Sobremesas" },
  { id: "bebidas", label: "Bebidas" },
];

const Cardapio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("todas");

  const filteredItems = selectedCategory === "todas" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-secondary/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-6xl font-playfair font-bold mb-6 text-primary animate-fade-in">
            Nosso Cardápio
          </h1>
          <div className="h-[1px] w-24 bg-gold mx-auto mb-8" />
          <p className="text-lg text-foreground/70">
            Cada prato é uma experiência cuidadosamente elaborada para o seu prazer
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "elegant" : "outline"}
                onClick={() => setSelectedCategory(category.id as Category)}
                className={cn(
                  "min-w-[140px] transition-all duration-400 rounded-2xl",
                  selectedCategory === category.id && "ring-2 ring-gold"
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-gold transition-all duration-900 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="overflow-hidden aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-playfair font-semibold text-primary group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="text-lg font-playfair text-gold ml-4 flex-shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-foreground/50">
                Nenhum item encontrado nesta categoria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary text-background border-t border-gold/20 mt-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4 text-gold">
            The Casa Lima
          </h3>
          <p className="text-background/70 mb-2">
            São José dos Pinhais, Paraná
          </p>
          <p className="text-background/70">
            Onde cada refeição é uma celebração
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Cardapio;
