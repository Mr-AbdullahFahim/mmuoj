import { Download, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedBackground } from './AnimatedBackground';

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 md:pt-36 md:pb-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center sm:text-left pt-4 sm:pt-0">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-100 rounded-full text-emerald-700 text-xs sm:text-sm font-medium">
              <span className="mr-2 text-sm sm:text-base">🌙</span>
              Ramadan 2026 - University of Jaffna
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Suhur & Iftar
              <span className="block text-emerald-600 mt-2">delivered to you</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto sm:mx-0 leading-relaxed">
              Order delicious Suhur and Iftar meals during Ramadan. Delivered by the Muslim Majlis of University of Jaffna to make your fasting easier.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#download" 
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 sm:px-8 py-4 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
              >
                <Download size={22} className="sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Download App</span>
              </a>
              
              <a 
                href="#delivery-partner"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 sm:px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <Smartphone size={22} className="sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">For Delivery Partners</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:flex sm:gap-8 pt-6 sm:pt-8 border-t border-gray-100">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">Suhur</div>
                <div className="text-[10px] sm:text-sm text-gray-500 mt-1 uppercase tracking-wide">Pre-dawn meals</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">Iftar</div>
                <div className="text-[10px] sm:text-sm text-gray-500 mt-1 uppercase tracking-wide">Breaking fast</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">Free</div>
                <div className="text-[10px] sm:text-sm text-gray-500 mt-1 uppercase tracking-wide">Delivery Service</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl sm:blur-3xl"></div>
            <ImageWithFallback 
              src="/assets/hero.png"
              alt="Food delivery during Ramadan"
              className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}