import { Download, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedBackground } from './AnimatedBackground';

export function Hero() {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm">
              <span className="mr-2">🌙</span>
              Ramadan 2026 - University of Jaffna
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900">
              Suhur & Iftar
              <span className="block text-emerald-600">delivered to you</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Order delicious Suhur and Iftar meals during Ramadan. Delivered by the Muslim Majlis of University of Jaffna to make your fasting easier.
            </p>

            {/* Download Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#download" 
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors shadow-lg"
              >
                <Download size={24} />
                <span className="text-lg">Download App</span>
              </a>
              
              <a 
                href="#delivery-partner"
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-white border-2 border-emerald-600 text-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors"
              >
                <Smartphone size={24} />
                <span className="text-lg">For Delivery Partners</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl text-gray-900">Suhur</div>
                <div className="text-sm text-gray-600">Pre-dawn meals</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">Iftar</div>
                <div className="text-sm text-gray-600">Breaking fast meals</div>
              </div>
              <div>
                <div className="text-3xl text-gray-900">Free</div>
                <div className="text-sm text-gray-600">Delivery Service</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 rounded-3xl blur-3xl"></div>
            <ImageWithFallback 
              src="/assets/hero.png"
              alt="Food delivery during Ramadan"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}