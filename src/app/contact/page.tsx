import MotionWrapper from "@/components/MotionWrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rooteksoft",
  description: "Contactez-nous pour vos projets de développement logiciel.",
};

export default function ContactPage() {
  return (
    <MotionWrapper>
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
        <p className="mb-8">Email : rooteksoft@gmail.com</p>
        <div className="bg-gray-50 p-10 rounded-xl inline-block">
          <p className="font-black uppercase tracking-widest text-sm mb-3 text-black/80">
            Horaires d'ouverture
          </p>
          <p className="text-base font-bold text-blue-600/90">
            Lundi - Vendredi : 08h00 - 18h00
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
}