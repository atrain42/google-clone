import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiSearch } from "react-icons/fi";
import { HiMicrophone } from "react-icons/hi";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  const randomWordHandler = async (e) => {
    e.preventDefault();
    try {
      const randomTerm = await fetch(
        "https://random-word-api.herokuapp.com/word"
      );
      const data = await randomTerm.json();

      if (!data) return;

      router.push(`/search?term=${data}&searchType=`);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Google clone created with Next.js" />
        <meta name="image" content="%PUBLIC_URL%/og.png" />
        <meta property="og:title" content="Google clone | Next.js" />
        <meta
          property="og:description"
          content="Google clone created with Next.js"
        />
        <meta property="og:image" content="%PUBLIC_URL%/og.png" />

        <meta name="twitter:image" content="%PUBLIC_URL%/og.png" />
        <meta name="twitter:title" content="Google clone | Next.js" />
        <meta
          name="twitter:description"
          content="Google clone created with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <form className="flex flex-col items-center mt-40">
        <Image
          width="300"
          objectFit="cover"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 items-center hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full sm:max-w-xl lg:max-w-2xl">
          <FiSearch className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          ></input>
          <HiMicrophone />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={searchHandler} className="btn">
            Google Search
          </button>
          <button onClick={randomWordHandler} className="btn">
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
