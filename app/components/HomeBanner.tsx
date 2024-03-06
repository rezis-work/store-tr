import Image from "next/image";
import bannerImg from "../assets/homebanner.webp";

export default function HomeBanner() {
  return (
    <div>
      <Image
        src={bannerImg}
        alt="banner img"
        width={2000}
        height={2000}
        className=" w-full h-[700px] object-cover"
      />
    </div>
  );
}
