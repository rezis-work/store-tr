import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Auth0 from "next-auth/providers/auth0";
import LinkedIn from "next-auth/providers/linkedin";
import Instagram from "next-auth/providers/instagram";
import Discord from "next-auth/providers/discord";
import NextAuth from "next-auth/next";

const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Instagram({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
    }),
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
    Auth0({
      clientId: process.env.NEXTAUTH_URL!,
      clientSecret: process.env.NEXTAUTH_SECRET!,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
