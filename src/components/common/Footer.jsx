import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-20 pb-10 px-6 md:px-12 relative z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
            Wow Wow <span className="text-orange-600">Cafe</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting memories through food since 2026. <br />
            The heart of Midnapore's culinary scene.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-full hover:bg-orange-600 hover:text-white transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-full hover:bg-orange-600 hover:text-white transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-full hover:bg-orange-600 hover:text-white transition-all"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">
            Explore
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-500 hover:text-orange-500 transition-colors text-sm"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-gray-500 hover:text-orange-500 transition-colors text-sm"
              >
                Our Menu
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-gray-500 hover:text-orange-500 transition-colors text-sm"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-500 hover:text-orange-500 transition-colors text-sm"
              >
                Contact & Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">
            Contact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="shrink-0 text-orange-600" size={18} />
              <span>
                Raja Bazar, Panchur Chak,
                <br />
                Midnapore, 721101
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone className="shrink-0 text-orange-600" size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Mail className="shrink-0 text-orange-600" size={18} />
              <span>hello@wowwowcafe.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">
            Opening Hours
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between text-gray-400">
              <span>Mon - Fri</span>
              <span className="text-white">11:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between text-gray-400">
              <span>Sat - Sun</span>
              <span className="text-white">10:00 AM - 11:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© 2026 Wow Wow Cafe. All rights reserved.</p>
        <p>Designed with ❤️ in Midnapore.</p>
      </div>
    </footer>
  );
};

export default Footer;
