import React, { useState } from 'react';
import { Facebook, Instagram, Mail, ArrowUpRight, Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const closeModal = () => setModalContent(null);

  // Defined links to match your specific IDs
  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How to Order', href: '#about' },
    { name: 'Download', href: '#download' },
    { name: 'Delivery Partners', href: '#delivery-partner' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-transparent rounded-xl flex items-center justify-center overflow-hidden">
                <ImageWithFallback 
                  src='./../../../assets/logo.png' 
                  alt='MMUoJ logo' 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white uppercase">MMUoJ</h2>
                <div className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-500/80 font-mono tracking-widest uppercase">Official Platform</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              An initiative by the <span className="text-white font-medium">Muslim Majlis, University of Jaffna</span> to streamline Suhur and Iftar meal distribution for students during the holy month.
            </p>

            <div className="flex space-x-3">
              {[
                { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
                { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
                { icon: <Mail size={18} />, label: "Email", href: "mailto:majlis@univ.jfn.ac.lk" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Corrected */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500 mb-8">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white flex items-center group text-sm transition-colors"
                  >
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-emerald-500" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-500 mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <a href="mailto:majlis@univ.jfn.ac.lk" className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-emerald-600/10 border border-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Email Us</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors">majlis@univ.jfn.ac.lk</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-emerald-600/10 border border-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    University of Jaffna,<br/>
                    Sir Ponnampalam Ramanathan Rd,<br/>
                    Jaffna, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} <span className="text-gray-300 font-medium">Muslim Majlis University of Jaffna</span>.
          </p>
          <div className="flex items-center space-x-8 text-xs font-medium text-gray-500 uppercase tracking-widest">
            <button onClick={() => setModalContent('privacy')} className="hover:text-emerald-500 transition-colors">Privacy</button>
            <button onClick={() => setModalContent('terms')} className="hover:text-emerald-500 transition-colors">Terms</button>
            <a href="#" className="hover:text-emerald-500 transition-colors">Majlis Website</a>
          </div>
        </div>
      </div>

      {/* Modal Pop-up Implementation */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[80vh] bg-gray-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <h3 className="text-xl font-bold text-emerald-500">
                  {modalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
                <button onClick={closeModal} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto text-gray-300 text-sm space-y-6 custom-scrollbar">
                {modalContent === 'privacy' ? <PrivacyBody /> : <TermsBody />}
              </div>

              <div className="p-4 border-t border-white/5 bg-gray-950/50 flex justify-end">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}

const PrivacyBody = () => (
  <div className="space-y-4">
    <p className="text-xs text-gray-500">Effective: 2025/02/xx | Last updated: 2025/02/xx</p>
    <section>
      <h4 className="text-white font-semibold mb-2">1. Data Collection</h4>
      <p>We collect Full name, Email, Mobile/WhatsApp number, and Faculty details. For verification, we collect University ID card images{/* which are deleted within 30 days of verification*/}.</p>
    </section>
    <section>
      <h4 className="text-white font-semibold mb-2">2. Location Data</h4>
      <p>Foreground location is accessed only during active delivery sessions to support navigation and confirm delivery points via Supabase and Google Maps API.</p>
    </section>
    <section>
      <h4 className="text-white font-semibold mb-2">3. Payments</h4>
      <p>MajlisGo uses offline payments only. We do not collect or store bank/card credentials.</p>
    </section>
    <section>
      <h4 className="text-white font-semibold mb-2">4. Security</h4>
      <p>We use email OTP verification and secure backend storage with access limited to authorized admins only.</p>
    </section>
    <p className="text-xs">Contact: uoj.muslimmajlis@gmail.com</p>
  </div>
);

const TermsBody = () => (
  <div className="space-y-4">
    <p className="text-xs text-gray-500">Effective: 2025/02/xx</p>
    <section>
      <h4 className="text-white font-semibold mb-2">1. Eligibility</h4>
      <p>Users must provide accurate university details. Impersonation or uploading fraudulent ID cards will lead to immediate account suspension.</p>
    </section>
    <section>
      <h4 className="text-white font-semibold mb-2">2. Acceptable Use</h4>
      <p>You must not place fake requests, harass delivery partners, or attempt to bypass app security measures.</p>
    </section>
    <section>
      <h4 className="text-white font-semibold mb-2">3. Disclaimers</h4>
      <p>The service is provided "as-is". Delivery times are estimated and not guaranteed. Muslim Majlis is not liable for network or operational delays.</p>
    </section>
    <section>
      <h4 className="text-white font-semibold mb-2">4. Governing Law</h4>
      <p>These terms are governed by the laws of Sri Lanka.</p>
    </section>
  </div>
);