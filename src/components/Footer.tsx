import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-auto">
      {/* Section divider */}
      <div className="section-mist" />
      
      <div className="glass-card-static py-12 px-6 md:px-12 rounded-none border-x-0 border-b-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 64 64" 
                  fill="none"
                >
                  <path
                    d="M32 4C32 4 12 28 12 40C12 52 21 60 32 60C43 60 52 52 52 40C52 28 32 4 32 4Z"
                    fill="hsl(150, 32%, 18%)"
                  />
                  <path
                    d="M32 12C32 12 18 30 18 40C18 48 24 54 32 54"
                    stroke="hsl(135, 18%, 67%)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
                <span className="font-display text-lg font-semibold text-white">
                  THANDA KAPDA
                </span>
              </div>
              <p className="font-accent italic text-white/90 text-sm">
                Essence of Pure Indulgence
              </p>
              <p className="font-body text-sm text-white/90 leading-relaxed max-w-xs">
                Eco-friendly wet wipes inspired by timeless Indian traditions. Pure, natural, and sustainable.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-display text-lg text-white">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/products', label: 'Products' },
                  { to: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="font-body text-sm text-white/80 hover:text-white transition-all duration-300 hover:[text-shadow:0_0_8px_hsl(191,64%,85%)] w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-display text-lg text-white">Contact</h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="tel:+919175540053" 
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span className="font-body text-sm">+91 91755 40053</span>
                </a>
                <a 
                  href="mailto:thandakapda@gmail.com" 
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="font-body text-sm">thandakapda@gmail.com</span>
                </a>
                <a 
                  href="https://www.instagram.com/thandakapda.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-glacier group-hover:scale-115 group-hover:shadow-[0_0_16px_hsl(191,64%,85%,0.5)] transition-all duration-300">
                    <Instagram size={16} />
                  </div>
                  <span className="font-body text-sm">@thandakapda.co</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <p className="font-body text-xs text-white/80">
              © 2026 Thanda Kapda. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
