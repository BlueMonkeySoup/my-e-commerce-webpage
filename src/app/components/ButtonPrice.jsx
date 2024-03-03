"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { motion } from "framer-motion";

const ButtonPrice = ({ product, showInput }) => {
  const dispatch = useDispatch();
  console.log(product);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  console.log(quantity);

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity }));
  };
  return (
    <motion.div
      className="flex justify-center text-center rounded-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-green-600 h-[3rem] w-full justify-center rounded-lg items-center shadow-lg ">
        <button
          className="bg-green-600 h-[3rem] w-[10rem] justify-center items-center rounded-lg text-white"
          onClick={handleClick}
        >
          Add to cart
        </button>
        {showInput && (
          <input
            type="number"
            onChange={(e) => setQuantity(Number(e.target.value))}
            defaultValue={1}
            className=" w-12 m-2 p-2 h-1 bg-green-600 max-lg:hidden"
          />
        )}
      </div>
    </motion.div>
  );
};

export default ButtonPrice;
