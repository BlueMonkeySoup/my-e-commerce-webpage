"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

const CartIcon = ({ pathName }) => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="mb-2 ml-6">
      <Link href="/cart" className="flex items-center gap-4">
        <div className="relative ">
          <Image src="/icons/cart-fill.svg" alt="" width={20} height={20} />
        </div>
        <span
          className={
            pathName === "/cart"
              ? "bg-teal-300 rounded-full p-2 gap-5"
              : "p-2 mr-5"
          }
        >
          {" "}
          Cart {quantity}
        </span>
      </Link>
    </div>
  );
};

export default CartIcon;
