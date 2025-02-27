import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card hover:border-dark-green hover:border-2 group"
    >
      <div className="mb-4 p-3 rounded-full bg-dark-green bg-opacity-10 inline-block group-hover:bg-dark-green group-hover:bg-opacity-100 transition-all duration-300">
        <Icon size={24} className="text-dark-green group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;