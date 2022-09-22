import React from "react";
import { useRouter } from "next/router";

export default function SearchOption({ title, Icon, selected }) {
  const router = useRouter();
  const selectTabHandler = (title) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };

  return (
    <div
      onClick={() => selectTabHandler(title)}
      className={`flex items-center border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 cursor-pointer pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      {<Icon className="h4 mr-1" />}
      {title}
    </div>
  );
}
