"use client"

import { useRef } from "react"

import { ImageAsset } from "@/components/common/ImageAsset"

const professions = [
	{
		title: "Hospitality & service",
		image: "profession-hospitality.png"
	},
	{
		title: "Tourism & entertainment",
		image: "profession-tourism.png"
	},
	{
		title: "Retail & Street food",
		image: "profession-retail.png"
	},
	{
		title: "Beauty services",
		image: "profession-beauty.png"
	},
	{
		title: "Beauty services",
		image: "profession-other.png"
	}
]

export function WorkAnywhere() {
	const sliderRef = useRef<HTMLDivElement | null>(null)

	const scrollSlider = (direction: "left" | "right") => {
		const slider = sliderRef.current

		if (!slider) {
			return
		}

		const card = slider.querySelector<HTMLElement>("[data-work-card='true']")
		const gap = 10
		const scrollAmount = (card?.offsetWidth ?? 220) + gap

		slider.scrollBy({
			left: direction === "left" ? -scrollAmount : scrollAmount,
			behavior: "smooth"
		})
	}

	return (
		<section className='overflow-hidden'>
			<div className='flex flex-col gap-6 px-0 lg:flex-row lg:items-end lg:justify-between'>
				<div>
					<h2 className='text-[40px] font-extrabold leading-[0.96] tracking-[-0.06em] text-[#111111] sm:text-[52px] lg:text-[58px]'>
						You can work anywhere
					</h2>
					<p className='mt-[8px] max-w-[520px] text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-[#7b7f86]'>
						Whether you&apos;re serving coffee, driving passengers, or styling hair, if
						you provide great service, you deserve great tips.
					</p>
				</div>

				<div className='flex items-center gap-3 self-end text-[#111111] lg:self-auto'>
					<button
						type='button'
						onClick={() => scrollSlider("left")}
						className='flex h-11 w-11 items-center justify-center rounded-full border border-[#d5deed] text-[20px] transition-colors duration-200 hover:border-[#111111]'
						aria-label='Previous professions'
					>
						←
					</button>
					<button
						type='button'
						onClick={() => scrollSlider("right")}
						className='flex h-11 w-11 items-center justify-center rounded-full border border-[#d5deed] text-[20px] transition-colors duration-200 hover:border-[#111111]'
						aria-label='Next professions'
					>
						→
					</button>
				</div>
			</div>

			<div
				ref={sliderRef}
				className='mt-10 flex gap-[10px] overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
			>
				{professions.map((profession) => (
					<article
						key={profession.title}
						data-work-card='true'
						className='group relative h-[194px] min-w-[166px] flex-none overflow-hidden rounded-[10px] shadow-[0_16px_30px_rgba(26,32,56,0.12)] sm:h-[222px] sm:min-w-[190px] lg:h-[194px] lg:min-w-[258px]'
					>
						<ImageAsset
							src={profession.image}
							alt={profession.title}
							className='absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.03]'
							placeholderText={profession.image}
						/>
						<div className='absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(180deg,rgba(7,10,16,0)_0%,rgba(7,10,16,0.84)_100%)]' />
						<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28)_0%,transparent_32%)] transition-transform duration-300 group-hover:scale-105' />
						<div className='absolute inset-x-0 bottom-0 p-5'>
							<h3 className='text-[18px] font-extrabold leading-[1.08] tracking-[-0.04em] text-white'>
								{profession.title}
							</h3>
						</div>
					</article>
				))}
			</div>

			<div className='mt-[18px] px-0 pb-2'>
				<a
					href='#professions'
					className='inline-flex h-[54px] items-center justify-center rounded-[8px] border border-[#1687ff] bg-white px-6 text-[14px] font-extrabold tracking-[-0.03em] text-[#1687ff] transition-colors duration-200 hover:bg-[#1687ff] hover:text-white'
				>
					See all 50+ professions
				</a>
			</div>
		</section>
	)
}
