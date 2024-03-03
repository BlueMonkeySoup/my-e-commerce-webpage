"use client";
import Link from "next/link";
import React from "react";
import CartIcon from "../CartIcon";
import Sidebar from "../sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const pathName = usePathname();
  const session = useSession();
  // const { status,data } = useSession();
  //   console.log(status,data)

  return (
    <div className="bg-green-100 h-20 font-medium text-lg text-black p-10 flex items-center justify-between border-b-2 border-b-black uppercase md:h-24 ">
      {/* LEFT SIDE */}
      <div className="flex-1 gap-10 p-2 basis-1/1 ">
        <Sidebar />
        <Link
          href="/contact"
          className={
            pathName === "/contact"
              ? "bg-teal-300 rounded-full p-2 gap-5 lg:ml-20"
              : "lg:ml-20 gap-5 max-lg:hidden"
          }
        >
          Contact
        </Link>
        <Link
          href="/items"
          className={
            pathName === "/items"
              ? "bg-teal-300 rounded-full p-2 md:ml-20 gap-5 sm:ml-20"
              : "md:ml-20 sm:ml-20 gap-5 max-sm:hidden"
          }
        >
          Items
        </Link>
      </div>
      {/* LOGO */}
      <Link href="/" alt="Home">
        <div className="flex-1 font-bold md:text-bold text-5xl md:text-center max-md:hidden max-lg:ml-16 ">
          E-Shop!
        </div>
      </Link>
      <div className="flex-1 md:text-center max-md:hidden "></div>

      {/* RIGHT SIDE */}
      <div className="flex gap-3 mt-2 ">
        <CartIcon pathName={pathName} />
      </div>
      <div>
        {session.status === "authenticated" ? (
          <>
            <button className="mr-2 gap-3" onClick={signOut}>
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link
              className={
                pathName === "/login"
                  ? "bg-teal-300 rounded-full p-3 gap-5"
                  : "p-2 mr-5"
              }
              href="/login"
            >
              Login
            </Link>

            <Link
              className={
                pathName === "/register"
                  ? "bg-teal-300 rounded-full p-3 gap-5"
                  : "p-2 lg:p-2"
              }
              href="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
