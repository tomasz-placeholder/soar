import CardChip from 'public/icons/card.svg'
import MasterCard from 'public/icons/mastercard.svg'
export default function Card({
	card,
	...props
}: {
	card: { dark?: boolean; balance: string; holder: string; valid: string; number: string }
}) {
	return (
		<section
			className={`relative flex w-full flex-col rounded-[25px] ${card.dark ? 'bg-gradient-to-br from-[#5B5A6F] to-black text-white' : 'bg-white text-[#343C6A]'}`}
			{...props}
		>
			<img src={CardChip} role='presentation' className={`${card.dark ? 'invert-100' : ''} absolute top-6 right-6 h-8 w-8`} />
			<div className='px-6 py-6'>
				<h3 className='text-xs text-[#718EBF] uppercase'>Balance</h3>
				<div className='text-[20px]'>{card.balance}</div>
			</div>
			<div className='flex px-6 pb-10'>
				<div className='w-full'>
					<h3 className='text-xs text-[#718EBF] uppercase'>Card Holder</h3>
					{card.holder}
				</div>
				<div className='bg-line w-full'>
					<h3 className='text-xs text-[#718EBF] uppercase'>Valid Thru</h3>
					{card.valid}
				</div>
			</div>
			<div className='flex justify-between border-t border-t-[#DFEAF2] bg-gradient-to-b from-white/15 to-white/0 py-5 pr-6 pl-6 text-[22px] whitespace-nowrap'>
				{card.number}
				<img src={MasterCard} alt='Mastercard' />
			</div>
		</section>
	)
}
