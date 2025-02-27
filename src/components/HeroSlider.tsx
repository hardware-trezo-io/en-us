import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Shield, Lock, Wallet } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider: React.FC = () => {
  const slides = [
    {
      title: "Secure Your Digital Assets with Trezor Hardware Wallet IO",
      description: "The most trusted hardware wallet in the cryptocurrency industry, providing unmatched security for your digital assets.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      icon: Shield,
    },
    {
      title: "Next-Generation Security for Your Cryptocurrency",
      description: "Trezor hardware wallet io offers military-grade encryption and advanced security features to protect your investments.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      icon: Lock,
    },
    {
      title: "Manage All Your Cryptocurrencies in One Place",
      description: "Trezor hardware wallet io supports thousands of coins and tokens, giving you complete control over your digital portfolio.",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      icon: Wallet,
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      effect="fade"
      loop={true}
      className="w-full h-[600px] md:h-[700px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <div className="mb-6 inline-block p-3 rounded-full bg-dark-green bg-opacity-90">
                    <slide.icon size={32} className="text-white" />
                  </div>
                  <h1 className="text-white mb-6">{slide.title}</h1>
                  <p className="text-white text-xl mb-8">{slide.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href="#features"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary"
                    >
                      Explore Features
                    </motion.a>
                    <motion.a
                      href="#about"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-outline bg-transparent text-white border-white hover:bg-white hover:text-dark-green"
                    >
                      Learn More
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;