import React from "react";
import {
  useInViewAnimation,
} from "../animationUtils";
import { motion } from "framer-motion";

const LeftAnimation = ({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration: number;
}) => {
  const { ref, animationControls } = useInViewAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={animationControls}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default LeftAnimation;
