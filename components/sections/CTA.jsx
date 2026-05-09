import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA = ({ title, subtitle, primaryAction, secondaryAction }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {subtitle}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary" onClick={primaryAction}>
            Get Started
          </Button>
          {secondaryAction && (
            <Button variant="outline" onClick={secondaryAction}>
              Learn More
            </Button>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
