"use client";

import { motion } from "framer-motion";

interface AnimatedTitleFMProps {
  open?: boolean;
}

export function AnimatedTitleFM({ open = true }: AnimatedTitleFMProps) {
  return (
    <motion.div
      className="text-center text-white"
      initial={false}
      animate={open ? "show" : "hide"}
      variants={{
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
        hide: { opacity: 0, y: 24, filter: "blur(10px)" },
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-mono text-sm font-semibold uppercase tracking-normal text-white/60">
        HelpDesk
      </p>
      <h2 className="mt-3 text-5xl font-black leading-none md:text-7xl">
        HelpDesk Студия
      </h2>
    </motion.div>
  );
}
