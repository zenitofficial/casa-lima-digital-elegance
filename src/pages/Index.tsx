import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBistro from "@/assets/hero-bistro.jpg";
import bistroInterior from "@/assets/bistro-interior.jpg";
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
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="overflow-hidden rounded-sm">
                <img 
                  src={bistroInterior} 
                  alt="Interior do The Casa Lima" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-playfair font-bold mb-8 text-primary animate-slide-up">
                Nossa História
              </h2>
              <div className="h-[1px] w-24 bg-gold mb-8" />
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
          </div>
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

      {/* CTA Section - Reserve */}
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

      {/* CTA Section - Espaço de Trabalho */}
      <section className="py-32 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-playfair font-bold mb-8 text-primary">
            Seu Escritório Refinado
          </h2>
          <div className="h-[1px] w-24 bg-gold mx-auto mb-12" />
          <p className="text-lg leading-relaxed text-foreground/80 mb-6">
            Trabalhar remotamente não precisa ser solitário ou sem inspiração. 
            Transforme sua produtividade em nosso ambiente sofisticado e acolhedor.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-10">
            WiFi de alta velocidade, café premium ilimitado, ambiente climatizado e 
            a melhor gastronomia ao seu alcance. O The Casa Lima é o espaço perfeito 
            para quem busca produtividade com conforto e elegância.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <div className="p-6 bg-card border border-gold/20 rounded-sm">
              <p className="text-2xl font-playfair text-gold mb-2">WiFi Premium</p>
              <p className="text-sm text-foreground/70">Alta velocidade</p>
            </div>
            <div className="p-6 bg-card border border-gold/20 rounded-sm">
              <p className="text-2xl font-playfair text-gold mb-2">Café Ilimitado</p>
              <p className="text-sm text-foreground/70">Drinks especiais</p>
            </div>
            <div className="p-6 bg-card border border-gold/20 rounded-sm">
              <p className="text-2xl font-playfair text-gold mb-2">Ambiente Único</p>
              <p className="text-sm text-foreground/70">Sofisticação & conforto</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
              <Button variant="elegant" size="lg" className="text-base min-w-[200px]">
                Reserve Seu Espaço
              </Button>
            </a>
            <Link to="/cardapio">
              <Button variant="outline" size="lg" className="text-base min-w-[200px] border-gold hover:bg-gold/10">
                Ver Cardápio
              </Button>
            </Link>
          </div>
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
