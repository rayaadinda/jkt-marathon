"use client"
import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"
import Navbar from "../ui/navbar"
import Image from "next/image"
import React from "react"
import { Parallax } from "react-scroll-parallax"

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
					<Parallax speed={-15}>
						<div className="flex flex-col h-screen justify-center items-center px-4">
							<h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-center leading-tight">
								Run it to prove yourself
							</h1>
							<p className="text-white text-base sm:text-lg mt-6 text-center max-w-2xl font-sans font-light">
								Join runners from around the world for the 21th Jakarta Marathon. Conquer the course. Conquer yourself.
							</p>
							<Button
								className="mt-6 rounded-full font-sans text-sm sm:text-base px-6 sm:px-8"
								variant="secondary"
							>
								Register now
								<ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
							</Button>
						</div>
					</Parallax>
				</div>
			</div>
		</div>
	)
}
