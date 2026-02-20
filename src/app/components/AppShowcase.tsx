import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Bike, PackageCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function AppShowcase() {
  return (
    <section id="delivery-partner" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Image */}
          <motion.div 
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 to-teal-400/10 rounded-3xl blur-3xl"></div>
            <ImageWithFallback 
              src="/assets/delivery.png"
              alt="Delivery partner"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="space-y-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight">
              For delivery partners
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600">
              Join us as a delivery partner this Ramadan and help deliver meals to fellow students. Use the dedicated delivery partner app to manage orders.
            </p>

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <PackageCheck size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-gray-900 font-medium mb-1">Manage deliveries</h3>
                  <p className="text-sm sm:text-base text-gray-600">Accept orders, view delivery details, and update order status in real-time.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Bike size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-gray-900 font-medium mb-1">Optimized routes</h3>
                  <p className="text-sm sm:text-base text-gray-600">Get the best routes to deliver multiple orders efficiently.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg text-gray-900 font-medium mb-1">Serve the community</h3>
                  <p className="text-sm sm:text-base text-gray-600">Earn rewards while serving fellow students during the blessed month.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <motion.a 
                href="#download"
                className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                <span className="font-medium">Download App</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Download({ size }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}