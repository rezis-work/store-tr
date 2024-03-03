"use client";

import sanityConfig from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function studio() {
  return <NextStudio config={sanityConfig} />;
}
