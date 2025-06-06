
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Rocket } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, number: "5,000+", label: "Clientes Activos" },
    { icon: Award, number: "15+", label: "Años de Experiencia" },
    { icon: CheckCircle, number: "99.9%", label: "Satisfacción del Cliente" },
    { icon: Rocket, number: "24/7", label: "Soporte Técnico" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Transformamos la
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Conectividad
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Con más de 15 años de experiencia en el mercado, somos líderes en 
                soluciones de conectividad. Nuestra misión es brindar internet de 
                alta calidad que impulse el crecimiento y la innovación.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Tecnología Avanzada</h4>
                  <p className="text-blue-200">Infraestructura de fibra óptica de última generación</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Cobertura Amplia</h4>
                  <p className="text-blue-200">Servicio disponible en toda la región metropolitana</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Compromiso Total</h4>
                  <p className="text-blue-200">Garantía de satisfacción y soporte especializado</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Conoce Nuestra Historia
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 animate-fade-in delay-300">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-blue-300/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center">
                  <achievement.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-300 mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-200 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
