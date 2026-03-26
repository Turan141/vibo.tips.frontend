import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "vibo.tips",
	description: "Cashless tips landing page"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${manrope.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	)
}
