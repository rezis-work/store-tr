export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/cart", "/success", "/profile"],
};