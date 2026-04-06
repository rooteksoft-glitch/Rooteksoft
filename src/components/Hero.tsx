import CTAWhatsApp from "./CTAWhatsapp";
export default function Hero() {
  return (
    <section className="bg-blue-50 py-32 px-6 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
        Transformez votre vision en <span className="text-blue-600">Réalité Digitale</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Expertise en développement Web, Mobile et Design UI/UX pour booster votre business.
      </p>
      <CTAWhatsApp />
    </section>
  );
}