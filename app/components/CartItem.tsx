"use client";
import { ProductProps } from "@/type";
import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanityClient";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Price from "./Price";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  descreaseQuantity,
  increaseQuantity,
} from "../redux/trcomerceSlice";
interface Props {
  item: ProductProps;
}

export default function CartItem({ item }: Props) {
  const dispatch = useDispatch();
  const handleDelete = (productId: string) => {
    dispatch(deleteProduct(productId));
  };
  return (
    <div className=" w-full grid grid-cols-5 mb-4 border py-2">
      <div className=" flex cols-span-5 md:col-span-2 items-center gap-4 ml-4">
        <div className=" w-9 h-20">
          <ImCross
            onClick={() => handleDelete(item?._id)}
            className=" text-primeColor hover:text-red-500 cursor-pointer duration-300"
            size="24"
          />
        </div>
        <Link href={`/product/${item?.slug?.current}`}>
          <div className=" w-32 h-32 relative">
            <Image
              src={urlFor(item?.image).url()}
              alt="product image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <h1 className=" font-semibold">{item?.title.substring(0, 20)}</h1>
      </div>
      <div className=" col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0 gap-6">
        <p className=" flex w-1/3 items-center text-lg font-semibold">
          <Price amount={item?.price} />
        </p>
        <div className=" flex w-1/3 items-center gap-6 text-lg">
          <span
            onClick={() => {
              dispatch(
                descreaseQuantity({
                  _id: item?._id,
                })
              );
              if (item.quantity > 1) {
                toast.success("Product removed successfully");
              } else {
                toast.success("We can't decrease more then one");
              }
            }}
            className=" w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500"
          >
            -
          </span>
          <p>{item?.quantity}</p>
          <span
            onClick={() => {
              dispatch(
                increaseQuantity({
                  _id: item?._id,
                })
              );
              toast.success("Product added successfully");
            }}
            className=" w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500"
          >
            +
          </span>
        </div>
        <div className=" w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>${item?.quantity * item?.price}</p>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
