import Head from "next/head";
import Response from "../Response";

import SearchHeader from "../components/SearchHeader";

export default function Search({ res }) {
  console.log(res);
  return (
    <>
      <Head>
        <title>Search page</title>
      </Head>
      <SearchHeader />
    </>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((res) => res.json());
  return {
    props: {
      res: data,
    },
  };
}
