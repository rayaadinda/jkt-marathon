"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import dynamic from "next/dynamic"
import { Parallax } from "react-scroll-parallax"

export default function RouteSection() {
	const MarathonMap = dynamic(() => import("./MarathonMap"), { ssr: false })

	return (
		<div className="min-h-screen bg-white p-4">
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-2 w-full min-h-screen">
				<Parallax speed={15} className="w-full font-sans lg:w-1/2">
					<div className="p-4 flex flex-col h-full">
						<p className="text-lg font-sans text-gray-300">Marathon Route</p>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-none text-black font-sans font-medium">
							Jakarta <br />
							Marathon 2025
						</h1>
						<p className="tracking-tight antialiased max-w-xl text-sm sm:text-base lg:text-lg mt-4">
							Experience the thrill of Jakarta&apos;s streets! Join thousands of
							runners as you race from the iconic Monas to the legendary GBK
							stadium. Discover the city&apos;s vibrant energy, scenic
							landmarks, and the ultimate sense of achievement at the finish
							line. Are you ready to conquer the capital?
						</p>
						<div className="flex flex-col gap-2 mt-4 mb-2 text-sm sm:text-base text-gray-700">
							<div className="flex items-center gap-2">
								<span className="font-semibold text-primary">Distance:</span>
								<span>42.195 km (Full Marathon)</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-semibold text-primary">Start:</span>
								<span>Monas (National Monument)</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-semibold text-primary">Finish:</span>
								<span>Gelora Bung Karno Stadium (GBK)</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-semibold text-primary">Elevation:</span>
								<span>Flat, city streets</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="font-semibold text-primary">
									Cut-off Time:
								</span>
								<span>7 hours</span>
							</div>
						</div>
						<div className="mt-4">
							<Button className="rounded-full text-sm sm:text-base">
								Explore Map <ArrowRight className="w-4 h-4" />{" "}
							</Button>
						</div>
					</div>
				</Parallax>
				<Parallax
					speed={15}
					className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0"
				>
					<div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden shadow-lg">
						<MarathonMap />
					</div>
				</Parallax>
			</div>
		</div>
	)
}
