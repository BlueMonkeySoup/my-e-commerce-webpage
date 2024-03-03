"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const data = [
  {
    id: 1,
    title: "Text one",
    img: "/rainCoCan.jpg",
  },
  {
    id: 2,
    title: "Text two",
    img: "/phoneCargCan.jpg",
  },
];
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 250 : -250,
      opacity: 0,
    };
  },
  center: {
    zIndex: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: (direction) => {
    return {
      zIndex: 200,
      x: direction < 0 ? 250 : -250,
      opacity: 1,
    };
  },
};

const SlideShow = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    setCurrentImg((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };
  const nextImg = () => {
    setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImg((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      5000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[40rem] bg-gray-100 mt-10">
      <div className="relative">
        <div className="flex items-center justify-center">
          {/* left button */}
          <motion.button
            className="absolute left-2 z-10 px-3 py-3 bg-gray-300 rounded-full "
            onClick={prevImg}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsArrowLeftShort className="" />
          </motion.button>
          {/* Image container */}
          <AnimatePresence>
            <motion.img
              className="z-10 object-cover max-w-full max-h-[32rem] lg:max-h-[32rem]"
              key={currentImg}
              src={data[currentImg].img}
              alt=""
              variants={variants}
              initial="enter"
              animate="center"
              width={500}
              height={500}
            />
          </AnimatePresence>
          {/* right button */}
          <motion.button
            className="absolute right-2 z-10 px-3 py-3 bg-gray-300 rounded-full"
            onClick={nextImg}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BsArrowRightShort />
          </motion.button>
        </div>
      </div>

      <div className="w-[12rem] md:w-[8rem] lg:w-[10rem]" />

      {/* sub-text */}
      <div className="text-center mt-4 xl:text-6xl md:text-3xl lg:text-3xl">
        <h1 className="text-center text-4xl text-red-500">
          {data[currentImg].title}
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        {data.map((_, btn) => (
          <button
            key={btn}
            className={`mx-2 p-2 rounded-full ${
              currentImg === btn ? "bg-red-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentImg(btn)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
