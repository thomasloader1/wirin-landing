import { useState } from "react";

const Testimonials = () => {
  // Array de miembros del equipo con enlaces de LinkedIn
 const teamMembers = [
    { id: 1, name: "Andres Aquino", image: "/andy.png", linkedin: "https://github.com/andygoeshard" },
    { id: 2, name: "Tomás Aranda", image: "/tomas-aranda.jpg", linkedin: "https://www.linkedin.com/in/tomas-esteban-aranda" },
    { id: 3, name: "Lucas Barrios", image: "/lucas-barrios.png", linkedin: "https://www.linkedin.com/in/lucas-d-barrios-it" },
    { id: 4, name: "Tomás Goméz", image: "/tomas-gomez.png", linkedin: "https://www.linkedin.com/in/gtg-dev" },
    { id: 5, name: "Martín Guerreiro", image: "/martin-guerreiro.png", linkedin: "https://www.linkedin.com/in/martin-guerreiro" },
    { id: 6, name: "Rocío Mercado", image: "/rocio-mercado.png", linkedin: "https://www.linkedin.com/in/rocío-ayelén-mercado-176b32289" },
    { id: 7, name: "Ariel Nappio", image: "/ariel-nappio.png", linkedin: "https://www.linkedin.com/in/ariel-eduardo-nappio-7840071a4" },

    { id: 8, name: "Joaquin Oviedo", image: "/joaquin-oviedo.png", linkedin: "https://www.linkedin.com/in/joaquin-oviedo" },
  ];

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Quienes conforman sección */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-gray-900">Quienes conforman</h2>
            <img src="/WIRIN25 (1).png" alt="WIRIN" className="h-[8.5rem] object-contain" />
          </div>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-16">
            Somos un grupo de profesionales apasionados, comprometidos con la accesibilidad y la inclusión. 
            Nuestra misión es facilitar el acceso a la educación para personas con disminución visual y/o 
            dificultades motoras, brindando soluciones tecnológicas que les permitan desenvolverse con mayor 
            autonomía y comodidad en su día a día
          </p>
        </div>
        
        {/* Grid de miembros del equipo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="relative group overflow-hidden rounded-xl aspect-square shadow-lg shadow-gray-200 border border-gray-100 cursor-pointer transition-transform duration-300 hover:scale-105 w-[85%] mx-auto"
              onClick={() => window.open(member.linkedin, '_blank')}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <h3 className="text-white text-2xl font-semibold text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{member.name}</h3>
              </div>
              {/* Indicador visual de que es clickeable */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

       
          
        
      </div>
    </section>
  );
};

export default Testimonials;
