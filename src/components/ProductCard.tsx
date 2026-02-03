import { useState } from 'react';
import productImage from '@/assets/product-wipes.png';

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
      className="glass-card p-6 flex flex-col items-center gap-4 relative"
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
      <div className="relative w-44 h-44 flex items-center justify-center perspective-600">
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
          className={`relative z-10 w-36 h-36 object-contain drop-shadow-2xl transition-all duration-500 ${
            isHovered ? 'animate-float-product-fast' : 'animate-float-product'
          }`}
          style={{
            animationDelay: `${animationDelay}s`,
            transformStyle: 'preserve-3d',
          }}
        />
      </div>

      {/* Product Info */}
      <div className="text-center space-y-3 w-full">
        <h3 className="font-display text-xl text-white">Premium Wet Wipes</h3>
        
        <span className="inline-block px-3 py-1 rounded-full text-xs font-body text-glacier bg-white/10 border border-white/20">
          Pack of {packSize}
        </span>

        <p className="font-body text-sm text-white/75 leading-relaxed">
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

        {/* Add to Cart Button */}
        <button className="btn-glass w-full mt-2 text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
