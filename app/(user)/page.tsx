import { groq } from "next-sanity";
import Banner from "../components/Banner";
import { client } from "../lib/sanityClient";
import NewArrival from "../components/NewArrival";
import HomeBanner from "../components/HomeBanner";
import BestSellers from "../components/BestSellers";
import YearProduct from "../components/YearProduct";

export const revalidate = 10;

const bannerQuery = groq`*[_type == "banner"]{
  image,
  _id
} | order(_createdAt asc)`;

const newArrivalQuery = groq`*[_type == "product" && position == "New Arrivals"]{
  ...
} | order(_createdAt asc)`;

const bestSellerQuery = groq`*[_type == "product" && bestseller]{
  ...
} | order(_createdAt asc)`;

const SpecialOffersQuery = groq`*[_type == "product" && specialoffers]{
  ...
} | order(_createdAt asc)`;

export default async function HomePage() {
  const banners = await client.fetch(bannerQuery);
  const newArrivalProducts = await client.fetch(newArrivalQuery);
  const bestSellerProducts = await client.fetch(bestSellerQuery);
  const specialOffersProducts = await client.fetch(SpecialOffersQuery);
  return (
    <main className=" text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
      <NewArrival products={newArrivalProducts} />
      <HomeBanner />
      <BestSellers products={bestSellerProducts} title="Our Bestsellers" />
      <YearProduct />
      <BestSellers products={specialOffersProducts} title="Special Offers" />
    </main>
  );
}
