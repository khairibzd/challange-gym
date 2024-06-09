import React from "react"
import FeatureGrid from "./FeatureGrid"
import DotPattern from "./magicui/dot-pattern"
import { cn } from "@/config/cn"

const ServicesSection = () => {
	return (
		<section className="relative bg-[#262626] py-44 px-10 w-full">
			<div className="max-w-screen-xl mx-auto">
				<div className=" flex flex-col justify-center items-center mb-10">
					<h2 className="text-white text-center text-5xl uppercase tracking-wide">
						Push your limits forward
					</h2>
					<p className="text-center text-white text-lg w-full md:w-[70%] py-4 mb-10">
						Train alongside top experts in the bodybuilding industry. Let your
						results do the talking. Explore cutting-edge exercise trends,
						state-of-the-art equipment, and customised nutrition strategies.
					</p>
				</div>
				<FeatureGrid
					textColour="white"
					hoverColour="accent"
					iconColour="[#fbbf24]"
				/>
			</div>
			<DotPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
      />
		</section>
	)
}

export default ServicesSection
