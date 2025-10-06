import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Exemplo de imagens para cada ano
import img2019 from "@/assets/timeline-2019.jpeg";
import img2020 from "@/assets/timeline-2020.avif";
import img2024 from "@/assets/timeline-2024.jpeg";
import img2025 from "@/assets/timeline-2025.jpeg";

const NossaHistoria = () => {
    const timeline = [
        { year: 2019, text: "O primeiro passo: brigadeiros, docinhos de festa e a vontade gigante de crescer.", img: img2019 },
        { year: 2020, text: "As primeiras fatias de bolo: o doce virou negócio. Começava ali o sabor da esperança.", img: img2020 },
        { year: 2024, text: "Foram 7 meses intensos com o food truck até conquistar o ponto comercial. A estrada me levou ao meu lugar.", img: img2024 },
        { year: 2025, text: "Aqui estou. De portas desde 27 de março, foi o início de uma nova fase — mais madura, mais forte, mais minha.", img: img2025 },
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Timeline Section */}
            <section className="py-32 px-4 bg-secondary/10">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-5xl font-playfair font-bold mb-16 text-center text-primary">
                        Linha do Tempo
                    </h2>

                    <div className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:bg-gold/30">
                        {timeline.map((item, idx) => (
                            <div
                                key={idx}
                                className={`mb-16 flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* Texto */}
                                <div className="md:w-1/2 md:px-8 text-center md:text-left">
                                    <h3 className="text-3xl font-playfair font-semibold mb-2 text-primary">
                                        {item.year}
                                    </h3>
                                    <p className="text-foreground/80">{item.text}</p>
                                </div>

                                {/* Imagem */}
                                <div className="md:w-1/2 flex justify-center md:px-8 mt-6 md:mt-0">
                                    <img
                                        src={item.img}
                                        alt={`Timeline ${item.year}`}
                                        className="w-full max-w-sm rounded shadow-lg object-cover"
                                    />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 bg-primary text-background">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-5xl font-playfair font-bold mb-6">
                        Visite-nos e Experimente
                    </h2>
                    <p className="text-xl mb-10 text-gold-light">
                        Cada prato e cada doce contam a nossa história. Venha fazer parte dela!
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

export default NossaHistoria;
