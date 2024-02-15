import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth'
import VkProvider from 'next-auth/providers/vk'

export const authOptions: NextAuthOptions = {
	providers: [
		VkProvider({
			clientId: process.env.VK_CLIENT_ID as string,
			clientSecret: process.env.VK_CLIENT_SECRET as string,
			allowDangerousEmailAccountLinking: true,
		}),
	],
	session: {
		maxAge: 30 * 24 * 60 * 60,
	},
	secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
