import { ImageAsset } from "../common/ImageAsset"

export function CallToAction() {
	return (
		<section className='relative overflow-hidden bg-[linear-gradient(to_bottom,#2152ae_0%,#091d44_50%,#000000_80%,#000000_100%)] text-white'>
			<div className='mx-auto max-w-[1296px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-[100px]'>
				<div className='flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20'>
					<div className='max-w-[560px] text-center lg:text-left z-10'>
						<h2 className='text-[42px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[64px]'>
							Don't miss out on
							<br />
							cashless tips
						</h2>
						<p className='mt-5 text-[15px] font-medium leading-[1.5] tracking-[-0.01em] text-[#b4c4de] sm:text-[17px] lg:mt-6 lg:text-[18px] lg:max-w-[460px]'>
							Join thousands of professionals already earning more.
							<br className='hidden lg:block' /> Create your free account in 2 minutes.
						</p>
						<div className='mt-8 lg:mt-10'>
							<a
								href='#get-started'
								className='inline-flex h-[56px] items-center justify-center rounded-[8px] bg-[#007aff] px-9 text-[16px] font-bold tracking-[-0.02em] text-white shadow-[0_8px_24px_rgba(0,122,255,0.3)] transition-colors duration-200 hover:bg-[#0066d6] sm:h-[60px] sm:px-10 sm:text-[17px]'
							>
								Get started
							</a>
						</div>
					</div>

					<div className='relative flex justify-center w-full max-w-[400px] lg:max-w-[580px] z-10 lg:-mr-10'>
						<ImageAsset
							src='hand-with-phone-mockup.png'
							alt='Hand holding phone with Vibo QR app'
							className='w-full h-[700px] object-contain'
							placeholderText='hand-with-phone-mockup.png'
						/>
					</div>
				</div>
			</div>
			<div className='pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-[#010512] to-transparent opacity-80' />
		</section>
	)
}
