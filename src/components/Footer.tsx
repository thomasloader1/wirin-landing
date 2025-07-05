import { Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Brand */}
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="flex items-center space-x-3">
              <img src="/WIRIN-BLANCO.png" alt="Wirin Logo" className="h-12" />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              TRANSFORMANDO LA EDUCACIÓN, UN TEXTO A LA VEZ
            </p>
          </div>

          {/* Contact Info - Only Email */}
          <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors">
            <Mail size={18} />
            <a href="mailto:info@wirinadapta.com.ar">info@wirinadapta.com.ar</a>
          </div>

          {/* Social Links - Only Instagram */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/wirin_adapta/"
              aria-label="Instagram"
              className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-center">
            © {currentYear} Wirin. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
