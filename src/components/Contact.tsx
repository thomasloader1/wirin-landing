
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Av. Principal 123", "Ciudad, País 12345"]
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@wirin.com", "soporte@wirin.com"]
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 - 18:00", "Sáb: 9:00 - 14:00"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Conectarte?</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos mejorar tu conectividad. 
            Nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-blue-300/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-blue-200">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in delay-300">
            <Card className="bg-white/10 backdrop-blur-sm border-blue-300/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-center">
                  Solicita tu Cotización Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-blue-100">
                        Nombre Completo
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-blue-100">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-blue-100">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-blue-100">
                        Servicio de Interés
                      </Label>
                      <Input
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200"
                        placeholder="Internet Residencial, Empresarial..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-blue-100">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white/10 border-blue-300/30 text-white placeholder:text-blue-200 min-h-[120px]"
                      placeholder="Cuéntanos sobre tus necesidades de conectividad..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar Mensaje
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
