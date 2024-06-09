import Link from "next/link";
import React from "react";
import { BsTelephoneInbound, BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
const NFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-8 pt-16 text-center lg:text-left bg-[#0a0a0a] text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-8">
            <Image
              src="/logo-gym-removebg-preview.png"
              alt="logo"
              width={90}
              height={100}
              className="m-auto lg:m-0"
            />
            <p className="text-[0.9rem] mt-4">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
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

          <div className="space-y-6">
            <div className="relative">
              <h1 className="font-bold text-2xl">Our Classes</h1>
              <span className="absolute top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none w-16 h-[4px] bg-[#fcd34d]"></span>
            </div>
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <Link href="/" className="hover:text-[#fcd34d] hover:font-bold">
                Fitness Classes
              </Link>
              <Link href="/" className="hover:text-[#fcd34d] hover:font-bold">
                Aerobics Classes
              </Link>
              <Link href="/" className="hover:text-[#fcd34d] hover:font-bold">
                Power Yoga
              </Link>
              <Link href="/" className="hover:text-[#fcd34d] hover:font-bold">
                Learn Machines
              </Link>
              <Link href="/" className="hover:text-[#fcd34d] hover:font-bold">
                Full-body Strength
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <h1 className="font-bold text-2xl">Working Hours</h1>
              <span className="absolute  left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none w-16 h-[4px] bg-[#fcd34d]"></span>
            </div>
            <div className="space-y-2 text-center lg:text-left">
              <p>
                <span className="font-bold">Mon - Fri:</span> 7:00AM - 9:00PM
              </p>
              <p>
                <span className="font-bold">Sat:</span> 7:00AM - 7:00PM
              </p>
              <p>
                <span className="font-bold">Sun:</span> Closed
              </p>
            </div>
          </div>

          <div>
            <div className="relative">
              <h1 className="font-bold text-2xl pb-6">Contact</h1>
              <span className="absolute top-8 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none w-16 h-[4px] bg-[#fcd34d]"></span>
            </div>
            <form className="flex flex-col gap-2 ">
              <Input type="email" isRequired label="FirstName" />
              <Input type="email" isRequired label="Email" />
              <Textarea
                label="Message"
                isRequired
                // errorMessage="Please Fill"
                placeholder="Enter your message"
                // className=" placeholder:text-[#313646]  "
              />
              {/* <button className="bg-accent  text-white uppercase font-bold tracking-widest text-sm mt-4 w-full sm:w-[160px]"></button> */}
              <button className="animated-button  w-[140px]   text-white uppercase mt-2   text-sm ">
                <span> Send message</span>
                <span></span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className=" py-8 px-10 w-full text-center">
        <p>
          Copyright &copy; <span>{currentYear}</span> All rights reserved |
          Website developed by{" "}
          <a
            href={"https://portfolio-khairi.vercel.app/"}
            target="_blank"
            className="font-bold text-[#717274] hover:text-white duration-300"
          >
            BOUZID KHAIRI <span className="sr-only">Opens in a new tab</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default NFooter;
