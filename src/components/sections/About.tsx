export function About() {
	return (
		<section
			id='about'
			className='relative overflow-hidden px-5 pb-8 pt-[78px] sm:px-8 sm:pb-12 sm:pt-[92px] lg:px-12 lg:pb-16 lg:pt-[106px]'
		>
			<div className='mx-auto grid w-full max-w-[1296px] gap-8 rounded-[34px] bg-[radial-gradient(circle_at_top,#edf4ff_0%,#ffffff_58%,#ffffff_100%)] p-8 shadow-[0_35px_80px_rgba(13,42,84,0.06)] ring-1 ring-[#e3ecfb] sm:p-10 lg:grid-cols-[84px_minmax(0,1fr)] lg:gap-10 lg:px-[54px] lg:py-[52px]'>
				<div className='flex h-[82px] w-[82px] items-center justify-center rounded-[10px] bg-[#1687ff] shadow-[0_18px_35px_rgba(22,135,255,0.2)]'>
					<span className='text-[45px] font-black lowercase leading-none tracking-[-0.08em] text-white'>
						v
					</span>
				</div>

				<div className='max-w-[980px] space-y-7 text-[28px] font-extrabold leading-[1.14] tracking-[-0.055em] text-[#111111] sm:text-[34px] lg:text-[31px]'>
					<p>
						Vibotips is a global platform for cashless tipping. Simple, instant, and
						contactless, just a phone and QR code.
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
