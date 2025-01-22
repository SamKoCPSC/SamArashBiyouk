import NextAuth, { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
    providers: [
        
    ],
    secret: process.env.SECRET,
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
       return true
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token
      },
      async session({ session, user }) {
        return session
      },
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }