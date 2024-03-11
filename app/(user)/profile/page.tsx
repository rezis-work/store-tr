"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user ? (
        <div>
          <Image
            src={session?.user?.image!}
            alt="user image"
            width={300}
            height={300}
            className=" p-4"
          />
          <div className=" p-4 pl-1 border-[1px] w-[250px] ml-4">
            <p className=" text-xl font-semibold pb-1 border-b-2">
              User E-mail
            </p>
            <p className=" mt-2">{session?.user?.email}</p>
          </div>
          <div className=" mt-3 p-4 pl-1 border-[1px] w-[250px] ml-4">
            <p className=" text-xl font-semibold pb-1 border-b-2">user name</p>
            <p className=" mt-2">{session?.user?.name}</p>
          </div>
        </div>
      ) : (
        <div className=" w-full flex justify-center py-5">
          <button
            onClick={() => signIn()}
            className=" text-center mx-auto bg-gray-200 p-4 text-3xl rounded-md text-primeColor font-bold hover:bg-gray-600 duration-300"
          >
            Sign in first
          </button>
        </div>
      )}
    </div>
  );
}
