import Container from "./Container";
import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <Container className=" msx-w-container mx-auto border-t-[1px] group">
        <p className=" text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className=" text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | TRcomerce | All rights reserved
          <a href="https://github.com/rezis-work" target="_blanck">
            <span className=" ml-1 font-medium  ">
              Powered by LineDevLTD |{" "}
              <span className="hover:underline">Creator Rezi Karanadze</span>
            </span>
          </a>
        </p>
      </Container>
    </div>
  );
}
