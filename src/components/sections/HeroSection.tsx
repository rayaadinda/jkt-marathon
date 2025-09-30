import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"
import Navbar from "../ui/navbar"
import Image from "next/image"
import React from "react"

export default function HeroSection() {
	return (
		<div className="min-h-screen relative">
			<div className="relative w-full h-screen">
				<Image
					src="/hero.png"
					alt="Hero Image"
					fill
					className="object-cover"
					priority
				/>

				<div className="absolute top-0 left-0 w-full z-10">
					<Navbar />
				</div>

				<div className="absolute inset-0">
					<div className="flex flex-col h-screen justify-center items-center">
						<h1 className="text-white text-7xl font-sans font-medium text-center">
							Run it to prove yourself
						</h1>
						<p className="text-white text-lg mt-8 text-center max-w-4xl font-sans font-light">
							Join runners from around the world for the 21th Jakarta Marathon.{" "}
							<br />
							Conquer the course. Conquer yourself.
						</p>
						<Button className="mt-8 rounded-full font-sans" variant="secondary">
							{" "}
							Register now
							<ArrowUpRight />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
