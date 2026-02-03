import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { Leaf, Globe, Heart } from 'lucide-react';
import ourStoryImage from '@/assets/our-story-woman.png';

const About = () => {
  return (
    <div className="relative min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className="font-body text-[11px] tracking-[3.5px] uppercase text-glacier mb-6 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            About Us
          </p>
          
          <h1 
            className="font-display text-[clamp(36px,6vw,68px)] font-bold text-white leading-tight mb-6 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            Our Story
          </h1>
          
          <p 
            className="font-accent italic text-xl text-sage opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Where tradition meets innovation.
          </p>
        </div>
      </section>

      <div className="section-mist" />

      {/* Story Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Image Card */}
            <ScrollReveal className="h-full">
              <GlassCard className="h-full overflow-hidden group">
                <div className="relative h-full min-h-[500px] overflow-hidden">
                  <img
                    src={ourStoryImage}
                    alt="Our Story - Traditional Indian Heritage"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {/* Warm tone overlay */}
                  <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay" />
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Text Card */}
            <ScrollReveal delay={150} className="h-full">
              <GlassCard className="p-8 lg:p-10 h-full" hover={false}>
                {/* Pull Quote */}
                <div className="border-l-[3px] border-pine pl-6 mb-8">
                  <p className="font-accent italic text-xl lg:text-2xl text-white/90 leading-relaxed">
                    In every Indian household, there's a memory tied to the simplest act of care.
                  </p>
                </div>

                {/* Body Text */}
                <div className="space-y-5 font-body text-base text-white/88 leading-[1.85]">
                  <p>
                    A mother gently placing a damp cloth on her child's forehead, a grandfather wiping his hands before sharing a mango, or a sibling passing a cool towel after an afternoon of cricket in the sun.
                  </p>
                  <p>
                    These aren't just routines — they're rituals of love, of refreshment, of connection. And at the heart of each moment? The humble <span className="text-glacier font-medium">thanda kapda</span>.
                  </p>
                  <p>
                    At Thanda Kapda Co., we didn't invent the idea — we simply reimagined it. Inspired by these timeless acts of care, we created a brand that honors the past while embracing the future.
                  </p>
                  <p>
                    We're rooted in Indian heritage but built for a global generation. We take the wisdom of our ancestors — who used nature's simplest gifts to cleanse and comfort — and give it a fresh, modern twist.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-mist" />

      {/* Values Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(28px,4vw,46px)] text-white">
              What We Stand For
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Heritage',
                description: 'Honoring centuries of Indian wellness wisdom.',
                delay: 0,
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Sustainability',
                description: 'Building a future that\'s kind to the earth.',
                delay: 150,
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Purity',
                description: 'Uncompromising on ingredients, quality, and care.',
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <GlassCard className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pine/30 flex items-center justify-center text-glacier">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-white/75">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-mist" />

      {/* Vision Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <GlassCard className="p-10 text-center" hover={false}>
              <h3 className="font-display text-2xl text-white mb-4">Our Vision</h3>
              <div className="accent-line w-16 mx-auto mb-6" />
              <p className="font-accent italic text-xl text-white/85 leading-relaxed">
                "To become the world's most trusted name in natural, sustainable personal care — rooted in Indian tradition, loved globally."
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
