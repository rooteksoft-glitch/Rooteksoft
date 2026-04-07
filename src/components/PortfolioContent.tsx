"use client";

import { useState } from "react";
import MotionWrapper from "@/components/MotionWrapper";
import Image from "next/image";

interface Project {
  identifiant: string | number;
  titre: string;
  url_image: string;
  categorie: string;
}

export default function PortfolioContent({ projects = [] }: { projects?: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = [
    { id: "all", label: "Tous" },
    { id: "social_media", label: "Réseaux sociaux" },
    { id: "corporate", label: "Entreprises" },
    { id: "event", label: "Evenementielle" },
    { id: "marketing", label: "Publicitaire" },
    { id: "logo", label: "Logo" },
    { id: "branding", label: "Branding" },
    { id: "apk", label: "apk" },
    { id: "web", label: "Web" },
    { id: "desktop", label: "Desktop" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categorie === activeCategory);

  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h1 className="text-5xl font-black mb-4 text-gray-900 tracking-tighter">
          Nos Réalisations
        </h1>

        {/* Barre de navigation */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-16">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === item.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.identifiant}
                className="group text-left animate-in fade-in zoom-in duration-500"
              >
                <div className="relative aspect-video bg-gray-100 rounded-3xl overflow-hidden border-2 border-gray-100 shadow-sm transition-all duration-500">
                  {/* Badge catégorie */}
                  <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest">
                    {project.categorie?.replace("_", " ")}
                  </div>

                  {project.url_image && project.url_image.startsWith("http") ? (
                    <a
                      href={project.url_image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={project.url_image}
                        alt={project.titre}
                        fill
                        unoptimized
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-200 text-gray-400 font-bold italic">
                      Lien d'image invalide
                    </div>
                  )}
                </div>
                <h3 className="mt-6 text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.titre}
                </h3>
              </div>
            ))
          ) : (
            <div className="col-span-2 py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 italic font-medium text-lg">
                Aucun projet Rooteksoft trouvé pour la catégorie "{activeCategory}".
              </p>
            </div>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
}
