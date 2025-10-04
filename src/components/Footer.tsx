import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold font-serif" style={{ color: '#BB1D2B', letterSpacing: '0.04em' }}>
              BOUCHERIE L'ORIENTALE
            </h3>
            <p className="text-sm text-secondary-foreground/80">
              Boucherie et charcuterie halal à Valenciennes.<br />Qualité, tradition et savoir-faire artisanal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary-light transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/produits" className="hover:text-primary-light transition-colors">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-primary-light transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary-light" />
                <span>Boucherie et charcuterie l'Orientale halal<br />59300 Valenciennes, France</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-light" />
                <a href="tel:+33361411004" className="hover:text-primary-light transition-colors">
                  +33 3 61 41 10 04
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-light" />
                <a href="mailto:contact@boucherie.fr" className="hover:text-primary-light transition-colors">
                  contact@boucherie.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horaires d'ouverture</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0 text-primary-light" />
                <div>
                  <p className="font-medium">Mardi - Samedi</p>
                  <p className="text-secondary-foreground/80">8h00 - 13h00 / 15h00 - 19h00</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0 text-primary-light" />
                <div>
                  <p className="font-medium">Dimanche</p>
                  <p className="text-secondary-foreground/80">8h00 - 13h00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} BOUCHERIE L'ORIENTALE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
