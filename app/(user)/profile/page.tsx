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
          />
          <p>user email</p>
          <p>{session?.user?.email}</p>
          <p>user name</p>
          <p>{session?.user?.name}</p>
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
