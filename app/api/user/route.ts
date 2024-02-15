import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
	await prisma.$connect()
	const users = prisma.users.create({
		data: {
			fistName: 'Дилмурод',
			lastName: 'Абдукаримов',
			imageUrl:
				'https://sun9-40.userapi.com/impf/XhO_l5kFxMhCoj7z4CdM3ZNKkompHBqH9uw-XA/5VWkOGnt1PM.jpg?size=735x690&quality=95&sign=a82fbf8b4daee52e2a90997699d5896e&type=album',
		},
	})

	return Response.json({ users })
}
