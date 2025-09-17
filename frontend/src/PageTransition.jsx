import { motion } from 'framer-motion';

const pageTransition = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.25, 0.25, 0.75],
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;