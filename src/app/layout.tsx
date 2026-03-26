import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const euclidCircular = localFont({
	variable: "--font-euclid-circular",
	src: [
		{
			path: "../../public/font/Euclid Circular B Light.ttf",
			weight: "300",
			style: "normal"
		},
		{
			path: "../../public/font/Euclid Circular B Light Italic.ttf",
			weight: "300",
			style: "italic"
		},
		{
			path: "../../public/font/Euclid Circular B Regular.ttf",
			weight: "400",
			style: "normal"
		},
		{
			path: "../../public/font/Euclid Circular B Italic.ttf",
			weight: "400",
			style: "italic"
		},
		{
			path: "../../public/font/Euclid Circular B Medium.ttf",
			weight: "500",
			style: "normal"
		},
		{
			path: "../../public/font/Euclid Circular B Medium Italic.ttf",
			weight: "500",
			style: "italic"
		},
		{
			path: "../../public/font/Euclid Circular B SemiBold.ttf",
			weight: "600",
			style: "normal"
		},
		{
			path: "../../public/font/Euclid Circular B SemiBold Italic.ttf",
			weight: "600",
			style: "italic"
		},
		{
			path: "../../public/font/Euclid Circular B Bold.ttf",
			weight: "700",
			style: "normal"
		},
		{
			path: "../../public/font/Euclid Circular B Bold Italic.ttf",
			weight: "700",
			style: "italic"
		}
	]
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
		<html lang='en' className={`${euclidCircular.variable} h-full antialiased`}>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	)
}
