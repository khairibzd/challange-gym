"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTogglerContext } from "./context/toggler";
import SmoothScrolling from "./SmoothScrolling";

function AboutSidebar() {
  const { aboutSidebar, setAboutSidebar } = useTogglerContext();

  return (
    <section id="about-sidebar">
      <div
        className={`fixed inset-y-0 right-0 bg-black/80 ${
          aboutSidebar ? "left-0" : "left-[150%]"
        } z-[1000] duration-300 ease-linear`}
      >
        <div
          className="hidden lg:block  absolute inset-y-0 left-0 right-[30%]"
          onClick={() => setAboutSidebar(false)}
        ></div>
        <div style={{background: 'linear-gradient(90deg, #304352 0%, #d7d2cc 100%)' }} className="absolute inset-0 lg:left-[70%] z-[1001] text-white p-8 overflow-y-auto space-y-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                width={90}
                height={30}
                src="/logo-gym-removebg-preview.png"
                alt="test"
              />
              <p className="font-bold text-inherit ml-2">CHALLENGE GYM</p>
            </div>
            <button onClick={() => setAboutSidebar(false)}>
              <i className="fa-solid fa-xmark hover:text-[#fbbf24] duration-300 ease-linear text-3xl"></i>
            </button>
          </div>

          <div className="space-y-4">
            <h1 className="font-bold text-xl">About Us</h1>
            <p>
              Find out who we are and what makes us unique. We are a
              community-driven gym committed to providing personalized fitness
              experiences for all levels of fitness enthusiasts in a welcoming
              and supportive environment.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-xl">Gallery</h1>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/featuredClassImg/materialsArt.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/featuredClassImg/materialsArt.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/featuredClassImg/materialsArt.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/featuredClassImg/materialsArt.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/featuredClassImg/materialsArt.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
              <Image
                src="/featuredClassImg/materialsArt.jpg"
                alt="gallery"
                width={100}
                height={100}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-xl">Contact Info</h1>
            <div className="flex items-center gap-2">
              <span>
                <i className="fa-solid fa-location-dot text-[#fbbf24]"></i>
              </span>
              <span>
                <p>Monastir, bouhjar</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <i className="fa-solid fa-phone text-[#fbbf24]"></i>
              </span>
              <span>
                <p>+123-678800090</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <i className="fa-solid fa-envelope text-[#fbbf24]"></i>
              </span>
              <span>
                <p>challange@gymail.com</p>
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-xl">Follow Us</h1>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com"
                className="bg-[#1e40af] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#fcd34d] hover:text-white duration-200 ease-linear"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link
                href="https://www.twitter.com"
                className="bg-[#1e40af] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#fcd34d] hover:text-white duration-200 ease-linear"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="bg-[#dc2626] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#fcd34d] hover:text-white duration-200 ease-linear"
              >
                <i className="fa-brands fa-pinterest-p"></i>
              </Link>
              <Link
                href="https://www.youtube.com"
                className="bg-[#dc2626] w-12 h-12 text-lg flex items-center justify-center rounded-full hover:bg-[#fcd34d] hover:text-white duration-200 ease-linear"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSidebar;
