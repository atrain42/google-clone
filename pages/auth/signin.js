import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

//props on this function are passed from the server side
export default function Signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
              className="w-52 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="Google logo"
            />
            <p className="text-sm italic my-10 text-center">
              Created with Next.js for learning purposes
            </p>
            <button
              className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

//renders this function inside of the server.
//Allows user to get the information faster.
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
