import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const GoogleReviews = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Rohan Das",
      date: "2 days ago",
      rating: 5,
      text: "One of the most popular cafes in Midnapore. The vibe is amazing and the food is totally worth the price.",
      avatar: "R",
    },
    {
      id: 2,
      name: "Sneha Roy",
      date: "1 week ago",
      rating: 4,
      text: "Great place to hang out with friends. Service is good, just a bit crowded on weekends because it's so popular.",
      avatar: "S",
    },
    {
      id: 3,
      name: "Amit Kumar",
      date: "3 weeks ago",
      rating: 5,
      text: "Love the Momos and the coffee! Best place for evening snacks.",
      avatar: "A",
    },
  ];

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-white/5 rounded-2xl w-full"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-[#202124] p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
              {review.avatar}
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">{review.name}</h4>
              <span className="text-gray-400 text-xs">{review.date}</span>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-5 h-5 ml-auto opacity-70"
            />
          </div>
          <div className="flex text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < review.rating ? "currentColor" : "none"}
                className={i >= review.rating ? "text-gray-600" : ""}
              />
            ))}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {review.text}
          </p>
        </div>
      ))}
    </div>
  );
};

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".anim-up", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white pt-24 pb-10 px-4 md:px-10"
    >
      {/* Header */}
      <div className="text-center mb-16 anim-up">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
          Visit Us
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Good Food. Great Vibes. Every Day.
        </p>
      </div>

      {/* Info Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 anim-up">
        {/* Address Card */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center hover:bg-white/5 transition-colors group">
          <div className="bg-red-600/20 p-4 rounded-full text-red-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            <MapPin size={32} />
          </div>
          <h3 className="text-xl font-bold uppercase mb-2">Location</h3>
          <p className="text-gray-400">
            Raja Bazar, Panchur Chak,
            <br />
            Midnapore, West Bengal 721101
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center hover:bg-white/5 transition-colors group">
          <div className="bg-red-600/20 p-4 rounded-full text-red-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone size={32} />
          </div>
          <h3 className="text-xl font-bold uppercase mb-2">Call Us</h3>
          <p className="text-gray-400">+91 91679 65701</p>
          <p className="text-gray-500 text-sm mt-2">Available 2 PM - 10 PM</p>
        </div>

        {/* Hours Card */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center hover:bg-white/5 transition-colors group">
          <div className="bg-red-600/20 p-4 rounded-full text-red-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Clock size={32} />
          </div>
          <h3 className="text-xl font-bold uppercase mb-2">Open Hours</h3>
          <p className="text-gray-400">Mon - Sun</p>
          <p className="text-white font-bold text-lg">2:00 PM - 10:00 PM</p>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="max-w-5xl mx-auto mb-20 anim-up">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                className="w-6 h-6"
                alt="G"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Rating</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-white font-bold text-xl">4.1</span>
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} className="text-gray-600" />
                </div>
                <span className="text-gray-400 font-medium">
                  (1.1k+ Reviews)
                </span>
              </div>
            </div>
          </div>
          {/* Linked to a Search for the Cafe Address */}
          <a
            href="https://www.google.com/search?q=Raja+Bazar+Panchur+Chak+Midnapore+Cafe"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-bold transition-all"
          >
            Write a Review <ArrowRight size={16} />
          </a>
        </div>

        <GoogleReviews />

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://www.google.com/search?q=Raja+Bazar+Panchur+Chak+Midnapore+Cafe"
            className="text-red-500 font-bold uppercase text-sm tracking-widest flex items-center justify-center gap-2"
          >
            See all reviews on Google <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="anim-up w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
        <div className="absolute inset-0 bg-red-900/10 pointer-events-none z-10 mix-blend-overlay" />

        {/* Corrected iFrame for Raja Bazar, Panchur Chak, Midnapore */}
        <iframe
          title="Wow Wow Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.7664342808214!2d87.32707134508901!3d22.424618151727287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b3bef997d8d%3A0x5fd59483ce07b0f!2sWow%20Wow%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1770534271041!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "invert(90%) hue-rotate(180deg) contrast(90%)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
