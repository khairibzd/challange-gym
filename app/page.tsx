"use client";

import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import AppBgImg from "@/components/bgImg";
import { Spacer } from "@nextui-org/react";
import WhoWeAre from "@/components/WhoWeAre";
import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedClass from "@/components/FeaturedClass";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
import AboutSidebar from "@/components/aboutSideBar";
import ServicesSection from "@/components/ServicesSection";
import QuoteSection from "@/components/QuoteSection";
import PricingChart from "@/components/PricingChart";
import Bmi from "@/components/bmi";

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
  return (
    <main>
      <Hero />
      {/* <WhoWeAre /> */}
       <ServicesSection/>
      <FeaturedClass />
      <QuoteSection/>
      <PricingChart/>
      <Bmi/>

    </main>
  );
}
