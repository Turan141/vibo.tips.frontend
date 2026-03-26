"use client"

import { useState } from "react"

type DifferenceItem = {
	title: string
	headline: string
	description: string
}

const differenceItems: DifferenceItem[] = [
	{
		title: "Personalized tipping",
		headline: "Tailored QR pages for every service moment",
		description:
			"Create branded tip experiences for teams, venues, and individual staff members without adding setup friction."
	},
	{
		title: "AI-powered promo materials",
		headline: "Ready-to-share assets that help drive more scans",
		description:
			"Generate polished posters, table cards, and social assets that make your cashless tipping flow easier to spot and use."
	},
	{
		title: "Multiple QR cards",
		headline: "One account, multiple tip points",
		description:
			"Issue separate QR cards for counters, tables, chairs, or mobile staff while keeping reporting and payouts in one place."
	},
	{
		title: "Real-time analytics",
		headline: "See activity as it happens",
		description:
			"Track scans, conversions, and tip volume live so you know what locations and staff setups perform best."
	},
	{
		title: "Global connectivity",
		headline: "Built for service teams working across borders",
		description:
			"Support international guests, remote payouts, and region-specific payment habits with a setup that scales with you."
	},
	{
		title: "Payment methods",
		headline: "Flexible options for receiving and withdrawing tips",
		description:
			"Accept all major credit and debit cards. Withdraw to your bank account, e-wallet, or preferred payment method - your choice."
	}
]

const paymentRows = [
	["VISA", "Mastercard", "Maestro", "Skrill", "Discover"],
	["American Express", "Diners Club", "JCB", "PayPal", "Venmo"],
	["Apple Pay", "Google Pay", "Samsung Pay", "Visa Checkout", "Masterpass"],
	["Paysafe", "ACH", "Revolut", "eps", "GiroPay"],
	["iDEAL", "Pay by Bank", "V Bank", "Przelewy24"]
]

function BrandChip({ label }: { label: string }) {
	const textClassName =
		label.length > 14
			? "text-[8px] sm:text-[9px]"
			: label.length > 10
				? "text-[9px] sm:text-[10px]"
				: "text-[10px] sm:text-[11px]"

	return (
		<div className='flex h-[30px] min-w-[58px] items-center justify-center rounded-[6px] border border-white/10 bg-white px-2 text-center shadow-[0_10px_18px_rgba(0,0,0,0.18)] sm:h-[34px] sm:min-w-[64px] sm:px-2.5'>
			<span className={`font-bold leading-none tracking-[-0.02em] text-[#161616] ${textClassName}`}>
				{label}
			</span>
		</div>
	)
}

export function WhatMakesUsDifferent() {
	const [activeItem, setActiveItem] = useState("Payment methods")

	return (
		<section id='differences' className='px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16'>
			<div className='mx-auto w-full max-w-[1296px] rounded-[34px] bg-[#050505] px-6 py-10 text-white shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:px-8 sm:py-12 lg:px-[68px] lg:py-[60px]'>
				<div className='max-w-[560px]'>
					<h2 className='text-[38px] font-semibold leading-[0.98] tracking-[-0.065em] text-white sm:text-[48px] lg:text-[58px]'>
						What makes us different
					</h2>
					<p className='mt-3 text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-white/45'>
						Features designed with you in mind.
					</p>
				</div>

				<div className='mt-10 grid gap-8 lg:mt-[54px] lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start lg:gap-[62px]'>
					<div>
						<div className='border-t border-white/14'>
							{differenceItems.map((item) => {
								const isActive = item.title === activeItem

								return (
									<div key={item.title} className='border-b border-white/14'>
										<button
											type='button'
											onClick={() => setActiveItem(item.title)}
											aria-expanded={isActive}
											className='flex w-full items-center justify-between gap-4 py-5 text-left transition-opacity duration-200 hover:opacity-80'
										>
											<span className='text-[20px] font-semibold leading-[1.12] tracking-[-0.04em] text-white lg:text-[18px]'>
												{item.title}
											</span>
											<span className='text-[28px] font-light leading-none text-white'>
												{isActive ? "-" : "+"}
											</span>
										</button>

										{isActive ? (
											<div className='pb-5 pr-8'>
												<p className='text-[24px] font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-[28px] lg:text-[26px]'>
													{item.headline}
												</p>
												<p className='mt-3 max-w-[290px] text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-white/52 sm:text-[15px]'>
													{item.description}
												</p>
											</div>
										) : null}
									</div>
								)
							})}
						</div>
					</div>

					<div className='rounded-[18px] border border-white/6 bg-[#202020] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-7 lg:rounded-[12px] lg:px-[48px] lg:py-[42px]'>
						<div className='flex min-h-[320px] flex-col justify-center gap-3 sm:min-h-[360px] lg:min-h-[378px]'>
							{paymentRows.map((row, rowIndex) => (
								<div key={`${rowIndex}-${row.join("-")}`} className='flex items-center justify-center gap-2.5 sm:gap-3'>
									<div className='h-[30px] w-[44px] rounded-[6px] bg-white/55 sm:h-[34px] sm:w-[48px]' />
									{row.map((label) => (
										<BrandChip key={label} label={label} />
									))}
									<div className='h-[30px] w-[44px] rounded-[6px] bg-white/55 sm:h-[34px] sm:w-[48px]' />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}