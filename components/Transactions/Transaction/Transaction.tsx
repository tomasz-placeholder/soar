export default function Transaction({ transaction }: { transaction: { title: string; value: string; date: string; icon: string } }) {
	return (
		<section className='flex items-center gap-4'>
			<img src={transaction.icon} />
			<div className='w-full'>
				<h3 className='font-medium text-[#232323]'>{transaction.title}</h3>
				<div className='font-[15px] text-[#718EBF]'>{transaction.date}</div>
			</div>
			<div className={`whitespace-nowrap ${transaction.value.startsWith('-') ? 'text-[#FF4B4A]' : 'text-[#41D4A8]'}`}>
				{transaction.value}
			</div>
		</section>
	)
}
