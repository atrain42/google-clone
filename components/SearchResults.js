import React from "react";

import PaginationButtons from "./PaginationButtons";

//convert hmtl string
import Parser from "html-react-parser";

export default function SearchResults({ res }) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {res.searchInformation.formattedTotalResults} results (
        {res.searchInformation.formattedSearchTime} seconds)
      </p>
      {res.items.map((result, i) => (
        <div key={i} className="max-w-xl mb-8">
          <div className="group">
            <a className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>
          <p>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
