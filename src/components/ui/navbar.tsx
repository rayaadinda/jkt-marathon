"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "./button"

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="text-white font-sans relative">
			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="text-white font-bold font-sans text-xl">
							JAKARTA
							<div className="text-xs font-normal font-mono tracking-wider">
								MARATHON
							</div>
						</div>
					</div>

				
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
							>
								Route
							</Link>
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
							>
								Instructions
							</Link>
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
							>
								FAQ
							</Link>
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
							>
								History
							</Link>
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
							>
								Contact Us
							</Link>
						</div>
					</div>

					<div className="hidden md:block">
						<Button
							variant="outline"
							className="text-white rounded-full bg-transparent border-white hover:bg-white hover:text-black transition-colors"
						>
							Register now
						</Button>
					</div>

					<div className="md:hidden">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-sm z-50">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							href="#"
							onClick={() => setIsOpen(false)}
							className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors"
						>
							Route
						</Link>
						<Link
							href="#"
							onClick={() => setIsOpen(false)}
							className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors"
						>
							Instructions
						</Link>
						<Link
							href="#"
							onClick={() => setIsOpen(false)}
							className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors"
						>
							FAQ
						</Link>
						<Link
							href="#"
							onClick={() => setIsOpen(false)}
							className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors"
						>
							History
						</Link>
						<Link
							href="#"
							onClick={() => setIsOpen(false)}
							className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors"
						>
							Contact Us
						</Link>
						<div className="px-3 py-2">
							<Button
								variant="outline"
								onClick={() => setIsOpen(false)}
								className="w-full text-white rounded-full bg-transparent border-white hover:bg-white hover:text-black transition-colors"
							>
								Register now
							</Button>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
