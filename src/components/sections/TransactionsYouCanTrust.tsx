import React from "react"

function LockIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			className='h-[18px] w-[18px] text-[#0a0a0a]'
		>
			<path d='M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7zm3 9.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' />
		</svg>
	)
}

function BranchIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			stroke='currentColor'
			strokeWidth='1'
			className='h-[18px] w-[18px] text-[#0a0a0a]'
		>
			<path
				stroke='none'
				d='M12 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 21a3 3 0 100-6 3 3 0 000 6z'
			/>
			<path fill='none' strokeWidth='2' d='M12 9v4m0 0H6v2m6-2h6v2' />
		</svg>
	)
}

function ShieldIcon() {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			className='h-[18px] w-[18px] text-[#0a0a0a]'
		>
			<path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' />
		</svg>
	)
}

const transactionFeatures = [
	{
		title: "Blockchain",
		description:
			"All transactions are duplicated in our private blockchain, providing an extra layer of transparency and protection for every payment.",
		icon: LockIcon
	},
	{
		title: "Encryption",
		description:
			"Every operation is secured with advanced 256-bit encryption, ensuring your data and payments remain fully protected at all times.",
		icon: BranchIcon
	},
	{
		title: "PCI DSS:",
		description:
			"We strictly comply with PCI DSS 4.1 standards, meeting the highest global requirements for financial security and reliability.",
		icon: ShieldIcon
	}
]

export function TransactionsYouCanTrust() {
	return (
		<section className='bg-[#0a0a0a] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[96px]'>
			<div className='mx-auto w-full max-w-[1296px]'>
				<div className='max-w-[720px]'>
					<h2 className='text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[54px]'>
						Transactions you can trust
					</h2>
					<p className='mt-4 text-[15px] font-medium leading-[1.45] tracking-[-0.01em] text-[#a1a1aa] sm:text-[17px]'>
						We guarantee the highest level of protection for your financial data.
					</p>
				</div>

				<div className='mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:mt-[64px] lg:grid-cols-3 lg:gap-6'>
					{transactionFeatures.map((feature) => (
						<article
							key={feature.title}
							className='flex flex-col rounded-[16px] bg-[#1a1a1c] p-6 sm:p-8 lg:p-10'
						>
							<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d0e1ff]'>
								<feature.icon />
							</div>
							<h3 className='mt-6 text-[22px] font-bold tracking-[-0.03em] text-white sm:text-[24px] lg:mt-8 lg:text-[24px]'>
								{feature.title}
							</h3>
							<p className='mt-3 text-[14px] font-medium leading-[1.6] tracking-[-0.01em] text-[#9ca3af] lg:mt-4 lg:text-[15px]'>
								{feature.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
