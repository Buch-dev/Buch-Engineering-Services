'use client';

import { 
  SunIcon,
  BoltIcon,
  Battery0Icon,
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Products() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const products = [
    {
      id: 1,
      name: "Monocrystalline Solar Panels",
      description: "High-efficiency 400W panels with 25-year warranty. Perfect for residential and commercial installations.",
      price: "$250",
      priceUnit: "per panel",
      image: "/api/placeholder/400/300",
      features: [
        "400W power output",
        "21% efficiency rating",
        "25-year warranty"
      ],
      category: "panels"
    },
    {
      id: 2,
      name: "Hybrid Solar Inverter",
      description: "5kW hybrid inverter with MPPT technology. Compatible with battery storage systems.",
      price: "$1,200",
      priceUnit: "per unit",
      image: "/api/placeholder/400/300",
      features: [
        "5kW capacity",
        "MPPT technology",
        "10-year warranty"
      ],
      category: "inverters"
    },
    {
      id: 3,
      name: "Lithium Battery Storage",
      description: "10kWh lithium-ion battery for energy storage. Deep cycle with smart management system.",
      price: "$3,500",
      priceUnit: "per unit",
      image: "/api/placeholder/400/300",
      features: [
        "10kWh capacity",
        "6000+ cycles",
        "15-year warranty"
      ],
      category: "batteries"
    },
    {
      id: 4,
      name: "Complete Home System",
      description: "5kW complete system package including panels, inverter, mounting, and installation.",
      price: "$6,500",
      priceUnit: "installed",
      image: "/api/placeholder/400/300",
      features: [
        "12x 400W panels",
        "5kW inverter included",
        "Professional installation"
      ],
      category: "systems"
    },
    {
      id: 5,
      name: "Commercial System Package",
      description: "50kW commercial system for businesses. Includes monitoring and maintenance package.",
      price: "$45,000",
      priceUnit: "installed",
      image: "/api/placeholder/400/300",
      features: [
        "50kW capacity",
        "Remote monitoring",
        "2-year maintenance"
      ],
      category: "commercial"
    },
    {
      id: 6,
      name: "Mounting & Accessories",
      description: "Complete mounting kits, cables, connectors, and all necessary accessories for installation.",
      price: "$800",
      priceUnit: "per kit",
      image: "/api/placeholder/400/300",
      features: [
        "Aluminum mounting rails",
        "MC4 connectors",
        "Solar cables included"
      ],
      category: "accessories"
    }
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case 'panels':
        return <SunIcon className="w-8 h-8 text-blue-600" />;
      case 'inverters':
        return <BoltIcon className="w-8 h-8 text-green-600" />;
      case 'batteries':
        return <Battery0Icon className="w-8 h-8 text-orange-600" />;
      case 'systems':
        return <HomeIcon className="w-8 h-8 text-purple-600" />;
      case 'commercial':
        return <BuildingOfficeIcon className="w-8 h-8 text-red-600" />;
      case 'accessories':
        return <WrenchScrewdriverIcon className="w-8 h-8 text-gray-600" />;
      default:
        return <SunIcon className="w-8 h-8 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Solar Products
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium quality solar equipment for residential and commercial applications
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {getIcon(product.category)}
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      <span className="text-sm text-gray-500">{product.priceUnit}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Request Quote</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Solution CTA */}
      <motion.section 
        className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Need a Custom Solution?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We offer customized solar solutions tailored to your specific energy requirements and budget
          </motion.p>
          <div className="flex justify-center">
            <Link href="/contact">
              <motion.button 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Custom Quote</span>
                <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}