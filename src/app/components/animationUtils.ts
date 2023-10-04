import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useInViewAnimation = () => {
  const animationControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animationControls.start({
        x: 0,
        opacity: 1,
      });
    } else {
      animationControls.start({
        x: -100,
        opacity: 0,
      });
    }
  }, [animationControls, inView]);

  return { ref, animationControls };
};

export const useInViewAnimationFromRight = () => {
  const animationControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animationControls.start({
        x: 0,
        opacity: 1,
      });
    } else {
      animationControls.start({
        x: 100,
        opacity: 0,
      });
    }
  }, [animationControls, inView]);

  return { ref, animationControls };
};

export const useInViewAnimationFromButtom = () => {
  const animationControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      animationControls.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [animationControls, inView]);

  return { ref, animationControls };
};
