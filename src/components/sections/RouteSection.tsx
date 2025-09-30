"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import dynamic from "next/dynamic"

export default function RouteSection() {
	const MarathonMap = dynamic(() => import("./MarathonMap"), { ssr: false })

	return (
		<div className="min-h-screen bg-white p-4">
			<div className="flex flex-row gap-2 w-full h-screen">
				<div className="w-full font-sans">
					<div className="p-4 flex flex-col">
						<p className="text-lg font-sans text-gray-300">Marathon Route</p>
						<h1 className="text-6xl leading-none text-black font-sans font-medium">
							Jakarta <br />
							Marathon 2025
						</h1>
						<p className="tracking-tight antialiased max-w-xl text-lg">
							Experience the thrill of Jakarta’s streets! Join thousands of
							runners as you race from the iconic Monas to the legendary GBK
							stadium. Discover the city’s vibrant energy, scenic landmarks, and
							the ultimate sense of achievement at the finish line. Are you
							ready to conquer the capital?
						</p>
						<div className="flex flex-col gap-2 mt-2 mb-2 text-base text-gray-700">
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
							<Button className="rounded-full">
								Explore Map <ArrowRight />{" "}
							</Button>
						</div>
					</div>
				</div>
				<div className="w-full flex items-center justify-center">
					<div className="w-full h-[70vh] md:h-[80vh] rounded-lg overflow-hidden shadow-lg">
						<MarathonMap />
					</div>
				</div>
			</div>
		</div>
	)
}
