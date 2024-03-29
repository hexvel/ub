import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export function HowLongPollWork() {
	return (
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>Как происходит взаимодействие?</AccordionTrigger>
				<AccordionContent>
					<p>
						Что ж, давайте немножко углубимся в взаимодействие клиента с
						сервером. Мы затронем такую технологию, как LongPoll
					</p>
					<blockquote className='mt-6 border-l-2 pl-6 italic text-muted-foreground'>
						Когда речь заходит о взаимодействии клиента с LongPoll (длительное
						ожидание) сервером, мы говорим о механизме, позволяющем серверу
						уведомлять клиента о наступлении определенных событий в режиме
						реального времени. В отличие от традиционного запрос-ответ
						протокола, где клиент активно отправляет запросы на сервер и ожидает
						ответа, в случае с LongPoll сервером, клиент отправляет запрос на
						сервер и удерживает соединение открытым в течение определенного
						времени или до наступления события.
					</blockquote>
					<p className='mt-6'>
						Так вот, когда сервер получает запрос от клиента, он проверяет, есть
						ли новая информация или события, которые должны быть переданы
						клиенту. Если такие данные доступны сразу, сервер отправляет их в
						ответ на запрос клиента. Однако, если данных или событий нет, сервер
						не сразу отправляет пустой ответ. Вместо этого сервер удерживает
						соединение открытым до тех пор, пока не произойдет изменение
						подписанных клиентом данных или истечет установленное время
						ожидания. Как только событие или данные появляются, сервер
						отправляет их в ответ на ожидающий запрос клиента.
						<br />
						Именно так устроена инфраструктура VK API - вы отправляете запрос на
						получение событий (например новое сообщение, при котором нужно к
						примеру редактировать данное сообщение), и сервер отправляет вам
						обратно данные о событии. В случае нашего модуля - Мы просто
						принимает эти событие, и исходя из написанного текста выполняем
						какое либо действие.
					</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
