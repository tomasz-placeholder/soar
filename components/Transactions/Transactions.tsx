import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Transaction from './Transaction/Transaction'

export async function fetchTransactions() {
	const API_URL = import.meta.env.VITE_API_URL
	const res = await fetch(`${API_URL}/transactions`)
	if (!res.ok) throw new Error(`Response status: ${res.status}`)
	return res.json()
}

export default function Transactions({ className, ...props }: { className?: string }) {
	const [transactions, setTransactions] = useState<Array<any>>([])

	useEffect(() => {
		const loadTransactions = async () => {
			try {
				const data = await fetchTransactions()
				setTransactions(data)
			} catch (error) {
				console.error(error)
			}
		}
		loadTransactions()
	}, [])

	return (
		<section {...props} className={clsx('flex flex-col gap-5', className)}>
			<header className='flex items-center justify-between'>
				<h2 className='text-[20px] font-semibold text-[#343C6A]'>Recent Transactions</h2>
			</header>
			<div className='flex h-full flex-col gap-2.5 rounded-2xl bg-white p-6'>
				{transactions?.map((transaction) => <Transaction key={transaction.value} transaction={transaction} />)}
			</div>
		</section>
	)
}
