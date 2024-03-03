"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const variants2 = {
  initial: {
    scale: 0,
  },
  animate: {
    rotate: 360,
    scale: 1,

    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};
// Image box
const variants3 = {
  initial: {
    opacity: 1,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.3,
      staggerChildren: 0.2,
    },
  },
};
//Text-box
const variants4 = {
  initial: {
    y: -80,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const AboutMe = () => {
  return (
    <div>
      <div className="flex flex-col mt-10 pt-20 bg-gray-100">
        <motion.div
          className="bg-green-400 shadow-lg rounded-lg p-8 h-1/4 w-[80%] m-auto"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <h1
            className="text-3xl flex text-center justify-center font-serif"
            style={{ letterSpacing: "0.2em" }}
          >
            Who are we?
          </h1>
        </motion.div>
      </div>
      <div className="flex justify-between h-[80vh] mb-28  bg-gray-100">
        <motion.div
          className="flex justify-start h-[60%] max-md:w-[40%] w-[30%] m-auto bg-white shadow-lg rounded-lg "
          variants={variants2}
          initial="initial"
          whileInView="animate"
        >
          <Image
            className="w-full"
            src={"/noimg.png"}
            alt=""
            width="150"
            height="150"
          />
        </motion.div>
        <motion.div
          className="flex justify-end h-[60%] w-[30%] m-auto bg-white shadow-lg rounded-lg pt-10 p-8"
          variants={variants3}
          initial="initial"
          whileInView="animate"
        >
          <motion.p
            variants={variants4}
            initial="initial"
            whileInView="animate"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
            exercitationem reprehenderit rerum aspernatur?
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
