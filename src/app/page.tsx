import { Header } from "@/components/layout/Header"
import { About } from "@/components/sections/About"
import { Benefits } from "@/components/sections/Benefits"
import { Pricing } from "@/components/sections/Pricing"
import { Hero } from "@/components/sections/Hero"
import { WhatMakesUsDifferent } from "@/components/sections/WhatMakesUsDifferent"
import { MultipleQrCardsShowcase } from "@/components/sections/MultipleQrCardsShowcase"
import { SimplePricing } from "@/components/sections/SimplePricing"
import { ReadyToStart } from "@/components/sections/ReadyToStart"
import { TransactionsYouCanTrust } from "@/components/sections/TransactionsYouCanTrust"
import { CustomerTestimonials } from "@/components/sections/CustomerTestimonials"
import { SmartAssistant } from "@/components/sections/SmartAssistant"
import { CallToAction } from "@/components/sections/CallToAction"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
	return (
		<main className='relative min-h-screen overflow-hidden bg-white text-[#111111]'>
			<Header />
			<Hero />
			<div className='relative bg-[radial-gradient(circle_at_top,#eef4ff_0%,#ffffff_34%,#ffffff_100%)]'>
				<About />
				<Benefits />
				<Pricing />
			</div>
			<WhatMakesUsDifferent />
			<MultipleQrCardsShowcase />
			<SimplePricing />
			<ReadyToStart />
			<TransactionsYouCanTrust />
			<CustomerTestimonials />
			<SmartAssistant />
			<CallToAction />
			<Footer />
		</main>
	)
}
