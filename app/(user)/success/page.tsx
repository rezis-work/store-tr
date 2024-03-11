"use client";
import Container from "@/app/components/Container";
import { resetCart } from "@/app/redux/trcomerceSlice";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SuccessPage({ searchParams }: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    !searchParams?.session_id ? redirect("/") : dispatch(resetCart());
  }, [dispatch, searchParams]);
  return (
    <Container className=" flex items-center justify-center py-20">
      <div className=" min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className=" text-3xl font-bold">
          Your Payment Accepted by TRcomerce.com
        </h2>
        <p>Now you can view your orders or continiue Shopping with us</p>
        <div className=" flex items-center gap-x-5">
          <Link href={"/order"}>
            <button className=" bg-primeColor hover:bg-black duration-200 text-slate-100 w-44 h-12 rounded-full text-xl">
              View Orders
            </button>
          </Link>
          <Link href={"/shop"}>
            <button className=" bg-primeColor hover:bg-black duration-200 text-slate-100 w-52 h-12 rounded-full text-xl">
              Continiue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
