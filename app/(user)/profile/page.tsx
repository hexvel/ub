'use client'

import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'

const UserProfilePage = () => {
	const { data } = useSession()

	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<h1>Hello, {data?.user?.name}!</h1>
			<Button size='lg' onClick={() => signOut({ callbackUrl: '/' })}>
				Выйти
			</Button>
		</div>
	)
}

export default UserProfilePage
