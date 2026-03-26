import { ImageAsset } from "../common/ImageAsset"

export function Footer() {
	return (
		<footer className='bg-[#030303] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:pb-8 lg:pt-20'>
			<div className='mx-auto w-full max-w-[1296px]'>
				<div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20'>
					{/* Left Section - Logo & Contact */}
					<div className='flex flex-col'>
						<div className='h-8 w-auto sm:h-10'>
							{/* Mimicking logo layout */}
							<div className='flex items-center gap-1.5 text-[28px] font-bold tracking-tight text-white mb-2'>
								{/* <svg viewBox='0 0 24 24' fill='currentColor' className='h-8 w-8'>
									<path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
								</svg>
								ibo.tips */}
								<ImageAsset
									src='logo-white.png'
									alt='vibo.tips'
									className='h-8 w-auto sm:h-10'
									placeholderText='logo-white.png'
								/>
							</div>
						</div>

						<div className='mt-8'>
							<p className='text-[15px] font-medium text-[#8b919b]'>
								For support inquiries, please write to:
							</p>
							<a
								href='mailto:support@vibo.tips'
								className='mt-1 inline-block text-[16px] font-semibold text-white transition-colors duration-200 hover:text-[#007aff]'
							>
								support@vibo.tips
							</a>
						</div>

						<div className='mt-8 flex items-center gap-4 lg:mt-12'>
							<a
								href='#'
								className='text-[#8b919b] transition-colors duration-200 hover:text-white'
								aria-label='YouTube'
							>
								<svg viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
									<path d='M21.582 6.186a2.686 2.686 0 00-1.884-1.921C18.04 3.8 12 3.8 12 3.8s-6.04 0-7.698.465a2.686 2.686 0 00-1.884 1.921C2 7.893 2 12 2 12s0 4.107.418 5.814a2.686 2.686 0 001.884 1.921C5.96 20.2 12 20.2 12 20.2s6.04 0 7.698-.465a2.686 2.686 0 001.884-1.921C22 16.107 22 12 22 12s0-4.107-.418-5.814zM10 15.464V8.536L16 12l-6 3.464z' />
								</svg>
							</a>
							<a
								href='#'
								className='text-[#8b919b] transition-colors duration-200 hover:text-white'
								aria-label='Instagram'
							>
								<svg viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
									<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
								</svg>
							</a>
						</div>
					</div>

					{/* Right Section - Address & Links */}
					<div className='flex flex-col lg:items-end lg:text-right mt-10 lg:mt-24'>
						<div className='text-[13.5px] font-medium leading-[1.6] text-[#8b919b]'>
							<span className='font-semibold text-white'>Address:</span> Harju maakond,
							Tallinn, Kesklinna linnaosa,
							<br className='hidden lg:block' /> Narva mnt 7-557, 10117
							<span className='mx-3 hidden lg:inline text-[#3a3f48]'>|</span>
							<br className='lg:hidden' />
							<span className='font-semibold text-white lg:mt-0 mt-2 block lg:inline'>
								Reg. Nr:
							</span>{" "}
							16917338
						</div>

						<div className='mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13.5px] font-bold text-white lg:mt-10 lg:justify-end'>
							<a href='#' className='transition-opacity duration-200 hover:opacity-75'>
								Privacy policy
							</a>
							<a href='#' className='transition-opacity duration-200 hover:opacity-75'>
								Cookies policy
							</a>
							<a href='#' className='transition-opacity duration-200 hover:opacity-75'>
								Terms & conditions
							</a>
						</div>

						<div className='mt-8 text-[12px] font-medium text-[#5f6570] lg:mt-10'>
							© All rights reserved, 2026
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
