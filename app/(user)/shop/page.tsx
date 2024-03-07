"use client";
import Container from "@/app/components/Container";
import React, { useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";

export default function ShopPage() {
  const [showGrid, setShowGrid] = useState(true);
  const [showList, setShowList] = useState(false);
  return (
    <Container>
      <div className=" flex items-center justify-between pb-10">
        <h2 className=" text-2xl text-primeColor font-bold">All Products</h2>
        <div className=" flex items-center gap-4">
          <span
            onClick={() => {
              setShowGrid(true);
              setShowList(false);
            }}
            className={`${
              showGrid
                ? " bg-primeColor text-white"
                : " border-[1px] border-gray-300 text-[#737373]"
            } w-8 h-8 flex items-center justify-center cursor-pointer`}
          >
            <BsGridFill />
          </span>

          <span
            onClick={() => {
              setShowList(true);
              setShowGrid(false);
            }}
            className={`${
              showList
                ? " bg-primeColor text-white"
                : " border-[1px] border-gray-300 text-[#737373]"
            } w-8 h-8 flex items-center justify-center cursor-pointer`}
          >
            <ImList />
          </span>
        </div>
      </div>
    </Container>
  );
}
