import MotionWrapper from "@/components/MotionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rooteksoft",
  description: "Contactez-nous pour vos projets de développement logiciel.",
};

export default function ContactPage() {
  const socialLinks = [
    { 
        id: "facebook", 
        url: "https://www.facebook.com/profile.php?id=61584042332055",
        svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    },
    { 
        id: "instagram", 
        url: "https://www.instagram.com/rooteksoft?igsh=YzljYTk1ODg3Zg==",
        svg: <g><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></g>
    },
    { 
        id: "linkedin", 
        url: "#", // Ajoute ton lien LinkedIn ici quand tu l'auras
        svg: <g><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></g>
    }
  ];

  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
        
        <div className="flex flex-col items-center gap-6 mb-10">
          <p className="text-lg font-medium text-gray-700 flex items-center gap-2">
            <span className="text-blue-600">✉</span> rooteksoft@gmail.com
          </p>

          {/* Section Réseaux Sociaux */}
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {link.svg}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-10 rounded-xl inline-block border border-gray-100 shadow-sm">
          <p className="font-black uppercase tracking-widest text-sm mb-3 text-black/80">
            Horaires d'ouverture
          </p>
          <p className="text-base font-bold text-blue-600/90">
            Lundi - Vendredi : 08h00 - 18h00
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
}