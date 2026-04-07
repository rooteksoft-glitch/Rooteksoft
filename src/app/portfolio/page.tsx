import PortfolioContent from "@/components/PortfolioContent";
import { supabase } from "@/lib/supabase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Rooteksoft",
  description: "Découvrez nos réalisations gérées via Supabase.",
};

async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("id, created_at, title, url_image, category")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erreur Supabase:", error.message);
    return [];
  }

  if (!data) return [];

  return data.map((project) => ({
    identifiant: project.id,
    titre: project.title,
    categorie: project.category,
    url_image: project.url_image?.startsWith("http")
      ? project.url_image
      : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio-images/${project.url_image}`,
  }));
}

export default async function PortfolioPage() {
  const projects = (await getProjects()) ?? [];

  return (
    <main>
      <PortfolioContent projects={projects} />
    </main>
  );
}
