import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={`p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
