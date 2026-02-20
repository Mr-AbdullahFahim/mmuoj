import { Download, Utensils, ShoppingCart, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import { FloatingShapes } from './FloatingShapes';

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Download majlisGo',
    description: 'Download the app from this page and create your student account.'
  },
  {
    icon: Utensils,
    number: '02',
    title: 'Browse the menu',
    description: 'View available Suhur and Iftar meal options for the day.'
  },
  {
    icon: ShoppingCart,
    number: '03',
    title: 'Place your order',
    description: 'Select your meals, add delivery details, and confirm your order.'
  },
  {
    icon: Truck,
    number: '04',
    title: 'Receive your food',
    description: 'Track delivery in real-time and receive your meal on time.'
  }
];

export function HowItWorks() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 md:mb-4 leading-tight">
            How to order
          </h2>
          <p className="text-base sm:text-xl text-gray-600 px-2">
            Ordering your Ramadan meals is simple and convenient.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center bg-white sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none shadow-sm sm:shadow-none border border-gray-100 sm:border-none"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="relative inline-block mb-5 sm:mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-md">
                    <Icon className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-50">
                    <span className="text-emerald-600 text-xs sm:text-sm font-bold">{step.number}</span>
                  </div>
                </motion.div>
                <h3 className="text-lg sm:text-xl text-gray-900 font-semibold mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}