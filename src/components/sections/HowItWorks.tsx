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
							<div className='relative flex h-full flex-col justify-between p-4 lg:p-6'>
								{index !== activeIndex ? (
									<div className='text-[48px] font-medium leading-none tracking-[-0.06em] text-white/70 lg:text-[56px]'>
										{step.number}
									</div>
								) : (
									<div />
								)}
								<div className='w-full'>
									{index === activeIndex ? (
										<div className='flex items-end gap-4'>
											<div className='text-[52px] font-medium leading-[0.85] tracking-[-0.05em] text-white sm:text-[60px] lg:text-[68px]'>
												{step.number}
											</div>
											<div className='pb-1 w-full'>
												<h3 className='text-[22px] font-bold leading-[1.1] tracking-[-0.04em] text-white lg:text-[26px]'>
													{step.title}
												</h3>
												<p className='mt-[6px] text-[14px] font-medium leading-[1.3] tracking-[-0.02em] text-white/90'>
													{step.description}
												</p>
												<div className='mt-[22px] w-full max-w-[85%]'>
													<div className='h-[3px] w-full overflow-hidden rounded-full bg-white/30'>
														<div
															className='h-full rounded-full bg-[#1687ff] transition-[width] duration-75 ease-linear'
															style={{ width: `${progress}%` }}
														/>
													</div>
												</div>
											</div>
										</div>
									) : (
										<div>
											<h3 className='text-[18px] font-bold leading-[1.2] tracking-[-0.03em] text-white/50 lg:text-[20px]'>
												{step.title}
											</h3>
											<p className='mt-[6px] max-w-[200px] text-[14px] font-medium leading-[1.4] tracking-[-0.01em] text-white/40'>
												{step.description}
											</p>
										</div>
									)}
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
