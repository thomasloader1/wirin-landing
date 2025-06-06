
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-10 text-blue-300/30 animate-bounce">
        <Wifi size={40} />
      </div>
      <div className="absolute top-40 right-20 text-blue-200/30 animate-pulse">
        <Shield size={35} />
      </div>
      <div className="absolute bottom-40 left-20 text-blue-400/30 animate-bounce delay-1000">
        <Zap size={45} />
      </div>

      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Conecta
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  tu Futuro
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
                Soluciones de conectividad avanzadas para hogares y empresas. 
                Internet de alta velocidad, seguro y confiable.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-300 text-blue-100 hover:bg-blue-700/50 px-8 py-6 text-lg transition-all duration-300"
              >
                Conocer Más
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">1000+</div>
                <div className="text-blue-200 text-sm">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">99.9%</div>
                <div className="text-blue-200 text-sm">Tiempo Activo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-300">24/7</div>
                <div className="text-blue-200 text-sm">Soporte</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative w-full h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-sm border border-blue-300/30 rounded-3xl p-8 h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center animate-pulse">
                    <Wifi size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Conexión Ultra Rápida</h3>
                  <p className="text-blue-100">Hasta 1GB de velocidad</p>
                </div>
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
