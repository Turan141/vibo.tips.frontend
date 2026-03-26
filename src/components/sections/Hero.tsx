import { ImageAsset } from "@/components/common/ImageAsset"

export function Hero() {
	return (
		<section
			id='hero'
			className='relative isolate min-h-[820px] overflow-hidden bg-[#1c1d21] text-white sm:min-h-[900px] lg:min-h-screen'
		>
			<ImageAsset
				src='hero-bg.png'
				alt='Happy delivery tip moment'
				className='absolute inset-0 h-full w-full'
				placeholderText='hero-bg.png'
			/>

			<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,18,0.48)_0%,rgba(15,15,18,0.18)_26%,rgba(15,15,18,0.12)_56%,rgba(8,9,13,0.66)_100%)]' />
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(20,20,24,0.14)_45%,rgba(6,7,10,0.46)_100%)]' />
			<div className='absolute inset-x-0 bottom-0 h-[190px] bg-[linear-gradient(180deg,rgba(8,9,12,0)_0%,rgba(8,9,12,0.86)_100%)]' />

			<div className='relative z-10 mx-auto flex min-h-[820px] w-full max-w-[1296px] flex-col items-center px-5 pb-20 pt-[170px] text-center sm:min-h-[900px] sm:px-8 sm:pt-[220px] lg:min-h-screen lg:px-12 lg:pt-[275px]'>
				<div className='max-w-[820px]'>
					<h1 className='text-[44px] font-extrabold leading-[0.96] tracking-[-0.055em] text-white sm:text-[58px] lg:text-[74px]'>
						<span className='block'>Thanks to those</span>
						<span className='block'>who make life brighter</span>
					</h1>

					<p className='mx-auto mt-8 max-w-[760px] text-[24px] font-bold leading-[1.35] tracking-[-0.03em] text-white/95 sm:mt-9 sm:text-[27px] lg:mt-[27px] lg:text-[24px] lg:leading-[1.33]'>
						Likes are great, but cashless tips are even better. Sign up, get your QR code,
						and start earning in just 5 minutes!
					</p>

					<div className='mt-10 flex justify-center lg:mt-[29px]'>
						<a
							href='#watch-demo'
							className='inline-flex h-[62px] min-w-[145px] items-center justify-center rounded-[10px] bg-white px-8 text-[16px] font-extrabold tracking-[-0.03em] !text-[#111111] shadow-[0_18px_36px_rgba(0,0,0,0.12)] transition-transform duration-200 hover:-translate-y-0.5'
						>
							Watch demo
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
