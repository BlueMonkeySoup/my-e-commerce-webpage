"use client";
import React, { useState } from "react";
// import{ useDebounceCallback }from "use-debounce"
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SearchBar = ({ query }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [focus, setFocus] = useState("Click to search...");

  //     const handleChange = useDebounceCallback ((e)=>{
  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  };
  //  },300)

  return (
    <div className="flex justify-center align-middle p-10">
      <input
        type="text"
        className="p-1 rounded outline-none"
        placeholder={focus}
        onFocus={() => setFocus("")}
        onBlur={() => setFocus("Click to search...")}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
