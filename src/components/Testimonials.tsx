
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Directora de TI",
      company: "Tech Solutions",
      rating: 5,
      comment: "El servicio de Wirin ha transformado completamente nuestra productividad. La velocidad y estabilidad son excepcionales.",
      avatar: "MG"
    },
    {
      name: "Carlos Rodríguez",
      role: "Propietario",
      company: "Café Central",
      rating: 5,
      comment: "Desde que cambiamos a Wirin, nuestros clientes disfrutan de WiFi súper rápido. El soporte técnico es increíble.",
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      role: "Freelancer",
      company: "Diseño Digital",
      rating: 5,
      comment: "Como diseñadora, necesito subir archivos pesados constantemente. Con Wirin, mi trabajo fluye sin interrupciones.",
      avatar: "AM"
    },
    {
      name: "Roberto Silva",
      role: "Gerente General",
      company: "Innovate Corp",
      rating: 5,
      comment: "La transición fue perfecta y el equipo de soporte nos acompañó en cada paso. Recomiendo Wirin sin dudarlo.",
      avatar: "RS"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que Dicen Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor motivación. 
            Escucha sus experiencias con nuestros servicios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <Quote className="text-blue-300 group-hover:text-blue-500 transition-colors" size={32} />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in delay-500">
          <p className="text-gray-500 mb-8">Confiado por más de 5,000 clientes</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">ISO 27001</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">99.9% SLA</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
