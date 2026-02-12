import type { Metadata } from "next"
import { baseMetadata } from "@/data/baseMetadata"
import localFont from "next/font/local"
import "./css/globals.css"
import "./css/animations.css"
import "./css/swiperCustom.css"
import HolyLoader from "holy-loader"
import ScrollBehavior from "@/components/ScrollBehavior"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "swiper/swiper-bundle.css"

const marmelat = localFont({
	src: [
		{
			path: "./fonts/Marmelat-Book.woff2",
			weight: "400",
			style: "normal"
		},
		{
			path: "./fonts/Marmelat-Medium.woff2",
			weight: "500",
			style: "normal"
		},
		{
			path: "./fonts/Marmelat-Bold.woff2",
			weight: "600",
			style: "normal"
		}
	],
	variable: "--font-marmelat",
	display: "swap"
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="pt-BR">
			<body className={`${marmelat.variable} antialiased`}>
            <HolyLoader color="#6F32F3" height="2px" speed={500}/>
            <ScrollBehavior/>
            <Header/>
            {children}
            <Footer/>
         </body>
		</html>
	)
}