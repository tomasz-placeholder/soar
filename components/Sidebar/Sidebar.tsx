import clsx from 'clsx'
import Close from 'public/icons/close.svg'
import { NavLink } from 'react-router'
import { useSidebar } from '../../context/SidebarContext'
import Menu from '../Sidebar/Menu/Menu'
import Logo from '/logo.svg'

export default function Sidebar({ className }: { className?: string }) {
	const { toggleSidebar, isOpen } = useSidebar()
	return (
		<header
			className={clsx(
				'fixed lg:relative lg:left-0 transition-all flex z-50 bg-white flex-col border-r border-r-[#E6EFF5] w-max h-screen',
				isOpen ? 'left-0' : '-left-4/5',
				className
			)}
		>
			<div className="flex px-10 gap-4 py-7">
				<NavLink to='/' aria-label='Dashboard'>
					<img src={Logo} alt='Soar Task logo' className='h-10 w-auto' />
				</NavLink>
				<button onClick={toggleSidebar} className='cursor:pointer lg:hidden'>
					<img src={Close} />
				</button>
			</div>
			<Menu />
		</header>
	)
}