import { useState } from "react";

const Testimonials = () => {
  // Array de miembros del equipo (vacío por ahora, solo para estructura)
 const teamMembers = [
    { id: 1, name: "Andres Aquino", image: "/placeholder.svg" },
    { id: 2, name: "Tomás Aranda", image: "/placeholder.svg" },
    { id: 3, name: "Lucas Barrios", image: "/placeholder.svg" },
    { id: 4, name: "Tomás Goméz", image: "/placeholder.svg" },
    { id: 5, name: "Martín Guerreiro", image: "/placeholder.svg" },
    { id: 6, name: "Rocío Mercado", image: "/placeholder.svg" },
    { id: 7, name: "Ariel Nappio", image: "/placeholder.svg" },
    { id: 8, name: "Joaquin Oviedo", image: "/placeholder.svg" },
  ];

  return (
    <section className="py-20 bg-white">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="relative group overflow-hidden rounded-xl aspect-square shadow-lg shadow-gray-200 border border-gray-100"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <h3 className="text-white text-2xl font-semibold text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>

       
          
        
      </div>
    </section>
  );
};

export default Testimonials;
