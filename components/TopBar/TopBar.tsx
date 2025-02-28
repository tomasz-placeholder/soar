import notification from 'public/icons/notification.svg'
import search from 'public/icons/search.svg'
import settings from 'public/icons/settings_outline.svg'
import user from 'public/user.webp'

import { NavLink } from 'react-router'

export default function TopBar({ title }: { title: string }) {
	return (
		<header className='flex items-center gap-5 border-b border-[#E6EFF5] px-10 py-5'>
			<h1 className='mr-auto text-[1.75rem] font-semibold'>{title}</h1>
			<form action={''} className='relative'>
				<input type='text' placeholder='Search for something' className='rounded-full bg-[#F5F7FA] py-4 pl-14' />
				<button type='submit' className='absolute top-1/2 left-6 flex -translate-y-1/2 items-center gap-2 text-gray-600'>
					<img src={search} />
				</button>
			</form>
			<NavLink to='/settings' className='flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F7FA]'>
				<img src={settings} />
			</NavLink>
			<NavLink to='#' className='flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F7FA]'>
				<img src={notification} />
			</NavLink>
			<NavLink to='#' className='flex h-15 w-15 items-center justify-center rounded-full bg-[#F5F7FA]'>
				<img src={user} />
			</NavLink>
		</header>
	)
}
