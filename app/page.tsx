import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import AppBgImg from "@/components/bgImg";
import { Spacer } from "@nextui-org/react";
import NextButton from "@/components/button";
import WhoWeAre from "@/components/WhoWeAre";
import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedClass from "@/components/FeaturedClass";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <FeaturedClass />
      <Footer />
    </main>
  );
}
