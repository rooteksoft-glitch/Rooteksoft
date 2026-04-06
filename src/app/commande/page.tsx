"use client";
import { useState, useEffect } from "react";
import { processMobileMoneyPayment } from "@/lib/mobileMoney";
import MotionWrapper from "@/components/MotionWrapper";

const SERVICES_CATALOG: Record<string, { label: string, price: number, icon: string }> = {
  "logo-simple": { label: "Logo Simple", price: 75, icon: "" },
  "logo-premium": { label: "Pack Logo Premium", price: 150, icon: "" },
  "branding-complet": { label: "Branding Complet", price: 350, icon: "" },
  "uiux-landing": { label: "Design Landing Page", price: 120, icon: "" },
  "uiux-app": { label: "Maquettage App Mobile", price: 450, icon: "" },
  "web-vitrine": { label: "Site Web Vitrine", price: 600, icon: "" },
  "ecommerce": { label: "Plateforme E-commerce", price: 1200, icon: "" },
  "motion-intro": { label: "Intro Logo Animé", price: 60, icon: "" },
  "motion-explainer": { label: "Vidéo Explicative", price: 250, icon: "" },
  "montage-reels": { label: "Montage Reels/TikTok Pro", price: 45, icon: "" },
  "affiche-event": { label: "Affiche Évènementielle", price: 20, icon: "" },
  "affiche-market": { label: "Affiche Publicitaire", price: 10, icon: "" },
  "affiche-corporate": { label: "Affiche Corporate", price: 20, icon: "" },
  "carte-visite": { label: "Carte de Visite", price: 20, icon: "" },
};

export default function CommandePage() {
  const [loading, setLoading] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [serviceKey, setServiceKey] = useState("logo-simple");
  const [paymentMethod, setPaymentMethod] = useState("m-pesa");
  const [accountNumber, setAccountNumber] = useState("");
  const [price, setPrice] = useState(SERVICES_CATALOG["logo-simple"].price);

  useEffect(() => {
    setPrice(SERVICES_CATALOG[serviceKey]?.price || 0);
  }, [serviceKey]);

  // Sécurité pour l'affichage
  const currentService = SERVICES_CATALOG[serviceKey] || SERVICES_CATALOG["logo-simple"];

  const handlePayment = async () => {
    setLoading(true);
    const res = await processMobileMoneyPayment("Client Rooteksoft", price);
    alert(`Paiement initié : ${res.message}`);
    setLoading(false);
  };

  const sendToDesigner = () => {
    const detailString = `Projet: ${projectName}%0AService: ${currentService.label}%0APrix: ${price}$%0AMéthode: ${paymentMethod}%0ACompte: ${accountNumber}`;
    
    // 1. Envoi Email
    const emailSubject = `Nouveau Devis : ${projectName}`;
    const mailtoUrl = `mailto:rooteksoft@gmail.com?subject=${emailSubject}&body=${detailString}`;
    
    // 2. Envoi WhatsApp
    const whatsappNumber = "243971498410";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Bonjour Rooteksoft, voici un nouveau devis :%0A%0A${detailString}`;

    // Ouvrir WhatsApp d'abord, puis proposer l'email
    window.open(whatsappUrl, "_blank");
    setTimeout(() => {
        window.location.href = mailtoUrl;
    }, 1000);
  };

  return (
    <MotionWrapper>
      <div className="max-w-2xl mx-auto py-12 px-6">
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 text-gray-900">
          <h1 className="text-3xl font-black mb-2">Démarrer un projet</h1>
          <p className="text-gray-500 mb-8 font-medium">Choisissez le service adapté à vos besoins.</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-black uppercase text-gray-400 mb-2">Nom du projet</label>
              <input 
                type="text" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Ex: Refonte RootekApp" 
                className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 focus:bg-white focus:border-blue-600 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-gray-400 mb-2">Service souhaité</label>
              <select 
                value={serviceKey}
                onChange={(e) => setServiceKey(e.target.value)}
                className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 font-bold focus:border-blue-600 outline-none appearance-none cursor-pointer"
              >
                <optgroup label="IDENTITÉ VISUELLE">
                  <option value="logo-simple">Logo Simple (75$)</option>
                  <option value="logo-premium">Pack Logo Premium (150$)</option>
                  <option value="branding-complet">Branding Complet (350$)</option>
                </optgroup>
                <optgroup label="DIGITAL & DEV">
                  <option value="uiux-landing">Design Landing Page (120$)</option>
                  <option value="uiux-app">Maquettage App (450$)</option>
                  <option value="web-vitrine">Site Web Vitrine (600$)</option>
                  <option value="ecommerce">Plateforme E-commerce (1200$)</option>
                </optgroup>
                <optgroup label="AFFICHES">
                  <option value="affiche-event">Affiche Évènementielle (20$)</option>
                  <option value="affiche-market">Affiche Publicitaire (10$)</option>
                  <option value="carte-visite">Carte de Visite (20$)</option>
                </optgroup>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase text-gray-400 mb-2">Paiement via</label>
                <select 
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 font-bold focus:border-blue-600 outline-none"
                >
                  <option value="m-pesa">M-Pesa</option>
                  <option value="airtel-money">Airtel Money</option>
                  <option value="orange-money">Orange Money</option>
                  <option value="visa">Visa / Mastercard</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-400 mb-2">Référence / Numéro</label>
                <input 
                  type="text" 
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder={paymentMethod === 'visa' ? "Numéro de carte" : "08XXXXXXXX"} 
                  className="w-full p-4 border-2 border-gray-100 rounded-2xl bg-gray-50 font-bold focus:border-blue-600 outline-none"
                />
              </div>
            </div>

            {/* Section Total sécurisée */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl text-white flex justify-between items-center">
              <div>
                <p className="text-blue-100 text-xs font-black uppercase tracking-tighter">Total à régler</p>
                <p className="text-sm opacity-80">{currentService?.label || "Sélectionnez un service"}</p>
              </div>
              <div className="text-4xl font-black">{price}$</div>
            </div>

            <div className="space-y-3">
              <button 
                type="button"
                onClick={handlePayment}
                className="w-full bg-gray-900 text-white p-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all active:scale-95"
              >
                Confirmer & Payer
              </button>
              
              <button 
                type="button"
                onClick={sendToDesigner}
                className="w-full bg-green-50 text-green-700 border-2 border-green-200 p-4 rounded-2xl font-bold text-sm hover:bg-green-100 transition-all flex items-center justify-center gap-2"
              >
                 Envoi devis au designer (Email & WhatsApp)
              </button>
            </div>
          </form>
        </div>
      </div>
    </MotionWrapper>
  );
}