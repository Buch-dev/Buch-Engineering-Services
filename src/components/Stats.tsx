'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { id: 1, name: 'Solar Systems Installed', value: 150, suffix: '+' },
    { id: 2, name: 'Happy Customers', value: 120, suffix: '+' },
    { id: 3, name: 'Years of Experience', value: 5, suffix: '+' },
    { id: 4, name: 'MW of Clean Energy', value: 5, suffix: '+' },
  ];

  const Counter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration, isVisible]);

    return <span>{count}</span>;
  };

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setIsVisible(true)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that showcase our commitment to sustainable energy solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                <Counter end={stat.value} />
                {stat.suffix}
              </motion.div>
              <div className="text-blue-100 font-medium">{stat.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}