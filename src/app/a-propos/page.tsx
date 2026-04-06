// --- FICHIER : src/app/a-propos/page.tsx ---
import MotionWrapper from "@/components/MotionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | Rooteksoft",
  description: "Découvrez l'histoire, la vision et la mission de Rooteksoft, startup technologique à Kinshasa.",
};

export default function AboutPage() {
  return (
    <MotionWrapper>
      <div className="max-w-4xl mx-auto py-20 px-6 text-gray-800">
        {/* Titre principal */}
        <h1 className="text-4xl font-black mb-10 text-blue-600">À Propos de Rooteksoft</h1>

        {/* Section Hook (Accroche) */}
        <p className="text-2xl font-bold leading-tight mb-8 text-gray-900 border-l-4 border-blue-600 pl-6">
          Nous concevons des expériences digitales modernes, rapides et intuitives.
        </p>

        {/* Corps du texte */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            <span className="font-bold text-gray-900">RootekSoft</span> est une startup technologique basée à 
            <span className="font-semibold"> Kinshasa</span>, spécialisée dans le design et le développement 
            de solutions numériques sur mesure. Nous aidons les entreprises et les entrepreneurs à transformer 
            leurs idées en produits digitaux performants.
          </p>

          <p>
            De la conception <span className="text-blue-600 font-medium">UI/UX</span> au développement d’applications mobiles avec 
            <span className="text-blue-500 font-medium"> Flutter</span>, en passant par le design graphique, 
            notre approche allie créativité, technologie et simplicité pour offrir une expérience utilisateur exceptionnelle.
          </p>

          {/* Vision et Mission */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h2 className="text-xl font-black text-blue-700 mb-3 uppercase tracking-wide">Notre vision</h2>
              <p className="text-gray-700">
                Bâtir des produits digitaux innovants qui répondent aux standards internationaux tout en valorisant le potentiel africain.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h2 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wide">Notre mission</h2>
              <p className="text-gray-700">
                Transformer vos idées en solutions digitales fiables, élégantes et impactantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}