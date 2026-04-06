import PortfolioContent from "@/components/PortfolioContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Rooteksoft",
  description: "Découvrez nos projets récents et réalisations digitales.",
};

// Fonction pour récupérer les données de ton API Render
async function getProjects() {
  const API_URL = "https://TON-API-SUR-RENDER.com/projects"; // ⚠️ Remplace par ton URL Render
  
  try {
    const res = await fetch(API_URL, { 
      next: { revalidate: 3600 } // Rafraîchit les données toutes les heures
    });
    
    if (!res.ok) throw new Error("Erreur lors de la récupération");
    return res.json();
  } catch (error) {
    console.error(error);
    return []; // Retourne un tableau vide en cas de crash
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return <PortfolioContent projects={projects} />;
}