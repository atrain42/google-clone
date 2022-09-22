import React from "react";

export default function SearchResults({ res }) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {res.searchInformation.formattedTotalResults} results (
        {res.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
}
