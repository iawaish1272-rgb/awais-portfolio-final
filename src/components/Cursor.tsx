"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const ax = useSpring(x, { stiffness: 110, damping: 18, mass: 0.7 });
  const ay = useSpring(y, { stiffness: 110, damping: 18, mass: 0.7 });
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHover(!!(e.target as HTMLElement).closest("a,button,input,textarea,[data-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100]" style={{ x: ax, y: ay }}>
        <motion.div
          className="-ml-20 -mt-20 h-40 w-40 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(122,28,46,0.5), transparent 70%)" }}
          animate={{ scale: hover ? 1.7 : 1 }}
        />
      </motion.div>
      <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[101]" style={{ x, y }}>
        <motion.div className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-white" animate={{ scale: hover ? 2.5 : 1 }} />
      </motion.div>
    </>
  );
}
