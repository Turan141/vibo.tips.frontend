"use client"

import { useEffect, useState } from "react"

import { ImageAsset } from "@/components/common/ImageAsset"

const SLIDE_DURATION = 4200

const steps = [
	{
		number: "01.",
		title: "Sign up (3 minutes)",
		description: "Create your free account",
		image: "step-sign-up.png",
		cta: "Start in 3 minutes"
	},
	{
		number: "02.",
		title: "Get your QR code",
		description: "Download or print instantly",
		image: "step-qr-code.png"
	},
	{
		number: "03.",
		title: "Customer tips you",
		description: "They scan and choose amount",
		image: "step-customer-tip.png"
	},
	{
		number: "04.",
		title: "Money in your account",
		description: "Receive funds immediately",
		image: "step-money-account.png"
	}
]

export function HowItWorks() {
	const [activeIndex, setActiveIndex] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const startedAt = Date.now()
		const intervalId = window.setInterval(() => {
			const elapsed = Date.now() - startedAt
			const nextProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
			setProgress(nextProgress)

			if (elapsed >= SLIDE_DURATION) {
				window.clearInterval(intervalId)
				setProgress(0)
				setActiveIndex((currentIndex) => (currentIndex + 1) % steps.length)
			}
		}, 40)

		return () => window.clearInterval(intervalId)
	}, [activeIndex])

	return (
		<section
			id='pricing'
			className='px-5 pb-24 pt-2 sm:px-8 sm:pb-28 sm:pt-2 lg:px-12 lg:pb-36'
		>
			<div className='mx-auto w-full max-w-[1296px]'>
				<div className='px-0'>
					<h2 className='text-[40px] font-extrabold leading-[0.96] tracking-[-0.06em] text-[#111111] sm:text-[52px] lg:text-[58px]'>
						How it works
					</h2>
					<p className='mt-[8px] max-w-[380px] text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-[#7b7f86]'>
						See the simple process from scan to payment.
					</p>
				</div>

				<div className='mt-10 flex flex-col gap-[10px] lg:flex-row'>
					{steps.map((step, index) => (
						<article
							key={step.number}
							className={`group relative min-h-[278px] overflow-hidden rounded-[10px] shadow-[0_18px_34px_rgba(26,32,56,0.12)] transition-[flex-basis,width,transform,opacity] duration-500 ease-out lg:min-h-[482px] ${
								index === activeIndex ? "lg:basis-[50%]" : "lg:basis-[19.75%]"
							}`}
							onClick={() => {
								setProgress(0)
								setActiveIndex(index)
							}}
						>
							<ImageAsset
								src={step.image}
								alt={step.title}
								className='absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03]'
								placeholderText={step.image}
							/>
							<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22)_0%,transparent_32%)] transition-transform duration-300 group-hover:scale-105' />
							<div className='absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,rgba(7,10,16,0)_0%,rgba(7,10,16,0.92)_100%)]' />
							<div className='relative flex h-full flex-col justify-between p-4 lg:p-5'>
								<div className='text-[56px] font-medium leading-none tracking-[-0.08em] text-white/78'>
									{step.number}
								</div>
								<div>
									<h3
										className={`max-w-[240px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white transition-all duration-500 ${
											index === activeIndex ? "text-[30px]" : "text-[18px] lg:text-[17px]"
										}`}
									>
										{step.title}
									</h3>
									<p
										className={`mt-[3px] max-w-[220px] font-medium leading-[1.28] tracking-[-0.02em] text-white/82 transition-all duration-500 ${
											index === activeIndex ? "text-[16px]" : "text-[14px]"
										}`}
									>
										{step.description}
									</p>
									{index === activeIndex ? (
										<div className='mt-5 w-full max-w-[172px]'>
											<div className='h-[4px] w-full overflow-hidden rounded-full bg-white/25'>
												<div
													className='h-full rounded-full bg-[#1687ff] transition-[width] duration-75 ease-linear'
													style={{ width: `${progress}%` }}
												/>
											</div>
										</div>
									) : null}
								</div>
							</div>
						</article>
					))}
				</div>

				<div className='mt-10'>
					<a
						href='#create-account'
						className='inline-flex h-[56px] items-center justify-center rounded-[8px] bg-[#1687ff] px-7 text-[14px] font-[500] tracking-[-0.03em] !text-white shadow-[0_16px_30px_rgba(22,135,255,0.2)] transition-colors duration-200 hover:bg-[#0f78eb]'
					>
						{steps[activeIndex]?.cta ?? "Start in 3 minutes"}
					</a>
				</div>
			</div>
		</section>
	)
}
