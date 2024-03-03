"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 0,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
      yoyo: Infinity,
    },
  },
  initial2: {
    x: 0,
    y: -10,
    opacity: 1,
  },
  bounce: {
    y: [10, -10, 10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};

const orderdone = () => {
  return (
    <div className="h-full  bg-gray-100 py-10">
      <motion.div
        className="flex flex-col gap-10 items-center align-middle"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-5xl font-bold text-red-500 "
          variants={variants}
          initial="initial2"
          animate="bounce"
        >
          Congratulations!
        </motion.h1>
        <p className="text-2xl">The purchase was a success!</p>
        <p className="text-xl font-bold mt-20">
          Your items are being handeld and are being sent out as soon as
          possible!
        </p>
        <Link href="/" className="text-blue-800">
          Press me to go back
        </Link>
      </motion.div>
    </div>
  );
};

export default orderdone;
