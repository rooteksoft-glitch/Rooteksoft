import ServicesContent from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services | Rooteksoft",
  description: "Développement web, Flutter, UI/UX et Design Graphique sur mesure à Kinshasa.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}