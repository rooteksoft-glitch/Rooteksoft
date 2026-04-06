"use client";

import MotionWrapper from "@/components/MotionWrapper";

const services = [
  {
    title: "Design Graphique",
    icon: "",
    description: "Nous créons des identités visuelles fortes et mémorables qui reflètent parfaitement votre marque.",
    details: ["Logos professionnels", "Branding complet", "Flyers & Affiches", "Designs réseaux sociaux"]
  },
  {
    title: "UI/UX Design",
    icon: "",
    description: "Interfaces modernes centrées sur l'utilisateur pour une expérience fluide et intuitive.",
    details: ["Maquettes Figma", "Prototypes interactifs", "Design Systems", "Audit UX"]
  },
  {
    title: "Développement Mobile",
    icon: "",
    description: "Applications performantes Android & iOS avec Flutter pour transformer vos idées en réalité.",
    details: ["Multiplateforme Flutter", "Intégration Firebase", "APIs REST", "Animations fluides"]
  },
  {
    title: "Développement Web",
    icon: "",
    description: "Sites modernes, rapides (Next.js) et optimisés pour tous les écrans et le SEO.",
    details: ["React & Next.js", "Tailwind CSS", "Plateformes E-commerce", "Dashboards"]
  },
  {
    title: "Solutions Sur Mesure",
    icon: "",
    description: "Applications métiers et systèmes de gestion (ERP, CRM) adaptés à vos besoins spécifiques.",
    details: ["Automatisation", "Logiciels métiers", "Systèmes scalables", "Digitalisation"]
  },
  {
    title: "Accompagnement & Conseil",
    icon: "",
    description: "Nous vous accompagnons dans votre stratégie digitale pour maximiser vos chances de succès.",
    details: ["Choix technologiques", "Structure produit", "Stratégie de croissance", "Conseil technique"]
  }
];

export default function ServicesContent() {
  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4 text-gray-900 tracking-tighter">Nos Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Des solutions digitales intelligentes pour propulser votre entreprise vers l'excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border-2 border-gray-100 rounded-3xl hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="text-4xl mb-6">{s.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">{s.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                {s.description}
              </p>
              <ul className="space-y-2">
                {s.details.map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-gray-500 italic">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}