"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { data } from "@/lib/data";

//api som fungerar med mongo
// const getData = async () => {
//   const res = await fetch(`http://localhost:3000/api/products/`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch");
//   }

//   return res.json();
// };

const shuffle = (array) => {
  //fisher-yates shuffle
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const Featured = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getData().then((data) => {
  //     setProducts(shuffle(data).slice(0, 3));
  //   });
  // }, []);

  const products = shuffle(data)

  return (
    <div className="bg-teal-200 ">
      <div className=" flex flex-col text-4xl mt-8 pt-10 pb-5 bg-[#7e128a] text-violet-300 font-bold text-center">
        <h1 className="animate-bounce">Check out these awesome items!</h1>
      </div>
      <div className="flex flex-wrap justify-around items-center md:p-10 p-4">
        {products.map((item) => (
          <motion.div
            className="gap-2 rounded"
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href={`items/${item.id}`}>
              <div className="max-w-sm rounded overflow-hidden  shadow-lg m-4">
                <Image
                  className="w-full h-[12rem]"
                  src={item.img || "/noimg.png"}
                  alt=""
                  width="100"
                  height="100"
                />
                <div className="px-6 py-4 bg-teal-400 ">
                  <div className="font-bold text-xl mb-2 ">{item.title}</div>
                  <p className="text-gray-700 text-base w-[10rem] ">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
