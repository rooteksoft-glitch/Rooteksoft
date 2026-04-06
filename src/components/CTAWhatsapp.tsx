export default function CTAWhatsApp() {
  const whatsappNumber = "243XXXXXXXXX"; // Remplacez par votre numéro
  const message = encodeURIComponent("Bonjour Rooteksoft, j'aimerais discuter d'un projet.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-transform hover:scale-105"
    >
      Discuter sur WhatsApp
    </a>
  );
}