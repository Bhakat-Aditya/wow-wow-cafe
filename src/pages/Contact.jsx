import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, Mail, Clock, Star, Send } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".contact-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      // Left Side (Info) Slide In
      gsap.from(".info-card", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: "power2.out"
      });

      // Right Side (Form) Slide In
      gsap.from(".contact-form", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
      });

      // Map Fade In
      gsap.from(".map-container", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white pt-24 pb-10 px-4 md:px-10 overflow-x-hidden">
      
      {/* Header */}
      <div className="text-center mb-16 contact-title">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
          Get in Touch
        </h1>
        <p className="text-gray-400 mt-4 text-lg">We'd love to hear from you.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* Left Col: Info & Reviews */}
        <div className="space-y-8">
          
          {/* Info Card */}
          <div className="info-card bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-red-500/30 transition-colors">
            <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">Contact Info</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-full text-red-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase font-bold tracking-wider">Address</p>
                  <p className="text-xl font-medium">Jamunabali Abash, Midnapore, 721101</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-full text-red-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-xl font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-full text-red-500">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase font-bold tracking-wider">Opening Hours</p>
                  <p className="text-lg">Mon - Sun: 11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Card */}
          <div className="info-card bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wide flex items-center gap-3">
              Customer Love <Star className="fill-yellow-400 text-yellow-400" />
            </h3>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl font-bold">4.8</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-gray-500 text-sm ml-2">(120+ Reviews)</span>
            </div>
            
            <div className="italic text-gray-400 border-l-2 border-red-500 pl-4">
              "The Chicken Steam Momos are to die for! Best cafe vibe in Midnapore hands down."
              <br />
              <span className="text-red-400 not-italic font-bold text-sm mt-2 block">- Priya Das</span>
            </div>
          </div>

        </div>

        {/* Right Col: Form */}
        <div className="contact-form bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl h-full">
          <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">Send a Message</h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase">Phone</label>
                <input type="tel" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Your Number" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase">Email</label>
              <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="name@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase">Message</label>
              <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 transition-colors resize-none" placeholder="Tell us what you loved..."></textarea>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
         {/* Dark Mode Overlay for Map to make it look "Industry Grade" */}
        <div className="absolute inset-0 bg-red-900/10 pointer-events-none z-10 mix-blend-overlay" />
        
        <iframe 
          title="Wow Wow Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.627785507567!2d87.3082!3d22.4257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI1JzMyLjUiTiA4N8KwMTgnMjkuNSJF!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;