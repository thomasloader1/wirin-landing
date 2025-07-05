import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sendEmail, generateEmailHTML } from "@/utils/sendEmail";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    userType: "estudiante", // Valor predeterminado
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Crear subject dinámico basado en el tipo de usuario
      const userTypeLabels = {
        estudiante: 'Alumno',
        voluntario: 'Voluntario',
        bibliotecario: 'Bibliotecario'
      };
      
      const userTypeLabel = userTypeLabels[formData.userType as keyof typeof userTypeLabels] || 'Usuario';
      
      // Enviar email con los datos del formulario
      const emailHTML = generateEmailHTML(formData);
      const result = await sendEmail({
        to: "info@wirinadapta.com.ar", // Email de destino
        subject: `Nueva Solicitud de ${userTypeLabel} - ${formData.name}`,
        html: emailHTML,
      });
      
      console.log('Email enviado exitosamente:', result);
      
      // Mensaje diferente para desarrollo, producción normal, y fallback por CORS
      const isDev = import.meta.env.DEV;
      const isCorsFailback = result.status === 'cors_fallback';
      
      let title, description;
      
      if (isDev) {
        title = "¡Solicitud simulada enviada!";
        description = "[DESARROLLO] Email simulado correctamente. En producción se enviará al destinatario real.";
      } else if (isCorsFailback) {
        title = "¡Solicitud registrada!";
        description = "Tu solicitud ha sido registrada. Debido a un problema técnico temporal, te contactaremos directamente por email.";
      } else {
        title = "¡Solicitud Enviada!";
        description = "Nos pondremos en contacto contigo para iniciar el proceso de digitalización.";
      }
      
      toast({
        title,
        description,
      });
      
      // Resetear el formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        userType: "estudiante",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error al Enviar",
        description:
          "No se pudo enviar tu solicitud. Verifica tu conexión e inténtalo nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@wirinadapta.com.ar"],
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: ["@wirin_adapta"],
      link: "https://www.instagram.com/wirin_adapta/",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            ¿Necesitas Digitalizar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              un Libro?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Contáctanos para solicitar la digitalización de libros académicos.
            Trabajamos con estudiantes, instituciones educativas y
            organizaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-blue-300/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon
                        size={20}
                        className="text-white sm:w-6 sm:h-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm sm:text-base text-blue-200"
                        >
                          {info.link ? (
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-cyan-300 transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in delay-300 order-1 lg:order-2">
            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/20">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-white text-center px-4">
                  Solicita Digitalización Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-blue-100 text-sm sm:text-base"
                      >
                        Nombre Completo
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200 h-10 sm:h-11"
                        placeholder="Tu nombre"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-blue-100 text-sm sm:text-base"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200 h-10 sm:h-11"
                        placeholder="tu@email.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-blue-100 text-sm sm:text-base"
                      >
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200 h-10 sm:h-11"
                        placeholder="(555) 123-4567"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="address"
                        className="text-blue-100 text-sm sm:text-base"
                      >
                        Dirección
                      </Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200 h-10 sm:h-11"
                        placeholder="Tu dirección"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-blue-100 text-sm sm:text-base">
                      Tipo de Usuario
                    </Label>
                    <RadioGroup
                      value={formData.userType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, userType: value })
                      }
                      className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bibliotecario" id="bibliotecario" />
                        <Label htmlFor="bibliotecario" className="text-white cursor-pointer">
                          Bibliotecario
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="voluntario" id="voluntario" />
                        <Label htmlFor="voluntario" className="text-white cursor-pointer">
                          Voluntario
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="estudiante" id="estudiante" />
                        <Label htmlFor="estudiante" className="text-white cursor-pointer">
                          Estudiante
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-blue-100 text-sm sm:text-base"
                    >
                      Detalles del Libro a Digitalizar
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200 min-h-[100px] sm:min-h-[120px]"
                      placeholder="Título del libro, autor, editorial, formato deseado (Braille, audio, texto ampliado)..."
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
