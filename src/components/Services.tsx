
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Shield, Headphones, Zap, Globe, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "Internet Residencial",
      description: "Conexión de alta velocidad para tu hogar con planes flexibles desde 100MB hasta 1GB.",
      features: ["Velocidad garantizada", "Sin límites de datos", "WiFi 6 incluido"]
    },
    {
      icon: Globe,
      title: "Internet Empresarial",
      description: "Soluciones corporativas con SLA garantizado y soporte prioritario 24/7.",
      features: ["IP estática", "Ancho de banda dedicado", "Soporte empresarial"]
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección completa con firewall, antivirus y monitoreo de red en tiempo real.",
      features: ["Firewall avanzado", "Protección DDoS", "Monitoreo 24/7"]
    },
    {
      icon: Settings,
      title: "Instalación Técnica",
      description: "Instalación profesional y configuración completa sin costo adicional.",
      features: ["Instalación gratuita", "Configuración WiFi", "Optimización de red"]
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Atención técnica especializada disponible todos los días del año.",
      features: ["Chat en línea", "Soporte telefónico", "Asistencia remota"]
    },
    {
      icon: Zap,
      title: "Tecnología de Punta",
      description: "Infraestructura de fibra óptica con la última tecnología en conectividad.",
      features: ["Fibra óptica", "Baja latencia", "Alta disponibilidad"]
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
            Ofrecemos soluciones integrales de conectividad diseñadas para satisfacer 
            las necesidades específicas de cada cliente.
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
