import { FaLongArrowAltLeft } from "react-icons/fa";

export default function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 flex duration-300 items-center justify-center z-10 absolute top-[40%] left-2 cursor-pointer"
    >
      <span className=" cursor-pointer">
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
}
