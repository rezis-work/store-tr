import React from "react";

export default function Heading({
  heading,
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <p className={` text-3xl font-semibold pb-6 ${className}`}>{heading}</p>
  );
}
