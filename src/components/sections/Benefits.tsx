import { ImageAsset } from "@/components/common/ImageAsset"
import { WorkAnywhere } from "@/components/sections/WorkAnywhere"

export function Benefits() {
	const countries = [
		{
			region: "South America",
			country: "Colombia",
			flag: "🇨🇴",
			className: "left-[12%] top-[45%] lg:left-[16%] lg:top-[38%]",
			image: "country-colombia.png"
		},
		{
			region: "Europe",
			country: "France",
			flag: "🇫🇷",
			className: "left-[45%] top-[12%] lg:left-[48%] lg:top-[12%]",
			image: "country-france.png"
		},
		{
			region: "Asia",
			country: "Singapore",
			flag: "🇸🇬",
			className: "right-[12%] top-[45%] lg:right-[15%] lg:top-[42%]",
			image: "country-singapore.png"
		}
	]

	return (
		<section
			id='benefits'
			className='px-5 pb-24 pt-4 sm:px-8 sm:pb-28 sm:pt-5 lg:px-12 lg:pb-32'
		>
			<div className='mx-auto flex w-full max-w-[1296px] flex-col gap-[104px] lg:gap-[126px]'>
				<section className='relative overflow-hidden'>
					<div className='px-0 pb-3 pt-2'>
						<div className='px-0 pt-[2px]'>
							<h2 className='text-[40px] font-medium leading-[0.96] tracking-[-0.06em] text-[#111111] sm:text-[52px] lg:text-[58px]'>
								You can use it anywhere
							</h2>
							<p className='mt-[6px] max-w-[420px] text-[14px] font-medium leading-[1.45] tracking-[-0.02em] text-[#7b7f86]'>
								Your global partner for cashless tipping, wherever you are.
							</p>
						</div>

						<div className='relative mt-16 min-h-[430px] overflow-hidden rounded-[34px] bg-transparent px-0 py-4 sm:min-h-[520px] lg:min-h-[620px]'>
							<ImageAsset
								src='map-with-cities.png'
								alt='World Map'
								className='absolute inset-0 h-full w-full object-contain'
								placeholderText='map-with-cities.png'
							/>
						</div>

						<div className='mt-[18px] px-0 pb-2'>
							<a
								href='#countries'
								className='inline-flex h-[54px] items-center justify-center rounded-[8px] border border-[#1687ff] bg-white px-6 text-[14px] font-extrabold tracking-[-0.03em] !text-[#1687ff] transition-colors duration-200 hover:bg-[#1687ff] !hover:text-white'
							>
								See all countries
							</a>
						</div>
					</div>
				</section>

				<WorkAnywhere />
			</div>
		</section>
	)
}
