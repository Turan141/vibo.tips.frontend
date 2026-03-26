export function About() {
	return (
		<section
			id='about'
			className='relative overflow-hidden px-5 pb-8 pt-[78px] sm:px-8 sm:pb-12 sm:pt-[92px] lg:px-12 lg:pb-16 lg:pt-[106px]'
		>
			<div className='mx-auto grid w-full max-w-[1296px] gap-7 px-6 py-7 ring-1 ring-[#e3ecfb] sm:px-10 sm:py-10 lg:grid-cols-[138px_minmax(0,1fr)] lg:gap-[50px] lg:px-[74px] lg:py-[72px]'>
				<div className='flex h-[96px] w-[96px] items-center justify-center bg-[#1687ff] shadow-[0_18px_35px_rgba(22,135,255,0.2)] sm:h-[116px] sm:w-[116px] lg:h-[138px] lg:w-[138px] lg:rounded-[8px]'>
					<svg
						viewBox='0 0 138 138'
						aria-hidden='true'
						className='h-[60px] w-[60px] sm:h-[74px] sm:w-[74px] lg:h-[88px] lg:w-[88px]'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M69.337 20.2C58.336 20.2 49.53 28.91 49.53 39.838C49.53 44.7 51.296 49.148 54.225 52.571C40.583 51.674 28.58 44.817 20.2 33.998C21.293 65.434 41.621 91.404 67.661 102.3C83.454 95.817 96.465 84.264 105.005 69.6H84.543C79.102 77.66 73.408 83.503 67.555 87.24C54.79 79.504 44.389 65.714 40.745 48.297C47.3 58.18 56.514 65.433 67.553 69.424C71.755 67.942 75.832 65.693 79.712 62.733C74.87 63.098 70.621 62.146 67.553 59.933C77.872 58.56 86.229 49.77 86.229 39.838C86.229 28.91 77.423 20.2 66.422 20.2H69.337Z'
							fill='white'
						/>
						<circle cx='87.6' cy='32.4' r='10.8' fill='white' />
					</svg>
				</div>

				<div className='max-w-[980px] space-y-6 text-[28px] font-semibold leading-[1.14] tracking-[-0.055em] text-[#111111] sm:space-y-7 sm:text-[34px] lg:space-y-8 lg:text-[44px] lg:leading-[1.2] lg:tracking-[-0.045em]'>
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
