"use client";
import { addUser } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";

const Register = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);
  return (
    <div className="flex justify-between p-4 rounded-xl mb-40">
      <div className="flex-1  max-xl:hidden flex-row ">
        {/* Image container */}
        <Image
          className="w-full h-[95%] relative shadow-md rounded-md mt-10 ml-10 "
          src="/CookingTime.jpg"
          alt="register picture"
          width="500"
          height="500"
        ></Image>
      </div>

      <div className=" flex-1 mx-20 h-full shadow-2xl  rounded-md flex-col sm:mt-10   2xl:w-[50%] ">
        {/* FORM CONTAINER */}
        <div className=" flex flex-col gap-6 p-10  ">
          <h1 className="font-bold text-2xl xl:text-3xl ml-2 text-center ">
            Register
          </h1>

          <form
            className="flex-1 flex flex-col sm:gap-5 p-3 rounded md:px-20 "
            action={formAction}
          >
            <input
              type="text"
              placeholder="name..."
              name="username"
              required
              className="border-2 md:p-4 p-2 mb-2 rounded "
            />
            <input
              type="email"
              placeholder="email... "
              name="email"
              required
              className="border-2 md:p-4 p-2 mb-2 rounded"
            />
            <input
              type="password"
              placeholder="password..."
              name="password"
              required
              className="border-2 md:p-4 p-2 mb-2 rounded"
            />
            <input
              type="password"
              placeholder="enter password again..."
              name="repeatPassword"
              required
              className="border-2 md:p-4 p-2 mb-2 rounded"
            />
            <input
              type="phone"
              placeholder="telephone... "
              name="phone"
              className="border-2 md:p-4 p-2 mb-2 rounded"
            />
            <input
              type="text"
              placeholder="adress... "
              name="adress"
              className="border-2 md:p-4 p-2 mb-2 rounded"
            />
            <button className="flex gap-6 mt-5 p-4 ring-1 bg-green-600 md:p-4 text-white rounded-md text-center ">
              Register now
            </button>
            {state?.error}
          </form>
          <Link className="text-blue-800 mb-5" href={"/dashboard/login"}>
            Already got an account? Click here to login!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
