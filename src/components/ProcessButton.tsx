import React from 'react';
import { motion } from 'framer-motion';

type DynamicButtonProps = {
  onClick: () => void;
  label: string;
};

const ProcessButton: React.FC<DynamicButtonProps> = ({ onClick, label }) => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, ease: easing, duration: 0.5 }}
      className={`bg-white p-3 rounded-md font-semibold`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default ProcessButton;
