import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Leaf, Snowflake, Globe, Users, Dumbbell, Plane, Briefcase, Recycle, Heart, MessageCircle, UtensilsCrossed } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { toast } from 'sonner';
import storefrontImage from '@/assets/storefront.jpg';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showChevron, setShowChevron] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setShowChevron(false);
    }
  };

  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Appointment Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nPreferred Date: ${formData.date || 'N/A'}\n\nMessage:\n${formData.message || 'N/A'}`
    );
    window.open(`mailto:thandakapda@gmail.com?subject=${subject}&body=${body}`, '_self');

    toast.success("Thank you! Your email client has been opened.", {
      duration: 3500,
    });

    setFormData({ name: '', email: '', phone: '', date: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-dark-veil z-[2]" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-20">
          <p 
            className="font-body text-[11px] tracking-[3.5px] uppercase text-glacier mb-6 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Welcome to Thanda Kapda
          </p>
          
          <h1 
            className="font-display text-[clamp(30px,5.5vw,62px)] font-bold text-white leading-tight mb-6 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            A Cool Touch of Tradition in a Modern World.
          </h1>
          
          <p 
            className="font-accent italic text-[clamp(17px,2.2vw,23px)] text-white/95 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            Eco-friendly, paraben-free, and alcohol-free wet wipes inspired by timeless Indian rituals.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
          >
            <Link to="/products" className="btn-glass">
              Our Products
            </Link>
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Chevron */}
        {showChevron && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float-chevron transition-opacity duration-500">
            <ChevronDown className="w-8 h-8 text-white/85" />
          </div>
        )}
      </section>

      {/* Section Mist Divider */}
      <div className="section-mist" />

      {/* Why Choose Section */}
      <section className="relative z-10 py-20 px-6" style={{ background: 'linear-gradient(180deg, rgba(10,18,22,0.6) 0%, rgba(10,18,22,0.4) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(28px,4vw,46px)] text-white mb-4">
              Why Choose Thanda Kapda?
            </h2>
            <p className="font-accent italic text-xl text-white">
              Rooted in nature. Refined for you.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Pure & Natural',
                description: 'Crafted with nature\'s finest ingredients. Zero parabens. Zero alcohol. Just clean, honest care.',
                delay: 0,
              },
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: 'The Cool Ritual',
                description: 'Inspired by generations of Indian wellness traditions. A refreshing experience your skin deserves.',
                delay: 150,
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Eco Conscious',
                description: 'Recyclable packaging. Cruelty-free. Built for a planet we all share.',
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <GlassCard className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pine/30 flex items-center justify-center text-glacier">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-white leading-relaxed">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-mist" />

      {/* What We Offer Section */}
      <section className="relative z-10 py-20 px-6" style={{ background: 'linear-gradient(180deg, rgba(10,18,22,0.5) 0%, rgba(10,18,22,0.35) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(28px,4vw,46px)] text-white">
              What We Offer
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Storefront Image Card */}
            <ScrollReveal className="lg:row-span-2">
              <GlassCard className="h-full overflow-hidden group">
                <div className="relative h-full min-h-[400px] overflow-hidden">
                  <img
                    src={storefrontImage}
                    alt="Thanda Kapda Storefront"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <GlassCard className="p-8">
                <h3 className="font-display text-2xl text-white mb-4">Cooling Rituals</h3>
                <p className="font-body text-white leading-relaxed">
                  Wet wipes designed to refresh, restore, and reconnect you with the ancient art of care.
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <GlassCard className="p-8">
                <h3 className="font-display text-2xl text-white mb-4">Sustainable Living</h3>
                <p className="font-body text-white leading-relaxed">
                  Every product is a step toward a cleaner, greener tomorrow. No compromises on quality.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-mist" />

      {/* Segments Section */}
      <section className="relative z-10 py-20 px-6" style={{ background: 'linear-gradient(180deg, rgba(10,18,22,0.55) 0%, rgba(10,18,22,0.4) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(28px,4vw,46px)] text-white">
              Segments We Serve
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-7 h-7" />, title: 'Families', description: 'Safe, gentle care for every member of your household.', delay: 0 },
              { icon: <Dumbbell className="w-7 h-7" />, title: 'Athletes & Fitness', description: 'Quick refresh after workouts. Cool. Clean. Instant.', delay: 100 },
              { icon: <Plane className="w-7 h-7" />, title: 'Travelers', description: 'Compact, hygienic, and always ready on the go.', delay: 200 },
              { icon: <Briefcase className="w-7 h-7" />, title: 'Professionals', description: 'Stay fresh and confident throughout your day.', delay: 300 },
              { icon: <UtensilsCrossed className="w-7 h-7" />, title: 'Restaurants & Caterers', description: 'Hygienic, premium wipes for dining and hospitality.', delay: 400 },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <GlassCard className="p-6 text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pine/30 flex items-center justify-center text-glacier">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-white">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-mist" />

      {/* Sustainability Section */}
      <section className="relative z-10 py-20 px-6" style={{ background: 'linear-gradient(180deg, rgba(10,18,22,0.6) 0%, rgba(10,18,22,0.45) 100%)' }}>
        <div className="absolute inset-0" />
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(28px,4vw,46px)] text-white mb-4">
              Sustainability with Soul
            </h2>
            <div className="accent-line w-10 mx-auto animate-[width_0.6s_ease-out]" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Recycle className="w-8 h-8" />, title: 'Recyclable Packaging', description: 'Environmentally conscious packaging that reduces waste.', delay: 0 },
              { icon: <Leaf className="w-8 h-8" />, title: 'Natural Ingredients', description: 'No alcohol, no parabens, just pure goodness.', delay: 200 },
              { icon: <Heart className="w-8 h-8" />, title: 'Cruelty Free', description: 'Never tested on animals, always kind to nature.', delay: 400 },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <GlassCard className="p-8 text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-pine/30 flex items-center justify-center text-glacier">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-white">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-mist" />

      {/* Book Appointment Section */}
      <section className="relative z-10 py-20 px-6" style={{ background: 'linear-gradient(180deg, rgba(10,18,22,0.5) 0%, rgba(10,18,22,0.4) 100%)' }}>
        <div className="max-w-xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <h2 className="font-display text-[clamp(28px,4vw,46px)] text-white mb-4">
              Book an Appointment
            </h2>
            <p className="font-accent italic text-lg text-white">
              Talk to our wellness experts and find the perfect routine for you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlassCard className="p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-glass"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-glass"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-glass"
                />
                <input
                  type="date"
                  placeholder="Preferred Date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="input-glass"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-glass resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? '✓ Booked!' : 'Book Now'}
                </button>
                <a
                  href="https://wa.me/919175540053?text=Hi%20Thanda%20Kapda%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass w-full text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  Or Book via WhatsApp
                </a>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
