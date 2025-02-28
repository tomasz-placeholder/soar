import clsx from 'clsx'
import Send from 'public/icons/send.svg'
import { useEffect, useState } from 'react'

export async function fetchTransfers() {
	const API_URL = import.meta.env.VITE_API_URL
	const res = await fetch(`${API_URL}/frequenttransfers`)
	if (!res.ok) throw new Error(`Response status: ${res.status}`)
	return res.json()
}

export default function QuickTransfer({ className, ...props }: { className?: string }) {
	const [transfers, setTransfers] = useState<Array<any>>([])
	const [selected, setSelected] = useState<string | null>(null)

	useEffect(() => {
		const loadTransfers = async () => {
			try {
				const data = await fetchTransfers()
				setTransfers(data)
			} catch (error) {
				console.error(error)
			}
		}
		loadTransfers()
	}, [])

	return (
		<section {...props} className={clsx('flex flex-col gap-5', className)}>
			<header className='flex items-center justify-between'>
				<h2 className='text-[20px] font-semibold text-[#343C6A]'>Quick Transfer</h2>
			</header>
			<div className='flex h-full flex-col justify-between rounded-2xl bg-white p-6'>
				<div className='flex'>
					{transfers?.map((transfer) => (
						<label
							key={transfer.uuid}
							className={clsx('flex cursor-pointer flex-col items-center gap-2 rounded-lg p-3 text-center')}
						>
							<input
								type='radio'
								name='transfer'
								value={transfer.uuid}
								checked={selected === transfer.uuid}
								onChange={() => setSelected(transfer.uuid)}
								className='hidden'
							/>
							<img src={transfer.photo} alt={transfer.name} className='h-17.5 w-17.5 rounded-full object-cover' />
							<div>
								<p className={clsx('text-sm', selected === transfer.uuid && 'font-bold')}>{transfer.name}</p>
								<p className='text-xs text-gray-500'>{transfer.position}</p>
							</div>
						</label>
					))}
				</div>

				<div className='flex w-full items-center gap-2'>
					<label htmlFor='amount' className='font-light whitespace-nowrap text-[#718EBF]'>
						Write Amount
					</label>
					<div className='flex w-full rounded-full bg-[#edf1f7]'>
						<input
							id='amount'
							type='text'
							placeholder='525.50'
							className='w-full rounded-full bg-[#EDF1F7] px-4 py-2 focus:outline-none'
						/>
						<button className='flex cursor-pointer gap-2 rounded-full bg-black py-2 pr-8 pl-4 text-white'>
							Send
							<img src={Send} role='presentation' className='h-6.5 w-6.5' />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
