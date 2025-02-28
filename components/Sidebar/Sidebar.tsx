import clsx from 'clsx'
import { NavLink } from 'react-router'
import Menu from '../Sidebar/Menu/Menu'
import Logo from '/logo.svg'
type MenuItem = { icon: string; label: string; slug: string }

export default async function Sidebar({ className }: { className?: string }) {
	return (
		<header className={clsx('relative lg:left-0 flex flex-col transition-transform border-r border-r-[#E6EFF5] w-max h-screen', false ? 'left-0' : '-left-4/5' ,className)}>
			<NavLink to='/' aria-label='Dashboard' className='px-10 py-7'>
				<img src={Logo} alt='Soar Task logo' className='h-10 w-auto' />
			</NavLink>
			<Menu />
		</header>
	)
}
