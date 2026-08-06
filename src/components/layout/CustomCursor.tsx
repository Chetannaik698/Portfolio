import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    function handleMove(e: MouseEvent) {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], input, textarea"));
    }

    function handleLeave() {
      setIsVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    document.documentElement.classList.add("no-cursor");

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.documentElement.classList.remove("no-cursor");
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden md:block"
      style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          scale: isPointer ? 1.8 : 1,
          backgroundColor: isPointer ? "rgba(79,140,255,0.35)" : "rgba(79,140,255,0.9)",
        }}
        transition={{ duration: 0.2 }}
        className="h-5 w-5 rounded-full mix-blend-difference"
      />
    </motion.div>
  );
}
