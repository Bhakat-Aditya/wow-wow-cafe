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

  // Fake "Loading" delay to make it feel like an API call
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sritama Mondal",
      date: "2 days ago",
      rating: 5,
      text: "The best cafe in Midnapore! The ambiance is so aesthetic and the Chicken Momos are juicy. loved it! ❤️",
      avatar: "S",
    },
    {
      id: 2,
      name: "Rahul Ghosh",
      date: "1 week ago",
      rating: 5,
      text: "Finally a good place to hang out with friends. The Blue Lagoon mocktail is a must try. Highly recommended.",
      avatar: "R",
    },
    {
      id: 3,
      name: "Priya Das",
      date: "3 weeks ago",
      rating: 4,
      text: "Great food and lovely decoration. Service is a bit slow but worth the wait for the fresh food.",
      avatar: "P",
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

      {/* Info Cards (Centered) */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 anim-up">
        {/* Address */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center hover:bg-white/5 transition-colors group">
          <div className="bg-red-600/20 p-4 rounded-full text-red-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            <MapPin size={32} />
          </div>
          <h3 className="text-xl font-bold uppercase mb-2">Location</h3>
          <p className="text-gray-400">
            Jamunabali Abash,
            <br />
            Midnapore, 721101
          </p>
        </div>

        {/* Phone */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center hover:bg-white/5 transition-colors group">
          <div className="bg-red-600/20 p-4 rounded-full text-red-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone size={32} />
          </div>
          <h3 className="text-xl font-bold uppercase mb-2">Call Us</h3>
          <p className="text-gray-400">+91 98765 43210</p>
          <p className="text-gray-500 text-sm mt-2">Available 10 AM - 10 PM</p>
        </div>

        {/* Hours */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center hover:bg-white/5 transition-colors group">
          <div className="bg-red-600/20 p-4 rounded-full text-red-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Clock size={32} />
          </div>
          <h3 className="text-xl font-bold uppercase mb-2">Open Hours</h3>
          <p className="text-gray-400">Mon - Sun</p>
          <p className="text-white font-bold text-lg">11:00 AM - 10:00 PM</p>
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
                <span className="text-white font-bold">4.8</span>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <span>(128 Reviews)</span>
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-bold transition-all"
          >
            Write a Review <ArrowRight size={16} />
          </a>
        </div>

        {/* The Review Grid */}
        <GoogleReviews />

        <div className="mt-8 text-center md:hidden">
          <a
            href="https://www.google.com/maps"
            className="text-red-500 font-bold uppercase text-sm tracking-widest flex items-center justify-center gap-2"
          >
            See all reviews on Google <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="anim-up w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
        <div className="absolute inset-0 bg-red-900/10 pointer-events-none z-10 mix-blend-overlay" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1313543989513!2d87.32471971105643!3d22.424081338311957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b3bef997d8d%3A0x5fd59483ce07b0f!2sWow%20Wow%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1770457400385!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
