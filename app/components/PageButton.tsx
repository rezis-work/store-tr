"use client";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StateProps } from "@/type";

export default function PageButton() {
  const { productData } = useSelector((state: StateProps) => state.trcomerce);

  return (
    <div className=" fixed top-60 right-2 z-20 flex flex-col gap-2">
      <Link
        href={"/profile"}
        className=" bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer"
      >
        <div className=" flex justify-center items-center">
          <MdSwitchAccount className=" text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <MdSwitchAccount className=" text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p className=" text-xs font-semibold">Profile</p>
      </Link>
      <Link
        href={"/cart"}
        className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-primeColor justify-center items-center hadow-testShadow overflow-x-hidden group cursor-pointer relative"
      >
        <div className="flex justify-center items-center">
          <RiShoppingCart2Fill className=" text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <RiShoppingCart2Fill className=" text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p>Buy Now</p>
        <p className=" absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex justify-center items-center font-semibold">
          {productData ? productData.length : 0}
        </p>
      </Link>
    </div>
  );
}
