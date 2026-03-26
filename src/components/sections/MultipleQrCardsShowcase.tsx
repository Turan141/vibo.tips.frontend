import { ImageAsset } from "../common/ImageAsset"

type QrCardColumn = {
	title: string
	accent: "light" | "blue"
	items: string[]
	benefits: string[]
	badge?: string
}

const multipleQrColumns: QrCardColumn[] = [
	{
		title: "Individual QR",
		accent: "light",
		items: [
			"One for your main job",
			"Another for side gigs",
			"Separate for events",
			"Charity fundraising"
		],
		benefits: [
			"Personal QR code",
			"Track each code separately",
			"100% of tips go to you",
			"Custom names/labels"
		]
	},
	{
		title: "Group QR",
		accent: "blue",
		items: ["Restaurant team", "Delivery crew", "Band members", "Multiple teams"],
		benefits: [
			"One shared QR code",
			"Tips split automatically",
			"Manage team members",
			"Group statistics"
		]
	}
]

function PeopleIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true' className='h-4 w-4 fill-current'>
			<path d='M10.6 11.1a3.3 3.3 0 1 0-3.3-3.3 3.3 3.3 0 0 0 3.3 3.3Zm5.6-.8a2.6 2.6 0 1 0-2.4-2.6 2.5 2.5 0 0 0 2.4 2.6ZM16.2 11.9a4 4 0 0 0-2.9 1.2 5.4 5.4 0 0 1 2.4 3.8h4.2v-.7a4.2 4.2 0 0 0-3.7-4.3ZM10.6 12.5c-3 0-5.5 1.8-5.5 4.1v.9h11v-.9c0-2.3-2.4-4.1-5.5-4.1Z' />
		</svg>
	)
}

function CheckIcon() {
	return (
		<svg viewBox='0 0 16 16' aria-hidden='true' className='h-[16px] w-[16px] shrink-0'>
			<circle cx='8' cy='8' r='8' className='fill-[#1784ff]' />
			<path
				d='m6.8 11-2.5-2.5 1.1-1.1 1.4 1.4 3.4-3.5 1.1 1.1-4.5 4.6Z'
				className='fill-white'
			/>
		</svg>
	)
}

function FeatureItem({ label }: { label: string }) {
	return (
		<div className='flex items-center gap-2.5 bg-[#f0f4ff] rounded-[5px] px-2 py-2'>
			<CheckIcon />
			<span className='text-[16px] font-medium leading-[1.2] tracking-[-0.02em] text-[#1a1a1a] sm:text-[16px]'>
				{label}
			</span>
		</div>
	)
}

function QrSideCard({ column }: { column: QrCardColumn }) {
	const isBlue = column.accent === "blue"

	return (
		<div
			className={`relative flex min-h-[220px] flex-col rounded-[24px] px-6 py-8 shadow-[0_8px_24px_rgba(17,24,39,0.04)] sm:min-h-[260px] sm:px-10 sm:py-10 ${
				isBlue ? "bg-[#e5eeff]" : "bg-white"
			}`}
		>
			<div className={`w-full flex flex-col ${isBlue ? "justify-end items-end" : ""}`}>
				<div>
					<div className='flex items-center gap-3'>
						<div className='flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#1784ff] text-white'>
							<PeopleIcon />
						</div>
						<h3 className='text-[18px] font-bold leading-none tracking-[-0.04em] text-[#111111] sm:text-[22px]'>
							{column.title}
						</h3>
					</div>

					<div className='mt-8 flex gap-8 sm:gap-6'>
						<div className='min-w-max'>
							<p className='text-[16px] font-bold leading-none tracking-[-0.03em] text-[#111111]'>
								Create unlimited:
							</p>
							<div className='mt-4 space-y-2.5'>
								{column.items.map((item) => (
									<FeatureItem key={item} label={item} />
								))}
							</div>
						</div>

						<div className='min-w-max'>
							<p className='text-[16px] font-bold leading-none tracking-[-0.03em] text-[#111111]'>
								What you get:
							</p>
							<div className='mt-4 space-y-2.5'>
								{column.benefits.map((benefit) => (
									<FeatureItem key={benefit} label={benefit} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function MultipleQrCardsShowcase() {
	return (
		<div className='relative overflow-hidden rounded-[28px] bg-[linear-gradient(to_bottom,#e2e8f8,#ffffff)] px-5 py-8 sm:px-7 sm:py-10 lg:px-36 lg:py-38'>
			<div className='max-w-[1296px] mx-auto px-12'>
				<div>
					<h3 className='text-[30px] font-semibold leading-[0.94] tracking-[-0.06em] text-[#101010] sm:text-[38px] lg:text-[50px]'>
						One account,
						<br />
						unlimited possibilities
					</h3>
					<p className='mt-3 text-[16px] font-medium leading-[1.35] tracking-[-0.02em] text-[#6c7382] sm:text-[16px] lg:text-[18px]'>
						Register once, create multiple QR codes for any need.
					</p>
				</div>

				<div className='relative mt-8 grid gap-4 lg:mt-[72px] lg:grid-cols-2 lg:gap-0'>
					<QrSideCard column={multipleQrColumns[0]} />

					<div className='pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block z-10'>
						<ImageAsset
							src='phone-mockup.png'
							alt='Phone mockup'
							className='w-full max-w-[285px]'
							placeholderText='phone-mockup.png'
						/>
					</div>

					<QrSideCard column={multipleQrColumns[1]} />
				</div>
			</div>
		</div>
	)
}
