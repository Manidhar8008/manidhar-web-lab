import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = ({ title, subtitle, imageSrc, cta, ctaText = 'Get Started' }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <Button variant="primary" onClick={cta}>
            {ctaText}
          </Button>
        </motion.div>
        
        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img src={imageSrc} alt="Hero" className="w-full rounded-xl shadow-2xl" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
