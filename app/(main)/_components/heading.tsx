'use client'

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'

import { HowLongPollWork } from '@/components/modals/how-longpoll-work'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { AlertCircle, CalendarIcon } from 'lucide-react'
import Link from 'next/link'

const Heading = () => {
	return (
		<div className='flex flex-col items-center justify-center max-w-5xl px-4 space-y-4'>
			<h1 className='text-xl sm:text-3xl md:text-4xl font-bold'>
				Твой личный бот для удобного взаимодействия с ВК{' '}
				<HoverCard>
					<HoverCardTrigger asChild>
						<span className='underline cursor-help'>Hexvel LP</span>
					</HoverCardTrigger>
					<HoverCardContent className='w-80 flex items-center'>
						<div className='flex justify-between space-x-4'>
							<Avatar>
								<AvatarImage src='https://sun9-16.userapi.com/impg/V0FlGKElaqf3uX1gxMBYGS_SSnH39PIhPYrFYA/zuCXmJjruGo.jpg?size=2560x1822&quality=95&sign=61c9a01aeb69c5235b7e627bf54e3da2&type=album' />
								<AvatarFallback>VK</AvatarFallback>
							</Avatar>
							<div className='space-y-1'>
								<h4 className='text-sm font-semibold'>Ваш любимый модуль</h4>
								<p className='text-sm'>
									<Link
										href='https://vk.com/hexvel_lp'
										target='_blank'
										className='underline'
									>
										Hexvel LP
									</Link>
								</p>
								<div className='flex items-center pt-2'>
									<CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{' '}
									<span className='text-xs text-muted-foreground'>
										Первая версия создана 25 июня 2022 года
									</span>
								</div>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
			</h1>
			<h3 className='text-base sm:text-xl md:text-2xl font-medium'>
				Как разработчик, я использую различные технологии и языки
				программирования для создания своих проектов. Для написания бота на
				ВКонтакте я использовал язык Python и асинхронную библиотеку, которая
				позволяет быстро и эффективно обрабатывать запросы и события. Кроме
				того, я использовал язык C# для написания различных утилит, которые
				помогают управлять ботом и обрабатывать данные.
			</h3>
			<HowLongPollWork />
			<Alert variant='default'>
				<AlertCircle className='h-4 w-4' />
				<AlertTitle>Внимание!</AlertTitle>
				<AlertDescription>
					Не стоит воспринимать контент данной веб-страницы как что-то готовое.
					Данный сайт будет дополняться.
				</AlertDescription>
			</Alert>
		</div>
	)
}

export default Heading
