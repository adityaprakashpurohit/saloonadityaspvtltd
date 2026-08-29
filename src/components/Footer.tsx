import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-espresso text-champagne pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-3xl tracking-widest text-white">LUMIÈRE</span>
              <span className="font-sans text-xs tracking-[0.2em] mt-1 text-rose uppercase">
                Beauty, Refined.
              </span>
            </Link>
            <p className="text-sand/80 font-sans mt-4 max-w-xs leading-relaxed">
              A space designed to slow down, reconnect, and leave feeling beautifully renewed.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Explore</h4>
            <ul className="space-y-3 font-sans text-sand/80">
              <li><Link to="/" className="hover:text-rose transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-rose transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-rose transition-colors">Services</Link></li>
              <li><Link to="/stylists" className="hover:text-rose transition-colors">Stylists</Link></li>
              <li><Link to="/gallery" className="hover:text-rose transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Services</h4>
            <ul className="space-y-3 font-sans text-sand/80">
              <li><Link to="/services" className="hover:text-rose transition-colors">Hair</Link></li>
              <li><Link to="/services" className="hover:text-rose transition-colors">Color</Link></li>
              <li><Link to="/services" className="hover:text-rose transition-colors">Treatments</Link></li>
              <li><Link to="/services" className="hover:text-rose transition-colors">Makeup</Link></li>
              <li><Link to="/services" className="hover:text-rose transition-colors">Nails</Link></li>
              <li><Link to="/services" className="hover:text-rose transition-colors">Bridal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6">Visit</h4>
            <ul className="space-y-4 font-sans text-sand/80">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-rose shrink-0 mt-0.5" />
                <span>123 Luxury Avenue<br />Bhubaneswar, Odisha<br />India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-rose shrink-0" />
                <span>+91 90000 00000</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-rose shrink-0" />
                <a href="mailto:hello@lumieresalon.com" className="hover:text-rose transition-colors">
                  hello@lumieresalon.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-champagne/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-sand/60 font-sans">
            © 2026 Lumière Salon. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sand/80">
            <a href="#" className="hover:text-rose transition-colors">Instagram</a>
            <a href="#" className="hover:text-rose transition-colors">Facebook</a>
            <a href="#" className="hover:text-rose transition-colors">Twitter</a>
          </div>
          <div className="flex space-x-6 text-sm text-sand/60 font-sans">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
