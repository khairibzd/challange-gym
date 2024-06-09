"use client"

import React from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/slick.css"
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"
import { BiSolidQuoteLeft } from "react-icons/bi"
import { RxDotFilled } from "react-icons/rx"

interface ArrowProps {
	onClick?: () => void;
  }
  
  const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
	<button
	  onClick={onClick}
	  className="hidden md:block custom-prev-arrow"
	  aria-label="Previous"
	>
	  <SlArrowLeft
		size={50}
		className="text-white"
	  />
	</button>
  );
  
  const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
	<button
	  onClick={onClick}
	  className="hidden md:block custom-next-arrow"
	  aria-label="Next"
	>
	  <SlArrowRight
		size={50}
		className="text-white"
	  />
	</button>
  );
  
  const QuoteSection: React.FC = () => {
	const pathname = usePathname();
  
	const settings = {
	  dots: false,
	  arrows: true,
	  infinite: true,
	  speed: 1000,
	  slidesToShow: 1,
	  initialSlide: 0,
	  prevArrow: <CustomPrevArrow />,
	  nextArrow: <CustomNextArrow />,
	  customPaging: () => (
		<div className="text-white text-2xl">
		  <RxDotFilled className="mt-8" />
		</div>
	  ),
	  responsive: [
		{
		  breakpoint: 765,
		  settings: {
			dots: true
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			dots: true
		  }
		}
	  ]
	};

	return (
<section className="relative w-full h-screen">
  {pathname === "/" ? (
    <Image
      alt="Close-up of running shoes with water droplets, capturing a person running on a damp pavement with water spray in motion."
      src="/runner.jpg"
      quality={100}
      fill
      style={{ objectFit: "cover" }}
      className="absolute inset-0"
    />
  ) : (
    <div className="absolute inset-0 bg-accent" />
  )}

  <div className="relative  flex justify-center items-center h-full w-full">
    <div className="max-w-screen-xl mx-auto w-full px-5 xs:px-10">
      <Slider {...settings} className="cursor-grab  max-w-[100%]">
        <div className="text-center w-full">
          <BiSolidQuoteLeft
            size={40}
            aria-hidden="true"
            className="text-white flex justify-center w-full mb-12"
          />
          <blockquote>
            <p className="font-[teko] font-semibold text-white text-2xl md:text-4xl uppercase tracking-wide text-center w-full lg:w-[60%] mx-auto leading-snug">
              Reaching an age where prioritizing fitness and health matters
              most. Our bodies rely on us! Initiate self-care for your body,
              and it reciprocates. Embrace a clean diet and intense exercise.
            </p>
            <cite className="block text-white uppercase tracking-widest mt-12 font-normal">
              John Smith, Nutritionist
            </cite>
          </blockquote>
        </div>

        <div className="text-center w-full">
          <BiSolidQuoteLeft
            size={40}
            aria-hidden="true"
            className="text-white flex justify-center w-full mb-12"
          />
          <blockquote>
            <p className="font-[teko] font-semibold text-white text-2xl md:text-4xl uppercase tracking-wide text-center w-full lg:w-[60%] mx-auto leading-snug">
              Reaching an age where prioritizing fitness and health matters
              most. Our bodies rely on us! Initiate self-care for your body,
              and it reciprocates. Embrace a clean diet and intense exercise.
            </p>
            <cite className="block text-white uppercase tracking-widest mt-12 font-normal">
              John Smith, Nutritionist
            </cite>
          </blockquote>
        </div>
      </Slider>
    </div>
  </div>
</section>

	)
}

export default QuoteSection
