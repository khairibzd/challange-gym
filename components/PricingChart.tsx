import Image from "next/image";
import Link from "next/link";
import React from "react";
import PurchaseButton from "./PricingBtn";

function PricingChart() {
  return (
    <section id="pricing-chart">
      <div className="bg-[#252525] px-8 py-16 text-center  relative space-y-16">
        {/* <p className="text-white relative z-10 font-bold text-center mb-4">
            PRICING CHART
          </p> */}
        <div className="relative flex flex-col gap-4 items-center text-center">
          <h1 className="text-white font-bold text-4xl">
            Exclusive Pricing Plan
          </h1>
          <p className="text-white">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto lg:px-16 gap-6  relative">
          <div className="flex flex-col group">
            <div className="relative">
              <Image
                src="/pexels-anush-1229356.jpg"
                alt="beginners"
                width={500}
                height={500}
                className="grayscale group-hover:grayscale-0 duration-300 ease-linear w-full"
              />
              <div className="bg-[#29282d] text-white font-bold text-xl py-4 text-center absolute -bottom-5 left-12 right-12 group-hover:text-[#fbbf24] duration-300 ease-linear">
                Beginners
              </div>
            </div>
            <div className="bg-[#29282d]  text-white pb-12 pt-8 shadow-xl flex flex-col items-center justify-center gap-6 lg:gap-4">
              <div className="flex gap-2 items-center lg:mb-2">
                <span className="text-xl">$</span>
                <span className="font-bold text-[3.5rem]">39</span>
                <span className="text-xl">p/m</span>
              </div>
              <p className="-mt-4">Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <div>
              <Link href="/">
                <PurchaseButton />
              </Link>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col group">
            <div className="relative">
              <Image
                src="/pexels-anush-1229356.jpg"
                alt="basic"
                width={500}
                height={500}
                className="grayscale group-hover:grayscale-0 duration-300 ease-linear w-full"
              />
              <div className="bg-[#29282d] text-white font-bold text-xl py-4 text-center absolute -bottom-5 left-12 right-12 group-hover:text-[#fbbf24] duration-300 ease-linear">
                Basic
              </div>
            </div>
            <div className="bg-[#29282d] text-white pb-12 pt-8 shadow-xl flex flex-col items-center justify-center gap-6 lg:gap-4">
              <div className="flex gap-2 items-center lg:mb-2">
                <span className="text-xl">$</span>
                <span className="font-bold text-[3.5rem]">59</span>
                <span className="text-xl">p/m</span>
              </div>
              <p className="-mt-4">Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link href="/">
                <PurchaseButton />
              </Link>
            </div>
          </div>
          <div className="flex flex-col group">
            <div className="relative">
              <Image
                src="/pexels-anush-1229356.jpg"
                alt="advance"
                width={500}
                height={500}
                className="grayscale group-hover:grayscale-0 duration-300 ease-linear w-full"
              />
              <div className="bg-[#29282d] text-white font-bold text-xl py-4 text-center absolute -bottom-5 left-12 right-12 group-hover:text-[#fbbf24] duration-300 ease-linear">
                Advance
              </div>
            </div>
            <div className="bg-[#29282d] text-white pb-12 pt-8 shadow-xl flex flex-col items-center justify-center gap-6 lg:gap-4">
              <div className="flex gap-2 items-center lg:mb-2">
                <span className="text-xl">$</span>
                <span className="font-bold text-[3.5rem]">69</span>
                <span className="text-xl">p/m</span>
              </div>
              <p className="-mt-4">Free Hand</p>
              <p>Gym Fitness</p>
              <p>Weight Loss</p>
              <p>Personal Trainer</p>
              <p>Cycling</p>
              <Link href="/">
                <PurchaseButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingChart;
