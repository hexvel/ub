'use client'

import { Spinner } from '@/components/spinner'
import { useSession } from 'next-auth/react'
import Heading from '../_components/heading'

const WelcomePage = () => {
	const { status } = useSession()

	if (status === 'loading') {
		return (
			<div className='h-full flex items-center justify-center'>
				<Spinner />
			</div>
		)
	}

	return (
		<div className='h-full flex items-center justify-center'>
			<Heading />
		</div>
	)
}

export default WelcomePage
