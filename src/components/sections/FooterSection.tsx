"use client"
import { Parallax } from "react-scroll-parallax"

export default function FooterSection() {
	return (
		<Parallax speed={-5}>
			<footer className="w-full bg-white text-black font-sans border-t border-border py-8 sm:py-10 px-4 flex flex-col items-center gap-6">
				<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex flex-col items-center md:items-start gap-2">
						<span className="text-xl sm:text-2xl font-bold tracking-tight text-center md:text-left">
							Jakarta Marathon 2025
						</span>
						<span className="text-sm text-gray-400 text-center md:text-left">
							From Monas to GBK — Run the Capital
						</span>
					</div>
					<div className="flex flex-row gap-4 sm:gap-6 text-sm sm:text-base font-medium">
						<a href="#route" className="hover:text-primary transition-colors">
							Route
						</a>
						<a href="#faq" className="hover:text-primary transition-colors">
							FAQ
						</a>
						<a href="#register" className="hover:text-primary transition-colors">
							Register
						</a>
					</div>
				</div>
				<div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-4 border-t border-border pt-4">
					<span className="text-xs text-gray-500 text-center">
						&copy; {new Date().getFullYear()} Jakarta Marathon. All rights
						reserved.
					</span>
					<span className="text-xs text-gray-500 text-center">Made with ❤️ in Jakarta</span>
				</div>
			</footer>
		</Parallax>
	)
}
