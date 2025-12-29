'use client';

import { motion } from 'framer-motion';
import { SunIcon } from '@heroicons/react/24/outline';

export default function SolarPanelImage() {
  return (
    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-2xl overflow-hidden">
      {/* Solar Panel Grid Pattern */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-6 grid-rows-4 h-full w-full gap-1 p-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-sm border border-slate-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.05,
                ease: "easeOut"
              }}
            >
              {/* Solar cell lines */}
              <div className="h-full w-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-500/50"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-500/50"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reflection Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
      
      {/* Sun Reflection */}
      <motion.div 
        className="absolute top-4 right-4 w-12 h-12 bg-yellow-400/30 rounded-full blur-sm"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Frame */}
      <div className="absolute inset-0 border-4 border-slate-400 rounded-2xl"></div>
      
      {/* Corner Mounting Points */}
      {[
        'top-2 left-2',
        'top-2 right-2', 
        'bottom-2 left-2',
        'bottom-2 right-2'
      ].map((position, i) => (
        <div 
          key={i}
          className={`absolute ${position} w-3 h-3 bg-slate-300 rounded-full shadow-inner`}
        />
      ))}

      {/* Brand Label */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded px-3 py-1">
        <div className="flex items-center space-x-2">
          <SunIcon className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-semibold text-slate-800">400W Monocrystalline</span>
        </div>
      </div>
    </div>
  );
}