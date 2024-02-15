'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export const createUser = async (FormData: FormData) => {
	const userId = FormData.get('id')
	const firstName = FormData.get('firstName')
	const lastName = FormData.get('lastName')

	const create = await prisma.users.create({
		data: {
			id: userId as string,
			fistName: firstName as string,
			lastName: lastName as string,
			imageUrl:
				'https://sun9-40.userapi.com/impf/XhO_l5kFxMhCoj7z4CdM3ZNKkompHBqH9uw-XA/5VWkOGnt1PM.jpg?size=735x690&quality=95&sign=a82fbf8b4daee52e2a90997699d5896e&type=album',
		},
	})

	revalidatePath('/profile')
}
