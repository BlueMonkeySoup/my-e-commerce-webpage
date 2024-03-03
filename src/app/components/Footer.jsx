import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between align-bottom md:h-1 max-md:px-20 lg:px-20 xl:px-40 bg-gray-50 border-b-2 border-b-black">
      {/* LEFT SIDE*/}
      <div className=" flex-col">
        <div className="flex items-center mb-2 mt-5 ">
          <p>Telephone: 1234-5678</p>
          <Image
            src="/icons/telephone-fill.svg"
            alt=""
            width={20}
            height={20}
            className="ml-2"
          />
        </div>
        <div className="flex items-center mb-2 mt-5">
          <p>Adress: 123 LureStreet</p>
          <Image
            src="/icons/house-fill.svg"
            alt=""
            width={20}
            height={20}
            className="ml-2"
          />
        </div>
        <div className="flex items-center mb-2 mt-5">
          <p>Email: Foo@gmail.com</p>
          <Image
            src="/icons/envelope-fill.svg"
            alt=""
            width={20}
            height={20}
            className="ml-2"
          />
        </div>
        <p className="mt-10">© ALL RIGHTS RESERVED.</p>
      </div>
      {/* RIGHT SIDE*/}
      <div className="">
        <a
          title="instagram"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mt-5"
            src="/icons/instagram.svg"
            alt="Instagram"
            width={40}
            height={40}
          />
        </a>
        <a
          title="twitter"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mt-5"
            src="/icons/twitter.svg"
            alt="Twitter"
            width={40}
            height={40}
          />
        </a>
        <a
          title="youtube"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mt-5"
            src="/icons/youtube.svg"
            alt="YouTube"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
