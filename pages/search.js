import Head from "next/head";
import Response from "../Response";
import { useRouter } from "next/router";

import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";

export default function Search({ res }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.term} - results</title>
      </Head>

      <SearchHeader />

      <SearchResults res={res} />
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
