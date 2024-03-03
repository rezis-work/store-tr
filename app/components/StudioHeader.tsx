import Link from "next/link";
import Logo from "@/app/assets/logo1.png";
import Image from "next/image";
import { IoReturnDownBack } from "react-icons/io5";

export default function StudioHeader(props: any) {
  return (
    <div>
      <div className=" p-5 bg-black text-gray-100 flex items-center justify-between">
        <Link
          href={"/"}
          className=" flex items-center gap-3 font-semibold hover:text-blue-600 duration-200"
        >
          <IoReturnDownBack className=" text-2xl" /> Go to Website
        </Link>
        <Image src={Logo} alt="logo" width={25} />
        <p className=" text-sm">Admin Studio for TRcomerce online shopping</p>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
