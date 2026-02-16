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
    <section id="about" className="relative py-20 bg-gray-50 overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            How to order
          </h2>
          <p className="text-xl text-gray-600">
            Ordering your Ramadan meals is simple and convenient.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <motion.div 
                  className="relative inline-block mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-emerald-600 text-sm">{step.number}</span>
                  </div>
                </motion.div>
                <h3 className="text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}