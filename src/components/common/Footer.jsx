import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
            Wow Wow <span className="text-red-600">Cafe</span>
          </h2>
          <p className="text-gray-500 max-w-xs">
            The best vibes in Midnapore. Good food, great mood.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold uppercase tracking-wider mb-2">
            Explore
          </h3>
          <Link
            to="/"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            Our Menu
          </Link>
          <Link
            to="/gallery"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Info */}
        <div className="space-y-3">
          <h3 className="text-white font-bold uppercase tracking-wider mb-2">
            Visit Us
          </h3>
          <p className="text-gray-500">Jamunabali Abash, Midnapore, 721101</p>
          <p className="text-gray-500">+91 98765 43210</p>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Wow Wow Cafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
