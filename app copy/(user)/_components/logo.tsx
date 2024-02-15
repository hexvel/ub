import { Poppins } from 'next/font/google'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const font = Poppins({
	subsets: ['latin'],
	weight: ['400', '600'],
})

const Logo = () => {
	const router = useRouter()

	return (
		<div
			onClick={() => router.push('/')}
			className='hidden md:flex items-center gap-x-2 cursor-pointer'
		>
			<Image
				src='/logo.svg'
				height='40'
				width='40'
				alt='Logo'
				className='dark:hidden'
			/>
			<Image
				src='/logo-dark.svg'
				height='40'
				width='40'
				alt='Logo'
				className='hidden dark:block'
			/>
			<p className={cn('font-semibold text-xl', font.className)}>Hexvel</p>
		</div>
	)
}

export default Logo
