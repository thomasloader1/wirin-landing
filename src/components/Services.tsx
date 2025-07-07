import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Volume2,
  Type,
  Smartphone,
  Headphones,
  Settings,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Trabajo Colaborativo",
      description:
        "La comunidad trabaja en conjunto para garantizar accesibilidad y calidad en los materiales de estudio",
      features: [
        "Proceso supervisado por etapas",
        "Correcciones en línea",
        "Tareas asignadas por tema",
      ],
    },
    {
      icon: Volume2,
      title: "Formatos Accesibles",
      description:
        "Convertimos tus textos en versiones adaptadas. Todo desde una misma plataforma",
      features: [
        "Texto a voz (TTS)",
        "Apuntes de voz integrados",
        "Descarga en múltiples formatos",
      ],
    },
    {
      icon: Type,
      title: "Experiencia Personalizada",
      description:
         "Accedé a tu material de estudio con configuración visual y auditiva adaptada a tus necesidades",
      features: [
        "Tamaño de fuente ajustable",
        "Alto contraste para baja visión",
        "Modo de lectura asistida",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Servicios
            </span>
          </h2>
          <p className="text-3xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de digitalización diseñadas para
            hacer la educación accesible a todos los estudiantes con
            discapacidad visual.
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
                <CardTitle className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xl text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-2xl text-gray-600 font-bold"
                    >
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
