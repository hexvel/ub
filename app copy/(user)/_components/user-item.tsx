'use client'
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ChevronsLeftRight, LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

const UserItem = () => {
	const { data } = useSession()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='rounded-md'>
				<div role='button' className='flex text-sm p-3 hover:bg-primary/5 '>
					<div className='gap-x-2 flex items-center max-w-[150px]'>
						<Avatar className='h-5 w-5'>
							<AvatarImage src={data?.user?.image as string} />
						</Avatar>
						<span className='text-start font-medium line-clamp-1'>Профиль</span>
					</div>
					<ChevronsLeftRight className='rotate-90 ml-2 text-muted-foreground h-4 w-4' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-80'
				align='start'
				alignOffset={11}
				forceMount
			>
				<div className='flex flex-col space-y-4 p-2'>
					<p className='text-xs font-medium leading-none text-muted-foreground'>
						{data?.user?.email}
					</p>
					<div>
						<Link href='/profile' className='flex items-center gap-x-2'>
							<div className='rounded-md p-1'>
								<Avatar className='h-8 w-8'>
									<AvatarImage src={data?.user?.image as string} />
								</Avatar>
							</div>
							<div className='space-y-1'>
								<span className='text-sm line-clamp-1 text-sky-500'>
									{data?.user?.name}
								</span>
							</div>
						</Link>
					</div>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
					<Button variant='ghost' onClick={() => signOut({ callbackUrl: '/' })}>
						<LogOut className='mr-2 h-4 w-4' /> Выйти
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserItem
