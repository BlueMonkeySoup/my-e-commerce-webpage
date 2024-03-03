"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import { removeProduct } from "../../redux/cartSlice";
import CashPayment from "../components/CashPayment";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  const total = useSelector((state) => state.cart.total);
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };
  const handleRemoveProduct = (item) => {
    dispatch(removeProduct(item));
  };
  console.log(cart);

  return (
    <div className="h-[100vh] md:h-[100vh] flex flex-col text-black lg:flex-row">
      {/* Products container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* Single item */}
        {cart.products.map((item) => (
          <div
            className="flex items-center justify-between mb-4 bg-green-50 p-3 rounded-2xl"
            key={item._id}
          >
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">{item.title}</h1>

              <span>{item.desc}</span>
            </div>
            <h2 className="font-bold">${item.price}</h2>

            <button
              className="cursor-pointer"
              onClick={() => handleRemoveProduct(item)}
            >
              X
            </button>
            <span className="font-bold">${item.price * quantity}</span>
          </div>
        ))}
      </div>
      {/* Payment container*/}
      <div className="h-1/2 p-4 bg-red-100 flex flex-col justify-center gap-4  lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="text-4xl">TOTAL AMOUNT {total}</span>
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setOpen(true)}
            className="bg-green-500 text-white p-3 rounded-md w-1/2 self-end border border-black"
          >
            Pay now!
          </button>
          {cart.products.map((item) => (
            <div key={item.id}>
              {open && (
                <CashPayment
                  closeModal={closeModal}
                  cart={cart}
                  quantity={item.quantity}
                  title={item.title}
                  total={total}
                />
              )}
            </div>
          ))}
          {/* Sätt in paypal/klarna/Stripe api */}
          <button className="bg-red-500 text-white p-3 rounded-md w-1/2 cursor-not-allowed border border-black">
            Empty button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
