"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ButtonPrice from "../components/ButtonPrice";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import { data } from "@/lib/data";

const Items = ({ searchParams }) => {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // const query = searchParams?.query || "";

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/products/?query=${query}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, [query]);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;
  // console.log(data);
  
  const getData = data
  return (
    <div className="  border-black bg-red-50 py-20">
      <div className="flex items-center justify-center bg-red-300 w-[90%] mb-20  rounded-md m-auto">
        <SearchBar/>
        <div className="m-auto mr-3">
          <Dropdown />
        </div>
      </div>
      <div className="flex flex-wrap justify-center align-middle mt-10 w-[90%] m-auto gap-10 border-solid bg-red-200 p-10 rounded-lg ">
        {getData.map((product) => (
          <motion.div
            className=" flex flex-col  h-12rem w-[13rem] gap-2 bg-green-300 border-solid shadow-2xl rounded-lg border-slate-500"
            key={product.id}
          >
            <Link
              href={`/items/${product.id}`}
              className="flex-col items-center justify-center mx-4 "
              passHref
            >
              <Image
                src={product.img || "/noimg.png"}
                className="flex-col w-full h-[40%] border-solid shadow-lg rounded mt-5 hover:scale-110 transition-transform ease-in-out duration-200"
                alt=""
                width="200"
                height="200"
              />
              <h1 className="mr-[500] text-xl font-bold my-5">
                {product.title}
              </h1>
              <p className="mb-16">
                {product.desc.length > 20
                  ? `${product.desc.substring(0, 20)}...`
                  : product.desc}
              </p>
              <div className="text-center bg-green-500 w-[45%] p-1 rounded-lg border-solid ml-10">
                <p className="text-white text-3xl ">${product.price}</p>
              </div>
            </Link>
            <ButtonPrice product={product} showInput={false} />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between m-5"></div>
    </div>
  );
};

export default Items;
