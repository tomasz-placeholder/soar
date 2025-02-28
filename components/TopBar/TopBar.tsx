import Hamburger from 'public/icons/hamburger.svg'
import notification from 'public/icons/notification.svg'
import search from 'public/icons/search.svg'
import settings from 'public/icons/settings_outline.svg'
import user from 'public/user.png'

import { NavLink } from 'react-router'
import { useSidebar } from '../../context/SidebarContext'

export default function TopBar({ title }: { title: string }) {
	const { toggleSidebar } = useSidebar()

	return (
		<header className='flex items-center gap-5 border-b border-[#E6EFF5] bg-white px-10 py-5'>
			<button onClick={toggleSidebar} className='cursor:pointer lg:hidden'>
				<img src={Hamburger} />
			</button>
			<h1 className='mr-auto text-[1.75rem] font-semibold whitespace-nowrap'>{title}</h1>
			<form action={''} className='relative hidden lg:block'>
				<input type='text' placeholder='Search for something' className='rounded-full bg-[#F5F7FA] py-4 pl-14' />
				<button type='submit' className='absolute top-1/2 left-6 flex -translate-y-1/2 items-center gap-2 text-gray-600'>
					<img src={search} />
				</button>
			</form>
			<NavLink to='/settings' className='hidden h-14 w-14 items-center justify-center rounded-full bg-[#F5F7FA] lg:flex'>
				<img src={settings} />
			</NavLink>
			<NavLink to='#' className='hidden h-14 w-14 items-center justify-center rounded-full bg-[#F5F7FA] lg:flex'>
				<img src={notification} />
			</NavLink>
			<NavLink to='#' className='flex h-15 w-15 items-center justify-center rounded-full bg-[#F5F7FA]'>
				<img src={user} />
			</NavLink>
		</header>
	)
}
