"use client";
import React from "react";
import { motion } from "framer-motion";

const repeatSlider = {
  animate: {
    x: ["-200%", "200%"],
    transition: {
      x: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};

const AutoSlider = () => {
  return (
    <div className="flex items-center justify-center pt-10 overflow-hidden">
      <motion.img
        className=""
        src="/noimgavb.png"
        alt="/"
        fill
        objectFit="contain"
        variants={repeatSlider}
        initial="initial"
        animate="animate"
      ></motion.img>
    </div>
  );
};

export default AutoSlider;
