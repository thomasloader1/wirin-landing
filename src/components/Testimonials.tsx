import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana García",
      role: "Estudiante de Derecho",
      company: "Universidad Nacional",
      rating: 0,
      title: "Equipo Web",
      comment:
        "Gracias a los libros digitalizados, ahora puedo estudiar de manera independiente. La calidad del Braille digital es excepcional.",
      avatar: "AG",
    },
    {
      name: "Carlos Mendez",
      role: "Profesor",
      company: "Instituto Pedagógico",
      rating: 5,
      comment:
        "Esta organización ha transformado la manera en que nuestros estudiantes acceden al conocimiento. Un trabajo extraordinario.",
      avatar: "CM",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quienes conforman{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Wirin
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un grupo de profesionales apasionados, comprometidos con la
            accesibilidad y la inclusión. Nuestra misión es facilitar el acceso
            a la educación para personas con disminución visual y/o dificultades
            motoras, brindando soluciones tecnológicas que les permitan
            desenvolverse con mayor autonomía y comodidad en su día a día.
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
                  <h2 className="text-2xl font-medium text-blue-500">
                    {testimonial.title}
                  </h2>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={20}
                      />
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
          <p className="text-gray-500 mb-8">
            Avalados por instituciones educativas reconocidas
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">UNESCO</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">ONCE</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">DAISY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
