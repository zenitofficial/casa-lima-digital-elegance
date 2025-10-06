import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBistro from "@/assets/hero-bistro.jpg";
import dish1 from "@/assets/dish-1.jpg";
import drink1 from "@/assets/drink-1.jpg";
import dessert1 from "@/assets/dessert-1.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[85vh] sm:h-screen flex items-center justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBistro})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
            }}
          />
        </div>

        <div className="relative z-10 text-left px-6 sm:px-10 max-w-lg animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-background mb-4 leading-tight">
            The Casa Lima
          </h1>
          <p className="text-lg sm:text-xl text-gold-light mb-6 font-light tracking-wide">
            Uma experiência gastronômica única em São José dos Pinhais
          </p>
          <Link to="/cardapio">
            <Button
              variant="elegant"
              size="lg"
              className="text-sm sm:text-base rounded-xl w-full sm:w-auto"
            >
              Explore Nosso Cardápio
            </Button>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 sm:py-32 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-5xl font-playfair font-bold mb-12 text-center text-primary">
            Exclusividade & Sofisticação
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[ // Para simplificar, lista os 3 cards
              {
                img: dish1,
                title: "Culinária Refinada",
                desc: "Pratos elaborados com ingredientes selecionados e técnicas que elevam cada sabor",
              },
              {
                img: drink1,
                title: "Bebidas Premium",
                desc: "Carta de vinhos selecionados e coquetéis autorais que complementam sua experiência",
              },
              {
                img: dessert1,
                title: "Finalização Perfeita",
                desc: "Sobremesas que são verdadeiras obras de arte, criadas para encantar",
              },
            ].map((item, i) => (
              <div key={i} className="group text-center sm:text-left">
                <div className="overflow-hidden rounded-md mb-6 aspect-square">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-playfair font-semibold mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Espaço de Trabalho */}
      <section className="py-20 sm:py-32 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-5xl font-playfair font-bold mb-6 text-primary">
            Seu Escritório Refinado
          </h2>
          <div className="h-[1px] w-20 sm:w-24 bg-gold mx-auto mb-8 sm:mb-12" />
          <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-6">
            Trabalhar remotamente não precisa ser solitário ou sem inspiração.
            Transforme sua produtividade em nosso ambiente sofisticado e acolhedor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { title: "WiFi Premium", desc: "Alta velocidade" },
              { title: "Café Ilimitado", desc: "Drinks especiais" },
              { title: "Ambiente Único", desc: "Sofisticação & conforto" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-gold/20 rounded-md"
              >
                <p className="text-xl sm:text-2xl font-playfair text-gold mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="elegant"
                size="lg"
                className="text-sm sm:text-base w-full"
              >
                Reserve Seu Espaço
              </Button>
            </a>
            <Link to="/cardapio" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="text-sm sm:text-base w-full border-gold hover:bg-gold/10"
              >
                Ver Cardápio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Reserve */}
      <section className="py-20 sm:py-32 px-4 bg-primary text-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-playfair font-bold mb-4 sm:mb-6">
            Reserve Sua Mesa
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-gold-light">
            Viva uma experiência gastronômica que não tem igual em São José dos Pinhais
          </p>
          <Link to="/cardapio">
            <Button variant="elegant" size="lg" className="text-sm sm:text-base">
              Ver Cardápio Completo
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 px-4 bg-secondary text-background border-t border-gold/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Esquerda */}
          <div className="text-center md:text-left">
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

          {/* Direita */}
          <div className="text-center md:text-right text-background/80 text-sm sm:text-base">
            <p className="mb-2">
              <span className="text-gold font-semibold">Endereço:</span> Rua das Flores, 123 - Centro
            </p>
            <p className="mb-4">
              <span className="text-gold font-semibold">Horário:</span> Seg a Dom — 11h às 23h
            </p>

            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="hover:text-gold transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
