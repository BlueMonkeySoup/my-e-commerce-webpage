"use client";
import { useState } from "react";
import React from "react";
import ToggleButton from "./toogleButton/ToogleButton";
import Links from "./links";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 70px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 70px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 500,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white text-black"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-[400px] md:min-w-[200px] bg-amber-200 z-40"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
