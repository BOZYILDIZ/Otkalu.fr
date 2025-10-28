import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo_otkalu.webp"
                alt="OTK ALU Logo"
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-xl font-bold">OTK ALU</h3>
                <p className="text-sm text-gray-400">Métallerie - Serrurerie</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Avec des années d'expérience professionnelle, OTK ALU est spécialisée dans la
              métallerie et la serrurerie à Haguenau et dans tout le Bas-Rhin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/garde-corps">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Garde-corps
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portail">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Portail
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/escalier">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Escalier
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/serrure">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Serrure
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nous Contacter</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  17 rue Saint-Exupéry
                  <br />
                  67500 Haguenau
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:0651234047"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  06 51 23 40 47
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@otkalu.fr"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@otkalu.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} OTK ALU. Tous droits réservés. | Métallerie et Serrurerie à Haguenau,
            Bas-Rhin (67)
          </p>
        </div>
      </div>
    </footer>
  );
}
