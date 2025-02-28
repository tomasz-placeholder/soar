import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

export async function fetchMenu() {
	const API_URL = import.meta.env.VITE_API_URL
	const res = await fetch(`${API_URL}/navigation`)
	if (!res.ok) throw new Error(`Response status: ${res.status}`)
	return res.json()
}

export default function Menu() {
	const [menu, setMenu] = useState<Array<any>>([])

	useEffect(() => {
		const loadMenu = async () => {
			try {
				const data = await fetchMenu()
				setMenu(data)
			} catch (error) {
				console.error(error)
			}
		}
		loadMenu()
	}, [])

	return (
		<nav aria-label='Main Navigation'>
			<ul className='flex flex-col'>
				{menu?.map(({ icon, label, slug }: { icon: string; label: string; slug: string }) => (
					<li key={slug} className='relative'>
						<NavLink
							to={slug}
							className={({ isActive }) =>
								clsx(
									'flex items-center gap-6 px-10 py-5 transition-opacity',
									isActive
										? 'text-[#232323] after:absolute after:left-0 after:h-full after:w-2 after:rounded-e-2xl after:bg-[#232323]'
										: 'opacity-35 hover:bg-gray-200 hover:opacity-70',
								)
							}
						>
							<img src={icon} alt='' className='h-5 w-5' aria-hidden='true' />
							<span>{label}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
