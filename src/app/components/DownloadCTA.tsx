import { useState } from 'react';
import { Download, Shield, CheckCircle2, Zap, ArrowRight, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DownloadCTA() {
  const [showThankYou, setShowThankYou] = useState(false);

  // Function to handle programmatic download
  const handleDownload = () => {
    const fileUrl = '/assets/majlisGo.apk';
    const fileName = 'majlisGo-v1.0.0.apk';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show the thank you popup
    setShowThankYou(true);
  };

  return (
    <section id="download" className="relative py-24 bg-[#064e3b] overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Value Proposition */}
          <div className="flex-1 text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-sm font-medium"
            >
              <Zap size={14} />
              <span>Latest Release: v1.0.0</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              One App. <br />
              <span className="text-emerald-400 font-serif italic">Infinite</span> Blessings.
            </h2>
            
            <p className="text-xl text-emerald-50/80 max-w-lg leading-relaxed">
              Experience a seamless Ramadan. **majlisGo** brings students and delivery partners together in a single, powerful platform. 
            </p>

            <ul className="space-y-4 text-white/90">
              {[
                "Real-time Suhur & Iftar tracking",
                "Integrated Partner delivery portal",
                "Lightweight & Battery efficient"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: The "Hero" App Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full max-w-[400px]"
          >
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative bg-[#0a2e26]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
                {/* App Brand Header */}
                <div className="flex flex-col items-center text-center mb-10">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center mb-6 overflow-hidden border-4 border-emerald-900/20"
                  >
                    {/* Icon container - full cover */}
                    <div className="w-full h-full relative">
                      <ImageWithFallback 
                        src='/assets/icon.png' 
                        alt='majlisGo app icon'
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">majlisGo</h3>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-400/80 tracking-widest uppercase">Version 1.0.0</span>
                  </div>
                </div>

                {/* Role badges */}
                <div className="flex gap-2 mb-8">
                  <div className="flex-1 bg-white/5 rounded-xl p-3 text-center border border-white/5">
                    <p className="text-[10px] uppercase tracking-tighter text-white/50 mb-1">Students</p>
                    <p className="text-xs font-semibold text-white">Order</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-xl p-3 text-center border border-white/5">
                    <p className="text-[10px] uppercase tracking-tighter text-white/50 mb-1">Partners</p>
                    <p className="text-xs font-semibold text-white">Deliver</p>
                  </div>
                </div>

                {/* Action Area */}
                <div className="space-y-4">
                  <motion.button 
                    onClick={handleDownload}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative flex items-center justify-center space-x-3 px-6 py-5 bg-emerald-500 hover:bg-emerald-400 text-[#064e3b] rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
                  >
                    <Download size={22} className="stroke-[2.5px]" />
                    <span className="font-bold text-lg">Download (APK)</span>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </motion.button>
                  
                  <div className="flex items-center justify-center space-x-2 text-white/40 text-[10px]">
                    <Shield size={12} />
                    <span>Verified & Safe • 89.7 MB • Android 8+</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { step: "01", text: "Download APK" },
            { step: "02", text: "Enable Unknown Sources" },
            { step: "03", text: "Run Installation" },
            { step: "04", text: "Choose your Role" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-4 group">
              <span className="text-2xl font-black text-white/10 group-hover:text-emerald-400/20 transition-colors">
                {item.step}
              </span>
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Step</span>
                <span className="text-white/90 text-sm font-medium leading-tight">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thank You Popup Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowThankYou(false)} // Close when clicking backdrop
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
              className="bg-[#0a2e26] border border-emerald-500/20 p-8 rounded-[2rem] shadow-2xl max-w-sm w-full relative text-center overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-emerald-500/20 blur-[60px]" />

              <button 
                onClick={() => setShowThankYou(false)}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20">
                  <Heart className="fill-emerald-400/20" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">Shukran!</h3>
                <p className="text-emerald-100/70 mb-6">
                  Your download has started. May this app bring ease to your Ramadan.
                </p>
                
                <button 
                  onClick={() => setShowThankYou(false)}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-[#064e3b] font-bold rounded-xl transition-colors"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}