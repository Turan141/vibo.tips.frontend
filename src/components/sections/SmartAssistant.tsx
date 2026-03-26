"use client"

import React, { useState } from "react"

const suggestedQuestions = [
	"How to get started?",
	"How do I get my personal QR code?",
	"Can customers leave a message with their tip?"
]

export function SmartAssistant() {
	const [question, setQuestion] = useState("")

	const handleSubmit = (e?: React.FormEvent) => {
		if (e) e.preventDefault()
		if (!question.trim()) return
		// Handle submission logic here (e.g., send to API, open modal, etc.)
		console.log("Submitting:", question)
		setQuestion("")
	}

	return (
		<section className='bg-[#f7fafe] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-[100px]'>
			<div className='mx-auto w-full max-w-[1296px]'>
				<div className='max-w-[720px]'>
					<h2 className='text-[36px] font-bold leading-[1.05] tracking-[-0.04em] text-[#111111] sm:text-[44px] lg:text-[48px]'>
						Smart assistant
					</h2>
					<p className='mt-4 text-[15px] font-medium leading-[1.45] tracking-[-0.01em] text-[#656b74] sm:text-[17px]'>
						Ask anything — get instant answers about our platform.
					</p>
				</div>

				<div className='mt-10 max-w-[860px] sm:mt-12 lg:mt-[54px]'>
					<form onSubmit={handleSubmit} className='relative flex items-center'>
						<input
							type='text'
							value={question}
							onChange={(e) => setQuestion(e.target.value)}
							placeholder='Ask a question'
							className='w-full rounded-[12px] border border-gray-200 bg-white py-[22px] pl-6 pr-16 text-[15px] font-medium text-[#111111] shadow-[0_12px_24px_rgba(20,40,70,0.04)] outline-none placeholder:text-[#a0a5b0] focus:border-[#d0e0fb] focus:ring-4 focus:ring-[#eaf2ff] transition-all duration-200 lg:text-[16px]'
						/>
						<button
							type='submit'
							className='absolute right-5 flex h-10 w-10 items-center justify-center text-[#111111] transition-transform duration-200 hover:scale-110'
							aria-label='Send question'
						>
							<svg
								viewBox='0 0 24 24'
								fill='currentColor'
								className='h-5 w-5 -rotate-[25deg]'
							>
								<path d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' />
							</svg>
						</button>
					</form>

					<div className='mt-6 flex flex-wrap gap-3 sm:mt-8'>
						{suggestedQuestions.map((sq) => (
							<button
								key={sq}
								onClick={() => setQuestion(sq)}
								className='rounded-[8px] bg-[#eef3fb] px-4 py-[14px] text-[14px] font-semibold tracking-[-0.02em] text-[#111111] transition-colors duration-200 hover:bg-[#e4ecf9] sm:px-5 sm:text-[15px]'
							>
								{sq}
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
