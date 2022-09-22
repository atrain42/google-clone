import React, { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

//components
import User from "../components/User";
import SearchHeaderOptions from "../components/SearchHeaderOptions";

//icons
import { FiSearch } from "react-icons/fi";
import { HiMicrophone } from "react-icons/hi";
import { BsXLg } from "react-icons/bs";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          width="120"
          objectFit="contain"
          height="40"
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <form className="flex border border-gray-200 rounded-full shadow-md px-5 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <BsXLg
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-400 cursor-pointer sm:mr-3"
          />
          <HiMicrophone className="h-7 w-8 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 pl-3" />
          <FiSearch className="h-7 w-5 hidden sm:inline-flex text-blue-500 ml-2" />
          <button onClick={searchHandler} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
