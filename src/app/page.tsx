import { Header } from "@/components/layout/Header"
import { About } from "@/components/sections/About"
import { Benefits } from "@/components/sections/Benefits"
import { Pricing } from "@/components/sections/Pricing"
import { Hero } from "@/components/sections/Hero"
import { WhatMakesUsDifferent } from "@/components/sections/WhatMakesUsDifferent"

export default function Home() {
	return (
		<main className='relative min-h-screen overflow-hidden bg-white text-[#111111]'>
			<Header />
			<Hero />
			<div className='relative bg-[radial-gradient(circle_at_top,#eef4ff_0%,#ffffff_34%,#ffffff_100%)]'>
				<About />
				<WhatMakesUsDifferent />
				<Benefits />
				<Pricing />
			</div>
		</main>
	)
}
