import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Bike, PackageCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function AppShowcase() {
  return (
    <section id="delivery-partner" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div 
            className="relative"
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
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-gray-900">
              For delivery partners
            </h2>
            
            <p className="text-xl text-gray-600">
              Join us as a delivery partner this Ramadan and help deliver meals to fellow students. Use the dedicated delivery partner app to manage orders.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PackageCheck size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Manage deliveries</h3>
                  <p className="text-gray-600">Accept orders, view delivery details, and update order status in real-time.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bike size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Optimized routes</h3>
                  <p className="text-gray-600">Get the best routes to deliver multiple orders efficiently.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">Serve the community</h3>
                  <p className="text-gray-600">Earn rewards while serving fellow students during the blessed month.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <motion.a 
                href="#download"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download App</span>
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