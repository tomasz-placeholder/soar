import { CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

export async function fetchBalanceHistory() {
	const API_URL = import.meta.env.VITE_API_URL
	const res = await fetch(`${API_URL}/balancehistory`)
	if (!res.ok) throw new Error(`Response status: ${res.status}`)
	return res.json()
}

export default function BalanceHistory({ className, ...props }: { className?: string }) {
	const [balanceHistory, setBalanceHistory] = useState<Array<{ month: string; balance: number }>>([])

	useEffect(() => {
		const loadBalanceHistory = async () => {
			try {
				const data = await fetchBalanceHistory()
				setBalanceHistory(data)
			} catch (error) {
				console.error(error)
			}
		}
		loadBalanceHistory()
	}, [])

	const data = {
		labels: balanceHistory.map((item) => item.month),
		datasets: [
			{
				fill: true,
				label: 'Balance',
				data: balanceHistory.map((item) => item.balance),
				borderColor: '#396AFF',
				backgroundColor: 'rgba(57, 106, 255, 0.2)',
				borderWidth: 3,
				tension: 0.4,
				pointRadius: 0,
			},
		],
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			datalabels: false,
			legend: {
				display: false,
			},
			tooltip: {
				mode: 'index',
				intersect: false,
				callbacks: {
					label: (context) => {
						return `Balance: $${context.raw}`
					},
				},
			},
		},
		scales: {
			y: {
				grid: {
					color: 'rgba(0, 0, 0, 0.05)',
					drawBorder: false,
				},
				ticks: {
					color: '#9CA3AF',
				},
				min: 0,
			},
			x: {
				grid: {
					display: false,
				},
				ticks: {
					color: '#9CA3AF',
				},
			},
		},
		interaction: {
			intersect: false,
			mode: 'index',
		},
	}

	return (
		<section {...props} className={clsx('flex flex-col gap-5', className)}>
			<header className='flex items-center justify-between'>
				<h2 className='text-[20px] font-semibold text-[#343C6A]'>Balance History</h2>
			</header>
			<div className='flex h-[300px] flex-col gap-2.5 rounded-2xl bg-white p-6'>
				{balanceHistory.length > 0 ? <Line options={options} data={data} /> : <p>Loading...</p>}
			</div>
		</section>
	)
}
