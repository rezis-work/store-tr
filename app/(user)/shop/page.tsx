"use client";
import Container from "@/app/components/Container";
import ListProduct from "@/app/components/ListProduct";
import Product from "@/app/components/Product";
import { products } from "@/app/lib/sanityClient";
import { ProductProps } from "@/type";
import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";

export default function ShopPage() {
  const [showGrid, setShowGrid] = useState(true);
  const [showList, setShowList] = useState(false);
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await products();
        setProductData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(productData);
  if (isLoading) return <p>Loading...</p>;
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
      {showGrid ? (
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {productData?.map((item: ProductProps) => (
            <Product key={item?._id} product={item} />
          ))}
        </div>
      ) : (
        <div className=" w-full grid grid-cols-1 gap-5">
          {productData?.map((item: ProductProps) => (
            <ListProduct key={item?._id} product={item} />
          ))}
        </div>
      )}
    </Container>
  );
}
