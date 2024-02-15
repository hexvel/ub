import Navbar from '@/app/(user)/_components/navbar'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full flex flex-col items-center justify-center'>
			<Navbar />
			<main className='h-full'>{children}</main>
		</div>
	)
}

export default MainLayout
