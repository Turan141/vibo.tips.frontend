import React from "react"
import { ImageAsset } from "../common/ImageAsset"

type Testimonial = {
	name: string
	role: string
	country: string
	avatar: string
	quote: string
	flag?: string // Could use emoji or ImageAsset for flags, we'll use emoji for simplicity if not provided.
}

const testimonialsLeft: Testimonial[] = [
	{
		name: "Cheryl",
		role: "Lash artist",
		country: "Singapore",
		flag: "🇸🇬",
		avatar: "avatar-cheryl.png",
		quote:
			"My clients really appreciate this service. They no longer have to look for cash to leave a tip. And I love that it's not just numbers, but a personal 'thank you' with a face. It makes every workday even more enjoyable."
	},
	{
		name: "Freja",
		role: "Veterinarian",
		country: "Denmark",
		flag: "🇩🇰",
		avatar: "avatar-freja.png",
		quote:
			"It makes interactions warmer. People can say thank you without interrupting the workflow. I love that."
	},
	{
		name: "Marco",
		role: "Car wash worker",
		country: "UK",
		flag: "🇬🇧",
		avatar: "avatar-marco.png",
		quote:
			"Super convenient. After the wash, customers scan the code and thank me instantly. It's quick, simple, and feels very modern."
	}
]

const testimonialsMiddle: Testimonial[] = [
	{
		name: "Kacper",
		role: "Delivery courier",
		country: "Poland",
		flag: "🇵🇱",
		avatar: "avatar-kacper.png",
		quote:
			"When you're in a hurry, every minute counts. With the QR code, customers tip instantly, and I can move on to the next order."
	},
	{
		name: "Élodie",
		role: "Barista",
		country: "France",
		flag: "🇫🇷",
		avatar: "avatar-elodie.png",
		quote:
			"Customers really enjoy the idea that they can say 'thank you' digitally. It feels modern and effortless, and many of them tell me they love how quick the process is – just one scan and they're on their way."
	},
	{
		name: "Carlos",
		role: "Taxi driver",
		country: "Brazil",
		flag: "🇧🇷",
		avatar: "avatar-carlos.png",
		quote:
			"I love how quick and simple it is. My passengers can leave a thank-you in seconds, even while getting out of the car."
	}
]

const testimonialsRight: Testimonial[] = [
	{
		name: "Anna",
		role: "Makeup artist",
		country: "Spain",
		flag: "🇪🇸",
		avatar: "avatar-anna.png",
		quote:
			"I work on-site a lot. Clients never had a way to tip without cash. Now they just scan — no awkward moments at all, and the whole process feels so much smoother."
	},
	{
		name: "Isabella",
		role: "Singer",
		country: "Colombia",
		flag: "🇨🇴",
		avatar: "avatar-isabella.png",
		quote:
			"After shows people come with their phones — they scan and tip instantly. No lines, no fuss."
	},
	{
		name: "Mia",
		role: "Florist",
		country: "Austria",
		flag: "🇦🇹",
		avatar: "avatar-mia.png",
		quote:
			"Customers love the convenience. They compliment the system all the time — it feels fresh, friendly, and fits perfectly into our daily workflow."
	}
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
	return (
		<div className='flex flex-col rounded-[16px] bg-[#141517] p-6 lg:p-8 hover:bg-[#1a1b1e] transition-colors duration-300'>
			<div className='flex items-center gap-3.5'>
				<div className='h-12 w-12 overflow-hidden rounded-full shrink-0 shadow-sm'>
					<ImageAsset
						src={testimonial.avatar}
						alt={testimonial.name}
						className='h-full w-full object-cover'
						placeholderText={testimonial.name[0]}
					/>
				</div>
				<div>
					<h4 className='text-[16px] font-bold leading-tight tracking-[-0.02em] text-white'>
						{testimonial.name}
					</h4>
					<div className='mt-1 flex items-center gap-1.5 text-[13px] font-medium text-[#888e96]'>
						<span>{testimonial.role}</span>
						<span className='h-[3px] w-[3px] rounded-full bg-[#888e96] opacity-50' />
						<div className='flex items-center gap-1 text-[#b0b5be]'>
							<span>{testimonial.flag}</span>
							<span>{testimonial.country}</span>
						</div>
					</div>
				</div>
			</div>
			<p className='mt-5 text-[14.5px] font-normal leading-[1.65] tracking-[-0.01em] text-[#cbd1d9]'>
				{testimonial.quote}
			</p>
		</div>
	)
}

export function CustomerTestimonials() {
	return (
		<section className='bg-[#0a0a0a] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-[100px]'>
			<div className='mx-auto w-full max-w-[1296px]'>
				<div className='max-w-[460px]'>
					<h2 className='text-[36px] font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-[44px] lg:text-[48px]'>
						What our customers are saying
					</h2>
					<p className='mt-4 text-[15px] font-medium leading-[1.5] tracking-[-0.01em] text-[#a1a1aa] sm:text-[16px]'>
						Discover how our service is helping real people around the world get more
						gratitude every day.
					</p>
				</div>

				<div className='relative mt-10 sm:mt-12 lg:mt-16'>
					{/* Top Disappearing Mask Gradient */}
					<div className='pointer-events-none absolute inset-x-0 -top-1 z-10 h-28 bg-gradient-to-b from-[#0a0a0a] from-10% to-transparent sm:h-36 lg:h-48' />

					<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
						<div className='flex flex-col gap-4 lg:gap-5'>
							{testimonialsLeft.map((t) => (
								<TestimonialCard key={t.name} testimonial={t} />
							))}
						</div>
						<div className='flex flex-col gap-4 lg:gap-5'>
							{testimonialsMiddle.map((t) => (
								<TestimonialCard key={t.name} testimonial={t} />
							))}
						</div>
						<div className='flex flex-col gap-4 lg:gap-5'>
							{testimonialsRight.map((t) => (
								<TestimonialCard key={t.name} testimonial={t} />
							))}
						</div>
					</div>

					{/* Bottom Disappearing Mask Gradient */}
					<div className='pointer-events-none absolute inset-x-0 -bottom-1 z-10 h-28 bg-gradient-to-t from-[#0a0a0a] from-10% to-transparent sm:h-36 lg:h-48' />
				</div>
			</div>
		</section>
	)
}
