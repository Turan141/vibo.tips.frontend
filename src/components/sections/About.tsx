import { ImageAsset } from "../common/ImageAsset"

export function About() {
	return (
		<section
			id='about'
			className='relative overflow-hidden pb-8 pt-[78px] sm:pb-12 sm:pt-[92px] lg:pb-16 lg:pt-[106px]  max-w-[1296px] mx-auto'
		>
			<div className='mx-auto grid w-full gap-7 py-7 sm:py-10 lg:grid-cols-[138px_minmax(0,1fr)] lg:gap-[50px] lg:py-[72px]'>
				<div className='flex h-[96px] w-[96px] items-center justify-center bg-[#1687ff] shadow-[0_18px_35px_rgba(22,135,255,0.2)] sm:h-[116px] sm:w-[116px] lg:h-[138px] lg:w-[138px] lg:rounded-[8px]'>
					<ImageAsset
						src={"v-logo.png"}
						alt={"Vibotips logo"}
						className='absolute '
						placeholderText={"Vibotips logo"}
					/>
				</div>

				<div className='max-w-[980px] space-y-6 text-[28px] font-[500] leading-[1.14] tracking-[-0.055em] text-[#111111] sm:space-y-7 sm:text-[34px] lg:space-y-8 lg:text-[44px] lg:leading-[1.2] lg:tracking-[-0.045em]'>
					<p>
						Vibotips is a global platform for cashless tipping. Simple, instant, and
						contactless &mdash; just a phone and QR code.
					</p>
					<p>
						Our mission: help service workers earn more by making tipping convenient for
						everyone.
					</p>
					<p>
						Operating in <span className='text-[#1687ff]'>40+</span> countries, serving
						thousands of service professionals from restaurants to salons.
					</p>
				</div>
			</div>
		</section>
	)
}
