import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ghost, Candy, Sparkles, Check, Star, Zap, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden relative selection:bg-spooky-purple selection:text-white">
      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[300px] h-[300px] bg-lime-900/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      <HeroSection />
      <GallerySection />
      <PricingSection />
      <Footer />
    </div>
  );
};

// --- Navbar Component ---
const Navbar: React.FC = () => (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/5">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-purple-500 to-orange-500 p-2 rounded-lg">
          <Ghost size={24} className="text-white" />
        </div>
        <span className="font-creepster text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
          Brujita Candy Bar
        </span>
      </div>
      <div className="hidden md:flex gap-6 font-inter text-sm font-medium text-gray-300">
        <a href="#gallery" className="hover:text-purple-400 transition-colors">Conjuros</a>
        <a href="#pricing" className="hover:text-orange-400 transition-colors">Pociones</a>
        <a href="#contact" className="hover:text-lime-400 transition-colors">Contacto</a>
      </div>
    </div>
  </nav>
);

// --- Hero Section ---
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/30 text-purple-300 mb-8">
            <Sparkles size={16} className="text-orange-400 animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Ambientación Spooky-Chic & Eventos</span>
          </div>
        </motion.div>

        <motion.h1
          className="font-creepster text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            Dulces que
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-orange-500 to-purple-500 animate-pulse-slow">
            Hechizan
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transformamos tu evento en una experiencia mágica y misteriosa. 
          Desde fiestas infantiles hasta aquelarres corporativos. 
          ¿Te atreves a probar?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#pricing"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-300 hover:-translate-y-1"
          >
            <Candy className="group-hover:rotate-12 transition-transform" />
            Ver Paquetes Mágicos
            <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-orange-400/50 transition-all" />
          </a>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float opacity-20 hidden md:block">
        <Ghost size={64} className="text-purple-500" />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float opacity-20 hidden md:block" style={{ animationDelay: '1s' }}>
        <Zap size={64} className="text-orange-500" />
      </div>
    </section>
  );
};

// --- Gallery Section ---
const GallerySection: React.FC = () => {
  const images = [
    "https://picsum.photos/id/106/400/400", // Cupcakes
    "https://picsum.photos/id/225/400/600", // Tea party
    "https://picsum.photos/id/292/400/400", // Spices/Potions
    "https://picsum.photos/id/365/400/400", // Flowers/Decor
    "https://picsum.photos/id/429/400/600", // Dark textures
    "https://picsum.photos/id/431/400/400", // Coffee/Treats
  ];

  return (
    <section id="gallery" className="py-24 px-6 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-creepster text-5xl text-purple-400 mb-4 drop-shadow-lg">Nuestros Conjuros</h2>
          <p className="text-gray-400">Eventos recientes que dejaron a todos encantados.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl border border-white/10 ${index === 1 || index === 4 ? 'md:row-span-2 h-full' : 'h-64 md:h-80'}`}
            >
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">Proyecto Reciente</div>
                <h3 className="font-creepster text-2xl text-white">Hechizo #{index + 1}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Pricing Section (Core Logic) ---
const PricingSection: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const handleWhatsAppClick = () => {
    if (!selectedPlanId) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    const plan = PRICING_PLANS.find(p => p.id === selectedPlanId);
    if (!plan) return;

    const message = `Hola Brujita! 🧙‍♀️ Quiero reservar la fecha para el ${plan.title.toUpperCase()}. ¿Me pasas el precio y disponibilidad?`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-24 px-6 relative z-10 bg-slate-900/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-creepster text-5xl text-orange-500 mb-4 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
            Elige tu Poción
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Selecciona el nivel de magia que necesitas. Haz clic en una tarjeta para seleccionarla.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PRICING_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            
            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`
                  relative cursor-pointer rounded-2xl p-8 transition-all duration-300 border-2
                  ${isSelected 
                    ? 'bg-slate-800/80 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)]' 
                    : 'bg-slate-900/50 border-white/5 hover:border-white/20'}
                `}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lime-400 to-green-500 text-slate-950 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star size={12} fill="currentColor" />
                    MÁS POPULAR
                  </div>
                )}

                {isSelected && (
                  <div className="absolute top-4 right-4 bg-purple-500 rounded-full p-1 shadow-lg shadow-purple-500/50 animate-bounce">
                    <Check size={16} className="text-white" />
                  </div>
                )}

                <h3 className={`font-creepster text-3xl mb-2 ${isSelected ? 'text-purple-400' : 'text-white'}`}>
                  {plan.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{plan.subtitle}</p>
                
                <div className="text-4xl font-bold text-white mb-8 tracking-tighter">
                  {plan.price}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className={`mt-1 rounded-full p-0.5 ${isSelected ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-800 text-gray-500'}`}>
                        <Check size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-colors ${isSelected ? 'bg-purple-600 text-white' : 'bg-slate-800 text-gray-500'}`}>
                  {isSelected ? 'Seleccionado' : 'Click para elegir'}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Bar */}
        <div className="fixed bottom-6 left-0 right-0 px-4 z-50 flex justify-center pointer-events-none">
           <motion.button
              animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              onClick={handleWhatsAppClick}
              className={`
                pointer-events-auto shadow-2xl flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95
                ${selectedPlanId 
                  ? 'bg-green-500 hover:bg-green-600 text-white ring-4 ring-green-500/30' 
                  : 'bg-slate-800 text-gray-400 cursor-not-allowed'}
              `}
            >
              {selectedPlanId ? (
                <>
                  <span>Solicitar este Pack</span>
                  <ExternalLink size={20} />
                </>
              ) : (
                <>
                  <span>Selecciona un Pack arriba</span>
                  <span className="text-xs bg-slate-700 px-2 py-0.5 rounded ml-2">Requerido</span>
                </>
              )}
           </motion.button>
        </div>

      </div>
    </section>
  );
};

// --- Footer ---
const Footer: React.FC = () => (
  <footer id="contact" className="bg-slate-950 border-t border-white/5 pt-16 pb-32 md:pb-16">
    <div className="container mx-auto px-6 text-center">
      <div className="flex justify-center items-center gap-3 mb-8">
        <Ghost size={32} className="text-purple-500" />
        <span className="font-creepster text-3xl text-white">Brujita Candy Bar</span>
      </div>
      
      <div className="flex justify-center gap-6 mb-8">
        <a href="#" className="p-3 rounded-full bg-slate-900 text-gray-400 hover:text-purple-500 hover:bg-slate-800 transition-all">
          <Instagram size={24} />
        </a>
        <a href="#" className="p-3 rounded-full bg-slate-900 text-gray-400 hover:text-orange-500 hover:bg-slate-800 transition-all">
          <Facebook size={24} />
        </a>
      </div>
      
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} Brujita Candy Bar. Todos los derechos reservados. <br/>
        Diseñado con magia oscura y código.
      </p>
    </div>
  </footer>
);

export default App;