import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-blue-900/90 backdrop-blur-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/WIRIN-BLANCO.png" alt="Wirin Logo" className="h-10" />
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-white hover:text-cyan-300 transition-colors">Servicios</a>
          <a href="#about" className="text-white hover:text-cyan-300 transition-colors">Nosotros</a>
          <a href="#team" className="text-white hover:text-cyan-300 transition-colors">Equipo</a>
          <a href="#contact" className="text-white hover:text-cyan-300 transition-colors">Contacto</a>
        </div>
        
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105">
          Solicitar Digitalización
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;