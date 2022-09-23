import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = +router.query.start || 1;

  return (
    <div className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="cursor-pointer flex items-center flex-col hover:underline">
            <MdOutlineArrowBackIos className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="cursor-pointer flex items-center flex-col hover:underline">
            <MdOutlineArrowForwardIos className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
