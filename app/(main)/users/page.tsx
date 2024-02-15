'use client'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const UsersPage = async () => {
	const users = await prisma.users.findMany()

	return (
		<div>
			<h1>Пользователи</h1>
			<ul>
				<li>
					{users.map(user => (
						<div key={user.id}>
							<p>{user.fistName}</p>
							<p>{user.lastName}</p>
						</div>
					))}
				</li>
			</ul>
		</div>
	)
}

export default UsersPage
