export default function FooterSection() {
	return (
		<footer className="w-full bg-white text-black font-sans border-t border-border py-10 px-4 flex flex-col items-center gap-4">
			<div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
				<div className="flex flex-col items-center md:items-start gap-2">
					<span className="text-2xl font-bold tracking-tight">
						Jakarta Marathon 2025
					</span>
					<span className="text-sm text-gray-400">
						From Monas to GBK — Run the Capital
					</span>
				</div>
				<div className="flex flex-row gap-6 text-base font-medium">
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
			<div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 mt-6 border-t border-border pt-4">
				<span className="text-xs text-gray-500">
					&copy; {new Date().getFullYear()} Jakarta Marathon. All rights
					reserved.
				</span>
				<span className="text-xs text-gray-500">Made with ❤️ in Jakarta</span>
			</div>
		</footer>
	)
}
