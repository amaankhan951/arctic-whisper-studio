import { useState } from 'react';
import productImage from '@/assets/thanda-kapda-product.jpg';

interface ProductCardProps {
  packSize: number;
  price: string;
  isPopular?: boolean;
  animationDelay: number;
}

const ProductCard = ({ packSize, price, isPopular = false, animationDelay }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass-card p-8 flex flex-col items-center gap-6 relative w-full max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-2 -right-2 bg-pine text-white text-[11px] font-body uppercase tracking-wide px-3 py-1 rounded-full transform -rotate-2 shadow-lg z-10">
          Most Popular
        </div>
      )}

      {/* 3D Product Showcase */}
      <div className="relative w-56 h-56 flex items-center justify-center perspective-600">
        {/* Ambient Glow */}
        <div 
          className={`absolute inset-0 rounded-full blur-2xl transition-all duration-500 ${
            isHovered ? 'animate-pulse-glow-fast' : 'animate-pulse-glow'
          }`}
          style={{
            background: 'radial-gradient(circle, hsl(191, 64%, 85%, 0.4) 0%, transparent 70%)',
          }}
        />
        
        {/* Product Image */}
        <img
          src={productImage}
          alt={`Premium Wet Wipes Pack of ${packSize}`}
          className={`relative z-10 w-48 h-48 object-contain drop-shadow-2xl transition-all duration-500 ${
            isHovered ? 'animate-float-product-fast' : 'animate-float-product'
          }`}
          style={{
            animationDelay: `${animationDelay}s`,
            transformStyle: 'preserve-3d',
          }}
        />
      </div>

      {/* Product Info */}
      <div className="text-center space-y-4 w-full">
        <h3 className="font-display text-2xl text-white">Premium Wet Wipes</h3>
        
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-body text-glacier bg-white/10 border border-white/20">
          Pack of {packSize}
        </span>

        <p className="font-body text-sm text-white leading-relaxed">
          Infused with natural aloe extracts to gently cleanse and refresh your skin.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {['Paraben-Free', 'Alcohol-Free', 'Eco-Pack'].map((badge) => (
            <span key={badge} className="feature-badge">
              {badge}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="font-display text-3xl font-bold text-white pt-2">{price}</p>

        {/* Buy Now Button */}
        <a 
          href="https://www.amazon.in/dp/B0G1KN6Y55?th=1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-glass w-full mt-2 text-sm inline-block text-center"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
