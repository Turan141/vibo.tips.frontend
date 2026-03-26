"use client"

import { useEffect, useState } from "react"
import { ImageAsset } from "../common/ImageAsset"

const SLIDE_DURATION = 4200

const steps = [
	{
		number: "01.",
		title: "Enter your details",
		description: "Enter your email address and phone number.",
		image: "ready-step-1.png"
	},
	{
		number: "02.",
		title: "Complete verification",
		description:
			"For security and financial compliance, instantly verify your identity using your passport and Face ID.",
		image: "ready-step-2.png"
	},
	{
		number: "03.",
		title: "Activate your QR code",
		description:
			"Your personal QR code will be generated. Your account is now ready to start accepting tips!",
		image: "ready-step-3.png"
	},
	{
		number: "04.",
		title: "Create multiple QR cards",
		description:
			"You can create several QR cards: one for personal use, a second for a team, or a third for collecting funds for a specific goal.",
		image: "ready-step-4.png"
	}
]

export function ReadyToStart() {
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
			id='ready-to-start'
			className='px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[72px]'
		>
			<div className='mx-auto w-full max-w-[1296px] px-10'>
				<div className='max-w-[720px] mb-20'>
					<h2 className='text-[40px] font-medium leading-[0.96] tracking-[-0.05em] text-[#111111] sm:text-[48px] lg:text-[54px]'>
						Ready to start earning tips?
					</h2>
					<p className='mt-4 text-[16px] font-medium leading-[1.45] tracking-[-0.02em] text-[#656b74] sm:text-[18px]'>
						Your 3-minute sign-up starts here. Follow the simple steps below and begin
						earning tips effortlessly.
					</p>
				</div>

				<div className='mt-10 flex flex-col gap-4 lg:mt-12 lg:h-[420px] lg:flex-row lg:gap-5'>
					{steps.map((step, index) => {
						const isActive = index === activeIndex
						return (
							<article
								key={step.number}
								className={`group relative min-h-[320px] overflow-hidden rounded-[16px] shadow-[0_12px_28px_rgba(26,32,56,0.08)] transition-[flex-basis,width,transform,opacity] duration-500 ease-out cursor-pointer ${
									isActive ? "lg:basis-[48%]" : "lg:basis-[17.33%]"
								}`}
								onClick={() => {
									setProgress(0)
									setActiveIndex(index)
								}}
							>
								<ImageAsset
									src={step.image}
									alt={step.title}
									className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
									placeholderText={step.image}
								/>
								<div className='absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10' />
								<div className='absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%)]' />

								<div className='relative flex h-full flex-col justify-between p-6 lg:p-8'>
									{!isActive ? (
										<div className='text-[36px] font-medium leading-none tracking-[-0.04em] text-white/80 lg:text-[44px]'>
											{step.number}
										</div>
									) : (
										<div /> // Spacer
									)}

									<div className={`flex flex-col ${isActive ? "" : ""}`}>
										{isActive ? (
											<div className='flex items-end gap-3'>
												<div className='text-[44px] font-medium leading-[0.8] tracking-[-0.04em] text-white sm:text-[54px] lg:text-[62px]'>
													{step.number}
												</div>
												<div className='pb-1 w-full'>
													<h3 className='text-[20px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[24px] lg:text-[22px]'>
														{step.title}
													</h3>
													<p className='mt-2 text-[14px] font-medium leading-[1.4] tracking-[-0.01em] text-white/80 sm:text-[15px] lg:text-[15px] max-w-[90%]'>
														{step.description}
													</p>
													<div className='mt-6 w-full max-w-[85%]'>
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
												<h3 className='text-[16px] font-bold leading-[1.2] tracking-[-0.03em] text-white/90 lg:text-[18px]'>
													{step.title}
												</h3>
												<p className='mt-2 max-w-[200px] text-[13px] font-medium leading-[1.4] tracking-[-0.01em] text-white/70'>
													{step.description}
												</p>
											</div>
										)}
									</div>
								</div>
							</article>
						)
					})}
				</div>

				<div className='mt-10 lg:mt-[54px]'>
					<a
						href='#get-started'
						className='inline-flex h-[56px] items-center justify-center rounded-[8px] bg-[#007aff] px-10 text-[16px] font-bold tracking-[-0.02em] !text-white shadow-[0_8px_20px_rgba(0,122,255,0.25)] transition-colors duration-200 hover:bg-[#0066d6]'
					>
						Get started
					</a>
				</div>
			</div>
		</section>
	)
}
