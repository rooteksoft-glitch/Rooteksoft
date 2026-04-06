"use client"; 

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
  const pathname = usePathname(); 

  const getLinkStyle = (path: string) => {
    const isActive = pathname === path;
    return `transition-all duration-300 ${
      isActive 
        ? "text-blue-600 opacity-100" 
        : "text-gray-900 opacity-70 hover:opacity-100 hover:text-blue-600"
    }`;
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      
      {/* 1. LOGO + NOM DE MARQUE */}
      <Link href="/" className="flex items-center gap-0 group">
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

      {/* 2. LIENS DE NAVIGATION (Passés en minuscules/capitalize) */}
      <div className="hidden md:flex gap-8 font-bold text-base capitalize">
        <Link href="/" className={getLinkStyle("/")}>
          accueil
        </Link>
        <Link href="/services" className={getLinkStyle("/services")}>
          services
        </Link>
        <Link href="/portfolio" className={getLinkStyle("/portfolio")}>
          portfolio
        </Link>
        <Link href="/commande" className={getLinkStyle("/commande")}>
          commander
        </Link>
        <Link href="/a-propos" className={getLinkStyle("/a-propos")}>
          à propos
        </Link>
        <Link href="/contact" className={getLinkStyle("/contact")}>
          contact
        </Link>
      </div>
    </nav>
  );
}