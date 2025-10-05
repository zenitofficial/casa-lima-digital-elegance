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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBistro})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-background mb-6">
            The Casa Lima
          </h1>
          <p className="text-xl md:text-2xl text-gold-light mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Uma experiência gastronômica única em São José dos Pinhais
          </p>
          <Link to="/cardapio">
            <Button variant="elegant" size="lg" className="text-base">
              Explore Nosso Cardápio
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-playfair font-bold mb-8 text-primary animate-slide-up">
            Nossa História
          </h2>
          <div className="h-[1px] w-24 bg-gold mx-auto mb-12" />
          <p className="text-lg leading-relaxed text-foreground/80 mb-6">
            O que começou como um food truck apaixonado evoluiu para uma experiência gastronômica 
            sofisticada que redefine o conceito de bistro em São José dos Pinhais.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80">
            Há 6 meses, abrimos as portas da nossa loja física, trazendo uma proposta única: 
            combinar a autenticidade da nossa origem com a elegância de um ambiente requintado. 
            Cada prato é uma celebração de sabores cuidadosamente elaborados para momentos inesquecíveis.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-playfair font-bold mb-16 text-center text-primary">
            Exclusividade & Sofisticação
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="overflow-hidden rounded-sm mb-6 aspect-square">
                <img 
                  src={dish1} 
                  alt="Prato sofisticado" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-3 text-primary">
                Culinária Refinada
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Pratos elaborados com ingredientes selecionados e técnicas que elevam cada sabor
              </p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-sm mb-6 aspect-square">
                <img 
                  src={drink1} 
                  alt="Coquetel elegante" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-3 text-primary">
                Bebidas Premium
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Carta de vinhos selecionados e coquetéis autorais que complementam sua experiência
              </p>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-sm mb-6 aspect-square">
                <img 
                  src={dessert1} 
                  alt="Sobremesa elegante" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-3 text-primary">
                Finalização Perfeita
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Sobremesas que são verdadeiras obras de arte, criadas para encantar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-primary text-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-playfair font-bold mb-6">
            Reserve Sua Mesa
          </h2>
          <p className="text-xl mb-10 text-gold-light">
            Viva uma experiência gastronômica que não tem igual em São José dos Pinhais
          </p>
          <Link to="/cardapio">
            <Button variant="elegant" size="lg" className="text-base">
              Ver Cardápio Completo
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary text-background border-t border-gold/20">
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

export default Index;
