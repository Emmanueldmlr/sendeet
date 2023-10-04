import React from "react";
import {
  useInViewAnimation,
  useInViewAnimationFromRight,
} from "../animationUtils";
import { motion } from "framer-motion";
const RightAnimation = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const { ref: imageRef, animationControls: imageAnimationControls } =
    useInViewAnimationFromRight();
  return (
    <motion.div
      ref={imageRef}
      initial={{ x: 100, opacity: 0 }}
      animate={imageAnimationControls}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default RightAnimation;
