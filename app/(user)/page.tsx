import { groq } from "next-sanity";
import Banner from "../components/Banner";
import { client } from "../lib/sanityClient";

const bannerQuery = groq`*[_type == "banner"]{
  image,
  _id
} | order(_createdAt asc)`;

export default async function HomePage() {
  const banners = await client.fetch(bannerQuery);
  return (
    <main className=" text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
    </main>
  );
}
