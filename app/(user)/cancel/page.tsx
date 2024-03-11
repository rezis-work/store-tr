import Container from "@/app/components/Container";
import Link from "next/link";

export default function CancelPage() {
  return (
    <Container>
      <div className=" w-full flex flex-col justify-center items-center gap-10">
        <h1>You canceld your payment process</h1>
        <Link href={"/shop"}>
          <button className=" bg-primeColor text-white p-6 text-3xl rounded-lg hover:bg-black duration-200">
            continiue shopping here
          </button>
        </Link>
      </div>
    </Container>
  );
}
