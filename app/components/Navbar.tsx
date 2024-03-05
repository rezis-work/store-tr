"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo1.png";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQueary] = useState<string>("");

  const navBarList = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Studio",
      link: "/studio",
    },
  ];
  return (
    <div className=" w-full h-20 md:h-40 lg:h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50 opacity-80">
      <nav className=" h-full max-w-screen-xl mx-auto px-4 md:flex-col md:pt-3 md:pb-2 lg:pt-0 lg:pb-0 lg:flex-row xl:px-0 flex items-center justify-between gap-2">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={50} className=" bg-transparent" />
        </Link>
        <div className=" relative w-full hidden md:inline-flex lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black items-center gap-2 px-6 rounded-md">
          <input
            type="text"
            className=" flex-1 outline-none h-full bg-transparent placeholder:text-gray-600"
            placeholder="Search your products here"
            onChange={(e) => setSearchQueary(e.target.value)}
            value={searchQuery}
          />
          {searchQuery ? (
            <IoCloseOutline
              onClick={() => setSearchQueary("")}
              className="w-5 h-5 hover:text-red-500 hover:cursor-pointer"
            />
          ) : (
            <FaSearch className="w-5 h-5 hover:cursor-pointer" />
          )}
        </div>
        <div className="hidden md:inline-flex items-center gap-2">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className={` flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-500 duration-200 last:border-0 ${
                pathname === item?.link && "text-gray-950 underline"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <HiMenuAlt2 className=" inline-flex md:hidden cursor-pointer w-8 h-6" />
      </nav>
    </div>
  );
}
