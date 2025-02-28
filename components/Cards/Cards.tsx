import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import Card from './Card/Card'

export async function fetchCards() {
	const API_URL = import.meta.env.VITE_API_URL
	const res = await fetch(`${API_URL}/cards`)
	if (!res.ok) throw new Error(`Response status: ${res.status}`)
	return res.json()
}

export default function Cards({ className, ...props }: { className?: string }) {
	const [cards, setCards] = useState<Array<any>>([])

	useEffect(() => {
		const loadCards = async () => {
			try {
				const data = await fetchCards()
				setCards(data)
			} catch (error) {
				console.error(error)
			}
		}
		loadCards()
	}, [])

	return (
		<section {...props} className={clsx('flex flex-col gap-5', className)}>
			<header className='flex items-center justify-between'>
				<h2 className='text-[20px] font-semibold text-[#343C6A]'>My Cards</h2>
				<NavLink to='#' className='text-[17px]'>
					See All
				</NavLink>
			</header>
			<div className='flex flex-col gap-6 lg:flex-row'>{cards?.map((card) => <Card key={card.number} card={card} />)}</div>
		</section>
	)
}
