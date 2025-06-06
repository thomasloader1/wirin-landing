import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Heart } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "Solicitud",
      label: "Realiza la petición del material",
    },
    {
      icon: Award,
      number: "Adaptación  ",
      label: "Procesamiento de bibliografías",
    },
    {
      icon: BookOpen,
      number: "Acceso",
      label: "Disfruta el material en la app",
    },
    { icon: Heart, number: "100%", label: "Compromiso Social" },
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
                  Educación
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Somos una organización comprometida con hacer la educación
                accesible para todos. Nuestra misión es eliminar las barreras
                que enfrentan los estudiantes con discapacidad visual en su
                proceso educativo.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <BookOpen
                  className="text-cyan-400 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Tecnología Inclusiva
                  </h4>
                  <p className="text-blue-200">
                    Utilizamos las últimas tecnologías para crear formatos
                    accesibles
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen
                  className="text-cyan-400 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Calidad Garantizada
                  </h4>
                  <p className="text-blue-200">
                    Cada libro es revisado meticulosamente para asegurar la
                    calidad
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen
                  className="text-cyan-400 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Impacto Social
                  </h4>
                  <p className="text-blue-200">
                    Trabajamos para crear un mundo más inclusivo y equitativo
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Conoce Nuestra Misión
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
