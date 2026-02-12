import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import ProductCard from '@/components/ProductCard';
import { Droplets, Leaf, Package } from 'lucide-react';

const Products = () => {
  const products = [
    { packSize: 25, price: '₹150', isPopular: false, animationDelay: 0 },
    { packSize: 100, price: '₹1,600', isPopular: true, animationDelay: 2.2 },
    { packSize: 500, price: '₹3,000', isPopular: false, animationDelay: 4.5 },
    { packSize: 1000, price: '₹10,000', isPopular: false, animationDelay: 6.8 },
  ];

  return (
    <div className="relative min-h-screen pt-32">
      {/* Hero Section */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className="font-body text-[11px] tracking-[3.5px] uppercase text-glacier mb-6 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Our Collection
          </p>
          
          <h1 
            className="font-display text-[clamp(36px,6vw,68px)] font-bold text-white leading-tight mb-6 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            Our Products
          </h1>
          
          <p 
            className="font-accent italic text-xl text-sage opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            Pure. Natural. Premium.
          </p>
        </div>
      </section>

      <div className="section-mist" />

      {/* Products Grid Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(28px,4vw,42px)] text-white mb-4">
              Premium Wet Wipes
            </h2>
            <p className="font-body text-white/90 max-w-xl mx-auto">
              Infused with natural aloe extracts to gently cleanse and refresh your skin.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ScrollReveal key={product.packSize} delay={index * 120}>
                <ProductCard
                  packSize={product.packSize}
                  price={product.price}
                  isPopular={product.isPopular}
                  animationDelay={product.animationDelay}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-mist" />

      {/* Why Different Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(28px,4vw,42px)] text-white">
              Why Our Wipes Are Different
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Droplets className="w-8 h-8" />,
                title: 'Aloe-Infused',
                description: 'Real aloe vera extracts, not synthetic.',
                delay: 0,
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Chemical-Free',
                description: 'Zero parabens, zero alcohol, zero compromise.',
                delay: 150,
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: 'Eco Packaging',
                description: 'Fully recyclable. Designed for the planet.',
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <GlassCard className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pine/30 flex items-center justify-center text-glacier">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-white/90">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
