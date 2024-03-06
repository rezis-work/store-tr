import Image from "next/image";
import bannerImg from "../assets/homebanner.webp";

export default function HomeBanner() {
  return (
    <div className="relative">
      <Image
        src={bannerImg}
        alt="banner img"
        width={2000}
        height={2000}
        className=" w-full h-[400px] object-cover"
      />
      <div className=" w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20" />
    </div>
  );
}
