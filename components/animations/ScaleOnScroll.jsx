import { motion } from 'framer-motion';

const ScaleOnScroll = ({ children, threshold = 0.1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleOnScroll;
