import React from "react";
import Container from "./Container";
import Image from "next/image";
import productOfTheYear from "../assets/productYear.webp";
import Link from "next/link";

export default function YearProduct() {
  return (
    <div className=" bg-gray-100 w-full">
      <Container className=" flex gap-7 items-center md:bg-transparent relative mb-10">
        <Image
          src={productOfTheYear}
          alt="product of the year"
          width={700}
          className=" rounded-md hidden lg:inline-flex"
        />
        <div className=" w-full flex flex-col gap-2">
          <h1 className=" text-3xl font-semibold text-primeColor">
            Product of the year
          </h1>
          <p className=" text-base font-normal text-primeColor max-w-full xl:max-w-[400px] mr-4">
            The 2024 Product of the Year is a groundbreaking woman's face mask,
            designed with advanced filtration technology and sustainable,
            skin-friendly materials. It offers unmatched protection against
            pollutants and pathogens while ensuring breathability and comfort
            for all-day wear. Its sleek, ergonomic design complements any facial
            shape, making safety stylish.
          </p>
          <Link
            href={"/shop"}
            className=" bg-primeColor text-white text-lg w-[185px] h-[50px] hover:bg-black duration-300 font-bold flex items-center justify-center rounded-md mt-10"
          >
            Shop Now
          </Link>
        </div>
      </Container>
    </div>
  );
}
