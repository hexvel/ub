'use client'

import React from 'react'

import { Spinner } from '@/components/spinner'
import { useSession } from 'next-auth/react'
import Navbar from './_components/navbar'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
	const { status } = useSession()

	if (status === 'loading') {
		return (
			<div className='h-full flex items-center justify-center'>
				<Spinner />
			</div>
		)
	}

	return (
		<div className='h-full flex flex-col'>
			<Navbar />
			<main className='h-full'>{children}</main>
		</div>
	)
}

export default UserLayout
