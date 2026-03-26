import { ImageAsset } from "@/components/common/ImageAsset"
import { WorkAnywhere } from "@/components/sections/WorkAnywhere"

export function Benefits() {
	const countries = [
		{
			region: "South America",
			country: "Colombia",
			flag: "🇨🇴",
			className: "left-[9%] top-[43%] lg:left-[13%] lg:top-[39%]",
			image: "country-colombia.png"
		},
		{
			region: "Europe",
			country: "France",
			flag: "🇫🇷",
			className: "left-[43%] top-[20%] lg:left-[45%] lg:top-[16%]",
			image: "country-france.png"
		},
		{
			region: "Asia",
			country: "Singapore",
			flag: "🇸🇬",
			className: "right-[7%] top-[45%] lg:right-[10%] lg:top-[42%]",
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

						<div className='relative mt-8 min-h-[430px] overflow-hidden rounded-[34px] bg-transparent px-0 py-4 sm:min-h-[520px] lg:min-h-[620px]'>
							<div
								className='absolute inset-x-0 top-[12%] h-[74%] opacity-95'
								style={{
									backgroundImage:
										"radial-gradient(circle, rgba(193,222,255,0.95) 0 3.5px, transparent 4px)",
									backgroundSize: "22px 22px",
									WebkitMaskImage:
										"radial-gradient(ellipse at 16% 42%, black 0 19%, transparent 20%), radial-gradient(ellipse at 27% 32%, black 0 10%, transparent 11%), radial-gradient(ellipse at 50% 42%, black 0 13%, transparent 14%), radial-gradient(ellipse at 58% 55%, black 0 10%, transparent 11%), radial-gradient(ellipse at 75% 42%, black 0 21%, transparent 22%), radial-gradient(ellipse at 86% 58%, black 0 11%, transparent 12%)",
									maskImage:
										"radial-gradient(ellipse at 16% 42%, black 0 19%, transparent 20%), radial-gradient(ellipse at 27% 32%, black 0 10%, transparent 11%), radial-gradient(ellipse at 50% 42%, black 0 13%, transparent 14%), radial-gradient(ellipse at 58% 55%, black 0 10%, transparent 11%), radial-gradient(ellipse at 75% 42%, black 0 21%, transparent 22%), radial-gradient(ellipse at 86% 58%, black 0 11%, transparent 12%)"
								}}
							/>

							{countries.map((country) => (
								<div
									key={country.country}
									className={`absolute ${country.className} w-[124px] sm:w-[148px] lg:w-[160px]`}
								>
									<div className='overflow-hidden rounded-[10px] border border-white/80 bg-white p-1 shadow-[0_20px_40px_rgba(23,56,108,0.16)]'>
										<ImageAsset
											src={country.image}
											alt={country.country}
											className='h-[84px] w-full rounded-[8px] sm:h-[96px] lg:h-[104px]'
											placeholderText={country.image}
										/>
									</div>
									<div className='mt-2 w-fit rounded-[8px] border border-[#c9d9ee] bg-white px-3 py-1 text-[12px] font-bold tracking-[-0.02em] text-[#111111] shadow-[0_10px_22px_rgba(15,33,62,0.08)] sm:text-[13px]'>
										{country.region}
									</div>
									<div className='mt-2 inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#1687ff] px-3 py-1.5 text-[12px] font-bold tracking-[-0.02em] text-white shadow-[0_14px_26px_rgba(22,135,255,0.2)] sm:text-[13px]'>
										<span>{country.flag}</span>
										<span>{country.country}</span>
									</div>
								</div>
							))}
						</div>

						<div className='mt-[18px] px-0 pb-2'>
							<a
								href='#countries'
								className='inline-flex h-[54px] items-center justify-center rounded-[8px] border border-[#1687ff] bg-white px-6 text-[14px] font-extrabold tracking-[-0.03em] text-[#1687ff] transition-colors duration-200 hover:bg-[#1687ff] hover:text-white'
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
