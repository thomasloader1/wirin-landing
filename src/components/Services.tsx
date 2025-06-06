
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Volume2, Type, Smartphone, Headphones, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Digitalización Braille",
      description: "Conversión de libros físicos a formato Braille digital compatible con líneas Braille y dispositivos táctiles.",
      features: ["Formato BRF", "Compatible con displays Braille", "Navegación optimizada"]
    },
    {
      icon: Volume2,
      title: "Audiolibros",
      description: "Grabación profesional de libros con voces claras y naturales para una experiencia auditiva óptima.",
      features: ["Voces profesionales", "Navegación por capítulos", "Velocidad ajustable"]
    },
    {
      icon: Type,
      title: "Texto Ampliado",
      description: "Libros con tipografías de alto contraste y tamaños ajustables para estudiantes con baja visión.",
      features: ["Fuentes de alto contraste", "Tamaños personalizables", "Espaciado optimizado"]
    },
    {
      icon: Smartphone,
      title: "Apps Móviles",
      description: "Aplicaciones móviles diseñadas para accesibilidad con lectores de pantalla integrados.",
      features: ["Compatible con TalkBack", "VoiceOver integrado", "Interfaz simplificada"]
    },
    {
      icon: Headphones,
      title: "Soporte Técnico",
      description: "Asistencia especializada para el uso de tecnologías de apoyo y formatos accesibles.",
      features: ["Capacitación personalizada", "Soporte telefónico", "Tutoriales incluidos"]
    },
    {
      icon: Settings,
      title: "Formatos Personalizados",
      description: "Adaptación de contenido según las necesidades específicas de cada estudiante.",
      features: ["EPUB accesible", "HTML estructurado", "PDF con OCR"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de digitalización diseñadas para hacer 
            la educación accesible a todos los estudiantes con discapacidad visual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
