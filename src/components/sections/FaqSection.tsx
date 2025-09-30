"use client"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Parallax } from "react-scroll-parallax"

export default function FaqSection() {
	return (
		<div className="min-h-screen bg-black">
			<div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-2 w-full min-h-screen p-4">
				<Parallax speed={-12} className="w-full lg:w-1/2">
					<div className="p-4 flex flex-col text-center lg:text-right">
						<p className="text-base text-gray-300 font-sans">FAQ&apos;S</p>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-none text-white font-sans font-medium">
							Frequently <br />
							Asked Questions
						</h1>
						<p className="text-white mt-4 mb-8 font-sans text-sm sm:text-base">
							Get answers to your questions about the Jakarta Marathon 2025.
						</p>
						<div className="mt-4">
							<Button className="rounded-full font-sans text-sm sm:text-base" variant="secondary">
								<ArrowLeft className="w-4 h-4" /> Contact Us
							</Button>
						</div>
					</div>
				</Parallax>
				<Parallax speed={8} className="w-full lg:w-1/2 flex bg-transparent p-4">
					<div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
						<Accordion type="single" collapsible className="w-full font-sans">
							<AccordionItem value="item-1" className="mb-3 border-none">
								<AccordionTrigger className="bg-white text-black rounded-lg shadow-md px-4 sm:px-6 py-3 sm:py-5 flex-row flex justify-between items-center text-sm sm:text-base font-medium data-[state=open]:rounded-b-none">
									How do I register for the Jakarta Marathon?
								</AccordionTrigger>
								<AccordionContent className="bg-white text-black rounded-b-lg shadow-md px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-sm sm:text-base">
									Registration can be completed online through our official
									website. Simply fill out the registration form, select your
									race category, and complete the payment process. You will
									receive a confirmation email once your registration is
									successful.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2" className="mb-3 border-none">
								<AccordionTrigger className="bg-white text-black rounded-lg shadow-md px-4 sm:px-6 py-3 sm:py-5 flex-row flex justify-between items-center text-sm sm:text-base font-medium data-[state=open]:rounded-b-none">
									What is included in the race pack?
								</AccordionTrigger>
								<AccordionContent className="bg-white text-black rounded-b-lg shadow-md px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-sm sm:text-base">
									The race pack includes an official race t-shirt, bib number
									with timing chip, race guide, and exclusive Jakarta Marathon
									merchandise. Details for race pack collection will be sent via
									email prior to the event.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3" className="mb-3 border-none">
								<AccordionTrigger className="bg-white text-black rounded-lg shadow-md px-4 sm:px-6 py-3 sm:py-5 flex-row flex justify-between items-center text-sm sm:text-base font-medium data-[state=open]:rounded-b-none">
									Where does the race start and finish?
								</AccordionTrigger>
								<AccordionContent className="bg-white text-black rounded-b-lg shadow-md px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-sm sm:text-base">
									The marathon starts at Monas (National Monument) and finishes
									at Gelora Bung Karno Stadium (GBK). Both locations are easily
									accessible and will be clearly signposted on race day.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4" className="mb-3 border-none">
								<AccordionTrigger className="bg-white text-black rounded-lg shadow-md px-4 sm:px-6 py-3 sm:py-5 flex-row flex justify-between items-center text-sm sm:text-base font-medium data-[state=open]:rounded-b-none">
									Are there hydration and medical stations along the route?
								</AccordionTrigger>
								<AccordionContent className="bg-white text-black rounded-b-lg shadow-md px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-sm sm:text-base">
									Yes, hydration and medical stations are available at regular
									intervals along the route to ensure runner safety and comfort.
									Please refer to the route map for exact locations.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-5" className="mb-3 border-none">
								<AccordionTrigger className="bg-white text-black rounded-lg shadow-md px-4 sm:px-6 py-3 sm:py-5 flex-row flex justify-between items-center text-sm sm:text-base font-medium data-[state=open]:rounded-b-none">
									Can I change my race category after registration?
								</AccordionTrigger>
								<AccordionContent className="bg-white text-black rounded-b-lg shadow-md px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-sm sm:text-base">
									Changes to race categories are permitted before the
									registration deadline, subject to availability. Please contact
									our support team for assistance with category changes.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-6" className="mb-3 border-none">
								<AccordionTrigger className="bg-white text-black rounded-lg shadow-md px-4 sm:px-6 py-3 sm:py-5 flex-row flex justify-between items-center text-sm sm:text-base font-medium data-[state=open]:rounded-b-none">
									How do I get my finisher medal and certificate?
								</AccordionTrigger>
								<AccordionContent className="bg-white text-black rounded-b-lg shadow-md px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-sm sm:text-base">
									All finishers will receive a medal and digital certificate at
									the finish area. Please ensure your bib number is visible when
									crossing the finish line to claim your rewards.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-7" className="mb-3 border-none">
								<AccordionTrigger className="bg-white text-black rounded-lg shadow-md px-4 sm:px-6 py-3 sm:py-5 flex-row flex justify-between items-center text-sm sm:text-base font-medium data-[state=open]:rounded-b-none">
									How do I get my finisher medal and certificate?
								</AccordionTrigger>
								<AccordionContent className="bg-white text-black rounded-b-lg shadow-md px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-sm sm:text-base">
									All finishers will receive a medal and digital certificate at
									the finish area. Please ensure your bib number is visible when
									crossing the finish line to claim your rewards.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</Parallax>
			</div>
		</div>
	)
}
