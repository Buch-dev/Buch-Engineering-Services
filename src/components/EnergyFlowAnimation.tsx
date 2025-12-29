'use client';

import { motion } from 'framer-motion';

export default function EnergyFlowAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Energy particles flowing from solar panel */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            top: `${20 + i * 10}%`,
            left: '80%',
          }}
          animate={{
            x: [0, 100, 200],
            y: [0, -20, -40],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Glowing effect around solar panel */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}