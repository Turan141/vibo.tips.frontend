const pricingItems = [
	{
		title: "Transfer fee & payer",
		description:
			"Covers the cost of the transfer ($Y or Z%) and whether it is paid by the sender or the recipient."
	},
	{
		title: "Service commission (5%)",
		description: "This fixed 5% fee support all global transactions."
	},
	{
		title: "Withdrawal fee",
		description:
			"The fee charged for transferring funds is (X% or fixed sum) and depends on the transfer method."
	}
]

export function SimplePricing() {
	return (
		<section id='simple-pricing' className='py-14 sm:py-16 lg:py-[72px]'>
			<div className='mx-auto w-full max-w-[1296px] px-5 sm:px-8 lg:px-12'>
				<div className='max-w-[720px]'>
					<h2 className='text-[44px] font-[500] leading-[0.98] tracking-[-0.05em] text-[#111111] sm:text-[52px] lg:text-[58px]'>
						Simple pricing
					</h2>
					<p className='mt-4 text-[16px] font-medium leading-[1.45] tracking-[-0.02em] text-[#656b74] sm:text-[18px]'>
						Free registration. Free to create QR codes. You only pay when you earn.
					</p>
				</div>

				<div className='mt-10 grid gap-8 border-[#cfd2d8] sm:mt-12 lg:mt-[54px] lg:grid-cols-3 lg:gap-0'>
					{pricingItems.map((item, index) => (
						<article
							key={item.title}
							className={`px-0 pb-0 pt-0 lg:px-6 ${index === 0 ? "lg:border-l lg:border-[#c5c8cf] lg:pl-6" : ""} ${index !== 2 ? "lg:border-r lg:border-[#c5c8cf]" : ""}`}
						>
							<h3 className='text-[28px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#171717] sm:text-[32px] lg:text-[28px]'>
								{item.title}
							</h3>
							<p className='mt-5 max-w-[360px] text-[15px] font-medium leading-[1.45] tracking-[-0.02em] text-[#595f68] sm:text-[16px] lg:text-[16px]'>
								{item.description}
							</p>
						</article>
					))}
				</div>

				<div className='mt-12 sm:mt-14 lg:mt-[68px]'>
					<a
						href='#create-account'
						className='inline-flex h-[58px] items-center justify-center rounded-[9px] bg-[#1687ff] px-8 text-[16px] font-extrabold tracking-[-0.03em] !text-white shadow-[0_16px_28px_rgba(22,135,255,0.26)] transition-colors duration-200 hover:bg-[#0f78eb]'
					>
						Create free account
					</a>
				</div>
			</div>
		</section>
	)
}
