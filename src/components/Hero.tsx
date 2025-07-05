import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Eye, Volume2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundImage: 'url("/WIRINLanding.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Logo */}
      <div className="absolute md:top-[calc(8rem*0.9)] md:left-[calc(8rem*1.1)] top-4 left-1/2 transform -translate-x-1/2 md:transform-none z-10 bg-black/20 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/10">
        <img src="/WIRIN-BLANCO.png" alt="Wirin Logo" className="h-[calc(4rem*1.3)] md:h-[calc(4rem*1.3)] h-16" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>

     

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="flex justify-end w-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in lg:w-1/2 ml-[65%]">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Adapta
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  tus apuntes
                </span>
              </h1>
              <p className="text-3xl text-blue-100 max-w-lg leading-relaxed">
                Te acompañamos en tu carrera para que nada detenga tu
                aprendizaje
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Digitalización
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-blue-500 hover:text-white hover:bg-blue-700/50 px-8 py-6 text-lg transition-all duration-300"
              >
                Saber Más
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">600+</div>
                <div className="text-blue-200 text-sm">
                  Libros Digitalizados
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">50+</div>
                <div className="text-blue-200 text-sm">
                  Estudiantes Beneficiados
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">72h</div>
                <div className="text-blue-200 text-sm">Tiempo Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
