import { ImageAsset } from "@/components/common/ImageAsset"

const navigationItems = [
	{ href: "#about", label: "About us" },
	{ href: "#benefits", label: "Coverage" },
	{ href: "#pricing", label: "How it works" },
	{ href: "#faq", label: "FAQ" }
]

export function Header() {
	return (
		<header className='absolute inset-x-0 top-0 z-20'>
			<div className='mx-auto flex w-full max-w-[1296px] items-center justify-between px-5 pt-4 sm:px-8 sm:pt-6 lg:px-12 lg:pt-[17px]'>
				<a href='#hero' className='shrink-0'>
					<ImageAsset
						src='logo-white.png'
						alt='vibo.tips'
						className='h-[50px] w-[166px] overflow-hidden rounded-md'
						placeholderText='logo-white.png'
					/>
				</a>

				<nav className='hidden items-center gap-11 text-[17px] font-extrabold tracking-[-0.02em] text-white lg:flex'>
					{navigationItems.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className='transition-opacity duration-200 hover:opacity-75'
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className='flex items-center gap-4 sm:gap-6 lg:gap-10'>
					<a
						href='#signin'
						className='hidden text-[17px] font-extrabold tracking-[-0.02em] text-white transition-opacity duration-200 hover:opacity-75 md:block'
					>
						Sign in
					</a>

					<a
						href='#create-account'
						className='inline-flex h-[50px] items-center justify-center rounded-[10px] bg-[#1687ff] px-5 text-center text-[16px] font-extrabold tracking-[-0.02em] text-white transition-colors duration-200 hover:bg-[#0f78eb] sm:h-[54px] sm:px-7 lg:h-[63px] lg:px-[26px] lg:text-[17px]'
					>
						Create free account
					</a>
				</div>
			</div>
		</header>
	)
}
