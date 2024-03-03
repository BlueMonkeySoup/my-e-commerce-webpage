"use client";
import { handleGithubLogin, login } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[60rem] md:h-[50rem] sm:h-[35rem] p-4">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2 max-md:hidden">
          <Image src="/CookingTime.jpg" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className=" flex flex-col md:w-1/2 p-10">
          <h1 className="font-bold text-xl xl:text-3xl mb-10">Welcome!</h1>
          <p className="mb-10">
            Log into your account or create a new account!
          </p>
          <form action={handleGithubLogin}></form>
          <button className="flex gap-4 p-4 ring-1 ring-black rounded-md mb-5 max-md:mb-10">
            <Image
              src="/icons/github.svg"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Github</span>
          </button>
          <form />
          <form action={login}>
            <button className="flex flex-col gap-4 p-4 ring-1 ring-black rounded-md w-full bg-blue-500 text-white mb-20">
              Log in
            </button>
          </form>
          <p className=" mb-10">
            Have a problem?
            <Link className="underline" href="/contact">
              {" "}
              Contact us!
            </Link>
          </p>
          <Link className="text-blue-800" href={"/register"}>
            No account? Click here to register!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
