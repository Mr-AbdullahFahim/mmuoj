import { ShoppingCart, MapPin, Bell, Clock, Utensils, Users } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Utensils,
    title: 'Order Suhur & Iftar',
    description: 'Browse menu and order your meals for Suhur and Iftar times during Ramadan.',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Get your food delivered on time before Suhur and at Iftar time.',
    color: 'bg-blue-100 text-blue-600'
  },
  // {
  //   icon: MapPin,
  //   title: 'Real-time Tracking',
  //   description: 'Track your delivery in real-time and know exactly when it arrives.',
  //   color: 'bg-purple-100 text-purple-600'
  // },
  // {
  //   icon: ShoppingCart,
  //   title: 'Easy Ordering',
  //   description: 'Simple and quick ordering process - select meals and checkout in seconds.',
  //   color: 'bg-orange-100 text-orange-600'
  // },
  {
    icon: Bell,
    title: 'Order Notifications',
    description: 'Get updates when your order is confirmed, prepared, and out for delivery.',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: Users,
    title: 'Delivery Partner App',
    description: 'Dedicated app for delivery partners to manage and deliver orders efficiently.',
    color: 'bg-pink-100 text-pink-600'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Everything you need for Ramadan
          </h2>
          <p className="text-xl text-gray-600">
            A complete food delivery solution for Suhur and Iftar during the blessed month.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}