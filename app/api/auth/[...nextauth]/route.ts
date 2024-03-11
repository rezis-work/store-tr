import Github from "next-auth/providers/github";
import Auth0 from "next-auth/providers/auth0";
import NextAuth from "next-auth/next";

const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Auth0({
      clientId: process.env.NEXTAUTH_URL!,
      clientSecret: process.env.NEXTAUTH_SECRET!,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
