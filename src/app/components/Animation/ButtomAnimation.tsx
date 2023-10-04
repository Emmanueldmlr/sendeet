import { motion } from "framer-motion";
import React from "react";
import { useInViewAnimationFromButtom } from "../animationUtils";

const ButtomAnimation = ({ children }: { children: React.ReactNode }) => {
  const { ref, animationControls } = useInViewAnimationFromButtom();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animationControls}
      exit={{ opacity: 0, y: -50 }}
    >
      {children}
    </motion.div>
  );
};

export default ButtomAnimation;
