import Hero from "@/components/Hero";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata = {
  title: "Accueil | Rooteksoft",
  description: "Propulsez votre entreprise avec Rooteksoft.",
};

export default function HomePage() {
  return (
    <>
      <MotionWrapper>
        <Hero />
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Nos Réalisations</h2>
          <p className="mt-4 text-gray-600">
            Découvrez comment nous aidons nos clients à grandir.
          </p>
        </section>
      </MotionWrapper>
    </>
  );
}