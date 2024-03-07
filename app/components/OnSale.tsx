import { ProductProps } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/sanityClient";
import Price from "./Price";

interface Props {
  products: ProductProps[];
}

export default function OnSale({ products }: Props) {
  return (
    <div>
      <h3 className=" text-xl font-semibold mb-6 underline decoration-[1px]">
        Products on sale
      </h3>
      <div className=" flex flex-col gap-2 justify-normal">
        {products?.map((item: ProductProps) => (
          <div key={item?._id}>
            <Link
              href={`/product/${item?.slug?.current}`}
              className=" flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
            >
              <Image
                src={urlFor(item?.image).url()}
                alt="product image"
                className=" w-24 object-contain"
                width={200}
                height={200}
              />
              <div className=" flex flex-col gap-2">
                <p className=" text-sm tracking-tighter font-medium">
                  {item?.title.substring(0, 7)}
                </p>
                <p className=" text-sm font-semibold">
                  <Price amount={item?.price} />
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
