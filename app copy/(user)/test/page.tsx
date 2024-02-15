'use client'

import { createUser } from '@/actions/userAction'

const TestPage = () => {
	return (
		<form
			action={async data => {
				createUser(data)
			}}
			className='h-full flex items-center flex-col justify-center'
		>
			<input type='text' name='id' placeholder='id' required />
			<input type='text' name='firstName' placeholder='firstName' required />
			<input type='text' name='lastName' placeholder='lastName' required />
			<button>хуй</button>
		</form>
	)
}

export default TestPage
