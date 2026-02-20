import { motion } from 'motion/react';

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-10 left-5 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 border-2 border-emerald-300/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-24 right-5 md:top-40 md:right-20 w-10 h-10 md:w-16 md:h-16 border-2 border-teal-300/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-24 left-10 md:bottom-40 md:left-20 w-16 h-16 md:w-24 md:h-24 border-2 border-emerald-300/20"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          rotate: [0, 180, 360],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 md:bottom-20 md:right-40 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-xl"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particle-like dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}