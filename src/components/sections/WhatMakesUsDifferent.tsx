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

const paymentRowOffsets = [
	"pl-0",
	"pl-5 sm:pl-6 lg:pl-6",
	"pl-0",
	"pl-8 sm:pl-10 lg:pl-10",
	"pl-12 sm:pl-14 lg:pl-14"
]

function BrandChip({ label }: { label: string }) {
	const textClassName =
		label.length > 14
			? "text-[7px] sm:text-[8px] lg:text-[8.5px]"
			: label.length > 10
				? "text-[8px] sm:text-[9px] lg:text-[9.5px]"
				: "text-[9px] sm:text-[10px] lg:text-[10.5px]"

	return (
		<div className='flex h-[28px] min-w-[48px] items-center justify-center rounded-[5px] border border-[#f4f4f4] bg-white px-2 text-center shadow-[0_4px_10px_rgba(0,0,0,0.14)] sm:h-[30px] sm:min-w-[54px] sm:px-2.5 lg:h-[32px] lg:min-w-[58px]'>
			<span
				className={`font-semibold leading-none tracking-[-0.035em] text-[#111111] ${textClassName}`}
			>
				{label}
			</span>
		</div>
	)
}

function PaymentMethodsShowcase() {
	return (
		<div className='mx-auto w-full max-w-[560px] rounded-[12px] border border-white/8 bg-[#232323] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-5 sm:py-6 lg:max-w-[600px] lg:px-6 lg:py-7'>
			<div className='flex min-h-[260px] flex-col justify-center gap-3 sm:min-h-[280px] sm:gap-[11px] lg:min-h-[300px] lg:gap-3'>
				{paymentRows.map((row, rowIndex) => (
					<div
						key={`${rowIndex}-${row.join("-")}`}
						className={`flex items-center justify-center gap-2 sm:gap-[9px] ${paymentRowOffsets[rowIndex]}`}
					>
						<div className='h-[28px] w-[34px] rounded-[5px] bg-white/60 sm:h-[30px] sm:w-[40px] lg:h-[32px] lg:w-[42px]' />
						{row.map((label) => (
							<BrandChip key={label} label={label} />
						))}
						<div className='h-[28px] w-[34px] rounded-[5px] bg-white/60 sm:h-[30px] sm:w-[40px] lg:h-[32px] lg:w-[42px]' />
					</div>
				))}
			</div>
		</div>
	)
}

export function WhatMakesUsDifferent() {
	const [activeItem, setActiveItem] = useState("Payment methods")

	return (
		<section
			id='differences'
			className='w-full bg-[#050505] py-16 text-white sm:py-12 lg:py-48'
		>
			<div className='mx-auto w-full max-w-[1296px] px-5 sm:px-8 lg:px-12'>
				<div>
					<h2 className='text-[38px] font-[500] leading-[0.98] tracking-[-0.065em] text-white sm:text-[48px] lg:text-[58px] '>
						What makes us different
					</h2>
					<p className='mt-3 text-[18px] font-[400] leading-[1.45] tracking-[-0.02em] text-white/45'>
						Features designed with you in mind.
					</p>
				</div>

				<div className='mt-10 grid gap-8 lg:mt-[54px] lg:flex lg:justify-between lg:items-start lg:gap-[100px]'>
					<div className='w-full max-w-[404px]'>
						<div className='border-t border-white/14 w-full'>
							{differenceItems.map((item) => {
								const isActive = item.title === activeItem

								return (
									<div key={item.title} className='border-b border-white/14'>
										<button
											type='button'
											onClick={() => setActiveItem(item.title)}
											aria-expanded={isActive}
											className='cursor-pointer flex w-full items-center justify-between gap-4 py-5 text-left transition-opacity duration-200 hover:opacity-80'
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
												<p className='text-[16px] font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-[28px] lg:text-[18px]'>
													{item.headline}
												</p>
												<p className='mt-3 max-w-[290px] text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-white/52 sm:text-[16px]'>
													{item.description}
												</p>
											</div>
										) : null}
									</div>
								)
							})}
						</div>
					</div>

					<div className='w-full max-w-[920px] flex-1'>
						<PaymentMethodsShowcase />
					</div>
				</div>
			</div>
		</section>
	)
}
