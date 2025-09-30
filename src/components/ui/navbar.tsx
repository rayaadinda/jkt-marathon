import Link from "next/link"
import { Button } from "./button"

export function Navbar() {
	return (
		<nav className="text-white font-sans">
			<div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="text-white font-bold font-sans text-xl">
							JAKARTA
							<div className="text-xs font-normal font-mono tracki  ng-wider">
								MARATHON
							</div>
						</div>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
							>
								Route
							</Link>
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
							>
								Instructions
							</Link>
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
							>
								FAQ
							</Link>
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
							>
								History
							</Link>
							<Link
								href="#"
								className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium"
							>
								Contact Us
							</Link>
						</div>
					</div>

					<div className="hidden md:block">
						<Button
							variant="outline"
							className=" text-white rounded-full bg-transparent"
						>
							Register now
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							type="button"
							className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
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
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div className="md:hidden" id="mobile-menu">
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<Link
						href="#"
						className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
					>
						Route
					</Link>
					<Link
						href="#"
						className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
					>
						Instructions
					</Link>
					<Link
						href="#"
						className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
					>
						FAQ
					</Link>
					<Link
						href="#"
						className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
					>
						History
					</Link>
					<Link
						href="#"
						className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium"
					>
						Contact Us
					</Link>
					<Link
						href="#"
						className="bg-transparent border border-white text-white hover:bg-white hover:text-black block px-3 py-2 rounded-full text-base font-medium mt-4"
					>
						Register now
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
