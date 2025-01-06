"use client";
import React from "react";
import { motion } from "motion/react";

function InViewCome({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = React.useRef(null);
  return (
    <motion.span
      style={{ display: "inline-block", marginRight: "0.25em" }}
      ref={ref}
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      transition={{
        delay,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
    >
      {children}{" "}
    </motion.span>
  );
}

export default InViewCome;
