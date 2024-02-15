'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Spinner } from '@/components/spinner'
import { Button } from '@/components/ui/button'
import useScrollTop from '@/hooks/use-scroll-top'

import { cn } from '@/lib/utils'

import { signIn, useSession } from 'next-auth/react'

import Logo from './logo'
import UserItem from './user-item'

const Navbar = () => {
	const { status } = useSession()
	const scrolled = useScrollTop()

	const handleSignIn = () => {
		signIn('vk', {
			callbackUrl: '/',
		})
	}

	return (
		<div
			className={cn(
				'z-50 bg-background border-b-[1px] sticky top-0 flex items-center w-full p-2',
				scrolled && 'border-b shadow-sm'
			)}
		>
			<Logo />
			<div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
				{status === 'loading' && <Spinner />}
				{status === 'unauthenticated' && (
					<Button size='sm' onClick={handleSignIn}>
						Войти через VK
					</Button>
				)}
				{status === 'authenticated' && <UserItem />}
				<ModeToggle />
			</div>
		</div>
	)
}

export default Navbar
