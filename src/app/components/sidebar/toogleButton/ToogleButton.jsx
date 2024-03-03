import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  const x = "x";
  const o = "o";
  const [button, setButton] = useState(x);
  const openButton = () => {
    setButton((prev) => (prev === x ? o : x));
  };

  return (
    <div>
      <button
        className="fixed rounded-full h-8 w-10 top-[55px] left-[30px] bg-red-500 z-50"
        onClick={() => {
          openButton();
          setOpen((prev) => !prev);
        }}
      >
        <motion.div
          animate={{
            x: 0,
            y: -1,
            scale: 1,
          }}
        >
          {button}
        </motion.div>
      </button>
    </div>
  );
};
export default ToggleButton;
