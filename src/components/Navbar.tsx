"use client"; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Liste des sections pour simplifier la gestion
  const navLinks = [
    { id: "accueil", label: "accueil" },
    { id: "services", label: "services" },
    { id: "portfolio", label: "portfolio" },
    { id: "commande", label: "commander" },
    { id: "a-propos", label: "à propos" },
    { id: "contact", label: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Déclenche le changement quand la section est au milieu
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // On observe chaque section par son ID
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkStyle = (id: string) => {
    const isActive = activeSection === id;
    return `transition-all duration-300 ${
      isActive 
        ? "text-blue-600 opacity-100" 
        : "text-gray-900 opacity-70 hover:opacity-100 hover:text-blue-600"
    }`;
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      
      {/* LOGO */}
      <Link href="#accueil" className="flex items-center gap-0 group">
        <Image 
          src="/logo1.png" 
          alt="Logo Rooteksoft" 
          width={80} 
          height={80} 
          className="object-contain"
          priority
        />
        <div className="font-black text-2xl tracking-tighter text-blue-600 flex items-center">
          Rootek<span className="text-gray-900 -ml-0.5">soft</span> 
        </div>
      </Link>

      {/* LIENS DE NAVIGATION DYNAMIQUES */}
      <div className="hidden md:flex gap-8 font-bold text-base capitalize">
        {navLinks.map((link) => (
          <Link 
            key={link.id} 
            href={`#${link.id}`} 
            className={getLinkStyle(link.id)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}