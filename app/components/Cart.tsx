"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { ProductProps, StateProps } from "@/type";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";
import { resetCart } from "../redux/trcomerceSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import emptyCartImage from "../assets/emptyCart.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import Price from "./Price";

export default function Cart() {
  const { productData } = useSelector((state: StateProps) => state.trcomerce);
  const dispatch = useDispatch();
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item?.price * item?.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleReset = () => {
    const confirmed = window.confirm("Are you sure to reset your cart?");
    confirmed && dispatch(resetCart());
    toast.success("Cart resseted successfully!");
  };

  return (
    <Container>
      {productData?.length > 0 ? (
        <div className=" pb-20">
          <div className=" w-full h-20 bg-[#f5f7f7] text-primeColor hidden lg:grid grid-cols-5 place-content-center px-5 text-lg font-semibold">
            <h2 className=" col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className=" mt-5">
            {productData?.map((item: ProductProps) => (
              <div key={uuidv4()}>
                <CartItem item={item} />
              </div>
            ))}
          </div>
          <button
            onClick={() => handleReset()}
            className=" py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300 cursor-pointer"
          >
            Reset cart
          </button>
          <div className=" flex flex-col md:flex-row justify-between border p-4 items-center gap-2 md:gap-0">
            <div className=" flex items-center gap-4">
              <input
                type="text"
                placeholder="Coupon Number"
                className=" w-44 lg:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
              />
              <p className=" text-lg font-semibold">Apply Coupon</p>
            </div>
            <p>Update cart</p>
          </div>
          <div className=" max-w-7xl gap-4 flex justify-end mt-4">
            <div className=" w-96 flex flex-col gap-4">
              <h1 className=" text-2xl font-semibold text-right">
                Cart totals
              </h1>
              <div className="">
                <p className=" flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4">
                  Subtotal{" "}
                  <span>
                    <Price amount={totalAmt} />
                  </span>
                </p>
                <p className=" flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4">
                  Shipping Charge{" "}
                  <span>
                    <Price amount={20} />
                  </span>
                </p>
                <p className=" flex items-center justify-between border-[1px] border-gray-400  py-1.5 text-lg px-4">
                  Total{" "}
                  <span>
                    <Price amount={totalAmt + 20} />
                  </span>
                </p>
              </div>
              <div className=" flex justify-end">
                <button className=" w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                  Procced to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className=" flex flex-col justify-center items-center gap-4 pb-20"
        >
          <div>
            <Image
              src={emptyCartImage}
              alt="epmty cart image"
              width={300}
              height={300}
              className="m-auto rounded-full"
            />
          </div>
          <div className=" flex flex-col justify-center items-center mx-w-[500px] rounded-md bg-white shadow-lg p-4 py-8">
            <h1 className=" uppercase text-center mb-4 font-bold text-primeColor text-xl">
              Your cart Feels lonely.
            </h1>
            <p className=" text-sm text-center px-10 -mt-2 text-gray-500 mb-4">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              products and make it happy.
            </p>
            <Link
              className=" bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-semibold text-lg text-gray-200 hover:text-white duration-300"
              href={"/"}
            >
              Continiue Shopping
            </Link>
          </div>
        </motion.div>
      )}
    </Container>
  );
}
