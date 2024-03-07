import Container from "@/app/components/Container";
import OnSale from "@/app/components/OnSale";
import ProductInfo from "@/app/components/ProductInfo";
import { RichText } from "@/app/components/RichText";
import { client, urlFor } from "@/app/lib/sanityClient";
import { ProductProps } from "@/type";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const query = groq`*[_type == "product"]{
    slug
  }`;
  const slugs: any = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug?.slug?.current);
  return slugRoutes?.map((slug: string) => ({
    slug,
  }));
};

const SpecialOffersQuery = groq`*[_type == "product" && specialoffers]{
  ...
} | order(_createdAt asc)`;

async function SinglePage({ params: { slug } }: Props) {
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
    ...
  }`;

  const product: ProductProps = await client.fetch(query, { slug });
  const specialOffersProducts = await client.fetch(SpecialOffersQuery);
  return (
    <Container className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
        <div>
          <OnSale products={specialOffersProducts} />
        </div>
        <div className=" h-full xl:col-span-2">
          <Image
            src={urlFor(product?.image).url()}
            alt="product image"
            width={500}
            height={500}
            className=" w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <ProductInfo product={product} />
        </div>
      </div>
      <div className=" mt-10">
        <h3 className=" mb-10 text-3xl font-bold">About this Product</h3>
        <PortableText value={product?.body} components={RichText} />
      </div>
    </Container>
  );
}

export default SinglePage;
