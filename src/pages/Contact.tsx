import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import { Phone, Mail, Instagram, Globe, ChevronDown, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`${formData.subject} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:thandakapda@gmail.com?subject=${subject}&body=${body}`, '_self');

    toast.success("Your email client has been opened!", {
      duration: 3500,
    });

    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    setIsSubmitting(false);
  };

  const faqs = [
    {
      question: 'Are your wipes safe for sensitive skin?',
      answer: 'Yes — hypoallergenic, paraben-free, alcohol-free, gentle on all skin types.',
    },
    {
      question: 'How do I place a bulk order?',
      answer: 'Reach out via the contact form above or call directly. Custom bulk pricing available.',
    },
    {
      question: 'Do you ship internationally?',
      answer: "We're expanding globally. Stay tuned and sign up for updates!",
    },
    {
      question: 'What ingredients do you use?',
      answer: 'Only natural, plant-derived ingredients. Aloe vera is at the heart of every wipe.',
    },
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
            Contact Us
          </p>
          
          <h1 
            className="font-display text-[clamp(36px,6vw,68px)] font-bold text-white leading-tight mb-6 opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            Get In Touch
          </h1>
          
          <p 
            className="font-accent italic text-xl text-sage opacity-0 animate-fade-slide-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="section-mist" />

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <ScrollReveal>
              <GlassCard className="p-8 h-full" hover={false}>
                <h3 className="font-display text-2xl text-white mb-2">Reach Us</h3>
                <div className="accent-line w-12 mb-8" />

                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href="tel:+919175540053" 
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-white/20 transition-all duration-300">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/70 uppercase tracking-wide mb-1">Mobile</p>
                      <p className="font-body text-white group-hover:text-glacier transition-colors">+91 91755 40053</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:thandakapda@gmail.com" 
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-white/20 transition-all duration-300">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/70 uppercase tracking-wide mb-1">Email</p>
                      <p className="font-body text-white group-hover:text-glacier transition-colors">thandakapda@gmail.com</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/919175540053?text=Hi%20Thanda%20Kapda%2C%20I%20have%20a%20query." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-[hsl(142,70%,45%)] group-hover:scale-[1.15] group-hover:shadow-[0_0_16px_hsl(142,70%,45%,0.5)] transition-all duration-300">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/70 uppercase tracking-wide mb-1">WhatsApp</p>
                      <p className="font-body text-white group-hover:text-glacier transition-colors">+91 91755 40053</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/thandakapda.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-[44px] h-[44px] rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:bg-glacier group-hover:scale-[1.15] group-hover:shadow-[0_0_16px_hsl(191,64%,85%,0.5)] transition-all duration-300">
                      <Instagram size={18} />
                    </div>
                    <div>
                      <p className="font-body text-xs text-white/70 uppercase tracking-wide mb-1">Instagram</p>
                      <p className="font-body text-white group-hover:text-glacier transition-colors">@thandakapda.co</p>
                    </div>
                  </a>
                </div>

                {/* Available Worldwide mini-card */}
                <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-pine/30 flex items-center justify-center text-glacier">
                      <Globe size={22} />
                    </div>
                    <div>
                      <p className="font-display text-lg text-white">Available Worldwide</p>
                      <p className="font-body text-sm text-white/80">Expanding globally, coming soon near you.</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={150}>
              <GlassCard className="p-8 h-full" hover={false}>
                <h3 className="font-display text-2xl text-white mb-2">Contact Form</h3>
                <div className="accent-line w-12 mb-8" />

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    placeholder="Name"
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
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-glass appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Query">Product Query</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-glass resize-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <a
                    href="https://wa.me/919175540053?text=Hi%20Thanda%20Kapda%2C%20I%20have%20a%20query."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass w-full text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    Or Message on WhatsApp
                  </a>
                </form>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-mist" />

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(28px,4vw,42px)] text-white">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div 
                  className={`glass-card-static p-6 cursor-pointer transition-all duration-400 ${
                    openFaq === index ? 'border-glacier/45' : ''
                  }`}
                  style={{ backdropFilter: 'blur(14px)' }}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-display text-lg text-white">{faq.question}</h4>
                    <ChevronDown 
                      className={`w-5 h-5 text-glacier transition-transform duration-400 flex-shrink-0 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-400 ${
                      openFaq === index ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-body text-white/90 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
