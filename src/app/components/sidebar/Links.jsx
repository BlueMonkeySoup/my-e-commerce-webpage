import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const session = useSession();
  return (
    <motion.div
      className="flex flex-col items-center justify-center absolute w-[100%] h-[100%] gap-20"
      variants={variants}
    >
      <Link href={"/"}>
        <p className="text-lg mb-5">Home</p>
      </Link>
      <Link href={"/contact"}>
        <p className="text-lg mb-5">Contact</p>
      </Link>
      <Link href={"/items"}>
        <p className="text-lg mb-5">items</p>
      </Link>

      {session === "authenticated" ? (
        <Link href={"/logout"}>
          <p className="text-lg mb-5">logout</p>
        </Link>
      ) : (
        <>
          <Link href={"/login"}>
            <p className="text-lg mb-5">Login</p>
          </Link>

          <Link href={"/register"}>
            <p className="text-lg mb-5">register</p>
          </Link>
        </>
      )}
    </motion.div>
  );
};
export default Links;
