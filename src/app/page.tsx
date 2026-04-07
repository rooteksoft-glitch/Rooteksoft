import Hero from "@/components/Hero";
import MotionWrapper from "@/components/MotionWrapper";

// Importation de tes pages réelles
import ServicesPage from "@/app/services/page"; 
import PortfolioPage from "@/app/portfolio/page"; 
import CommandePage from "@/app/commande/page";
import AproposPage from "@/app/a-propos/page";
import ContactPage from "@/app/contact/page";

export const metadata = {
  title: "Accueil | Rooteksoft",
  description: "Propulsez votre entreprise avec Rooteksoft.",
};

export default function HomePage() {
  return (
    <main>
      <MotionWrapper>
        
        {/* Section Accueil avec le design original du Hero */}
        <section id="accueil">
          <Hero />
        </section>

        {/* Section Services avec ton design original */}
        <div id="services">
          <ServicesPage />
        </div>

        {/* Section Portfolio avec ton design original (grille et filtres bleus) */}
        <div id="portfolio">
          <PortfolioPage />
        </div>

        {/* Section Commande avec ton design original */}
        <div id="commande">
          <CommandePage />
        </div>

        {/* Section À Propos avec ton design original */}
        <div id="a-propos">
          <AproposPage />
        </div>

        {/* Section Contact avec ton design original */}
        <div id="contact">
          <ContactPage />
        </div>

      </MotionWrapper>
    </main>
  );
}