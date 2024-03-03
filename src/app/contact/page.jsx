"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
  initialRight: {
    x: 500,
    y: 0,
    opacity: 0,
  },
};
// Inget skickas just nu. Använd EmailJS eller en actionform
const Contact = () => {
  return (
    <div className="flex flex-row bg-pink-50 h-lvh ">
      <motion.div
        className=" ml-10 flex-col mr-5 text-xl flex-1 flex items-center justify-center rounded-md"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Image
          className="md:h-[400px] md:w-[400px]"
          alt=""
          src="/contact.jpg"
          width={250}
          height={250}
        />
        <h1 className="rounded-md">
          Got suggestions/feedback? We would love to hear it!
        </h1>
      </motion.div>

      <motion.div
        className="flex-1 flex items-center justify-center md:ml-20 ml-5 "
        variants={variants}
        initial="initialRight"
        animate="animate"
      >
        <motion.form
          className="flex-1 flex flex-col gap-2 p-3 "
          variants={variants}
          animate="animate"
        >
          <input
            type="name"
            placeholder="name..."
            className="border-2 p-2 w-full sm:w-[20rem] md:w-[20rem] lg:w-[20rem] xl:w-[25rem] rounded-md"
          />
          <input
            type="email"
            placeholder="email... "
            className="border p-2 sm:w-[20rem] md:w-[20rem] lg:w-[20rem] xl:w-[25rem] rounded-md"
          />
          <input
            type="telephone"
            placeholder="phone..."
            className="border p-2 sm:w-[20rem] md:w-[20rem] lg:w-[20rem] xl:w-[25rem] rounded-md"
          />
          <textarea
            className="border sm:w-[20rem] md:w-[20rem] p-2 lg:w-[20rem] xl:w-[25rem] rounded-md"
            name="msg"
            cols={20}
            rows={10}
            placeholder="Your text here..."
          ></textarea>
          <button className=" bg-teal-100 border sm:w-[20rem] md:w-[20rem] p-5 lg:w-[20rem] xl:w-[25rem] rounded-md">
            Send
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
