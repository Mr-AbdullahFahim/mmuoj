import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-60 h-60 md:w-80 md:h-80 bg-emerald-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 -left-20 md:top-60 md:-left-40 w-72 h-72 md:w-96 md:h-96 bg-teal-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 md:bottom-40 md:right-60 w-56 h-56 md:w-72 md:h-72 bg-emerald-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-emerald-200/30 text-2xl md:text-4xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌙
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 text-teal-200/30 text-xl md:text-3xl"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 text-emerald-200/30 text-xl md:text-3xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        🍽️
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/3 text-teal-200/30 text-lg md:text-2xl"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        🕌
      </motion.div>
    </div>
  );
}