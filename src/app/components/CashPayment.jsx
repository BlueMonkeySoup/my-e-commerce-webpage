"use client";
import { addOrder } from "@/utils/actions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 1, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};

const CashPayment = ({ total, closeModal, quantity, title, cart }) => {
  const [state, formAction] = useFormState(addOrder, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/orderdone");
  }, [state?.success, router]);

  let constId = 0;
  const newTitle = cart.products.map((item) => ({
    id: constId++,
    title: item.title.replace(/["{}]/g, ""),
    quantity: item.quantity,
  }));
  // console.log(cart)
  // console.log(newTitle)

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <motion.div
      className="w-full h-[100vh] flex items-center justify-center absolute top-0 left-0 bg-gray-800 bg-opacity-50 "
      onClick={handleOverlayClick}
    >
      <motion.div
        className="flex justify-center items-center w-[500px] bg-white border-[20px] py-[100px] px-[300px] flex-col rounded-xl"
        variants={container}
        initial="hidden"
        animate="animate"
      >
        <form action={formAction}>
          {newTitle.map((item) => (
            <input
              key={item.id}
              type="text"
              className="hidden"
              name="title"
              value={JSON.stringify(newTitle)}
            />
          ))}

          <motion.h1
            className="font-bold text-3xl mb-10"
            variants={item}
            initial="hidden"
            animate="animate"
          >
            Welcome! please enter your details
          </motion.h1>

          <motion.div
            className="w-full mb-[15px]"
            variants={item}
            initial="hidden"
            animate="animate"
          >
            <label className="mb-[10px] font-bold">Name and Surname</label>
            <input
              placeholder="Name..."
              type="text"
              className="h-5 border border-gray-300 p-4 rounded-xl"
              name="name"
            />
          </motion.div>
          <motion.div
            className="w-full mb-[15px]"
            variants={item}
            initial="hidden"
            animate="animate"
          >
            <label className="mb-[10px] font-bold">Phone number</label>
            <input
              placeholder="Phone..."
              type="text"
              className="h-5 border border-gray-300 p-4 rounded-xl"
              name="phone"
            />
          </motion.div>
          <motion.div
            className="w-full mb-[15px]"
            variants={item}
            initial="hidden"
            animate="animate"
          >
            <label className="mb-[10px] font-bold">Address</label>
            <input
              placeholder="Address..."
              type="text"
              className="h-5 border border-gray-300 p-4 rounded-xl"
              name="adress"
            />
          </motion.div>
          <motion.div
            className="w-full mb-[15px]"
            variants={item}
            initial="hidden"
            animate="animate"
          >
            <label className="mb-[10px] font-bold">Email</label>
            <input
              placeholder="email..."
              type="text"
              className="h-5 border border-gray-300 mb-5 p-4 rounded-xl"
              name="email"
            />
          </motion.div>

          <input type="text" className="hidden" name="price" value={total} />

          <input type="text" className="hidden" name="stock" value={quantity} />

          <motion.button
            className="border-none bg-teal-500 text-white px-20 py-5 font-bold text-lg rounded-xl cursor-pointer w-[100%]"
            type="submit"
            variants={item}
            initial="hidden"
            animate="animate"
          >
            Order
          </motion.button>
          {state?.error}
        </form>
        <Link href="/orderdone">
          <p className="mt-4 text-blue-500">Skip here.</p>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CashPayment;
