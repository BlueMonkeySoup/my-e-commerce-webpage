"use client";
import React, { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 animate-bounce">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
          type="button"
          aria-label="Scroll to top"
        >
          <GoArrowUp className="h-10 w-10 bg-gray-300 rounded-lg" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
