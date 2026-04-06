"use client";

import MotionWrapper from "@/components/MotionWrapper";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function PortfolioContent({ projects }: { projects: Project[] }) {
  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h1 className="text-5xl font-black mb-4 text-gray-900 tracking-tighter">Nos Réalisations</h1>
        <p className="text-gray-600 mb-16 max-w-xl mx-auto font-medium">
          Découvrez comment nous transformons les idées de nos clients en succès digitaux.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="group text-left">
                <div className="relative aspect-video bg-gray-100 rounded-3xl overflow-hidden border-2 border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  {project.imageUrl ? (
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 font-bold italic">
                      Image non disponible
                    </div>
                  )}
                </div>
                <h3 className="mt-6 text-2xl font-black text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600 font-medium leading-relaxed">{project.description}</p>
              </div>
            ))
          ) : (
            <p className="col-span-2 text-gray-400 italic">Chargement des projets en cours...</p>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
}