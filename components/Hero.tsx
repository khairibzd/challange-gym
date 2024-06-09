import Link from "next/link";
import AppBgImg from "./bgImg";
import AboutSidebar from "./aboutSideBar";
import { useTogglerContext } from "./context/toggler";
import LandingButton from "./button";

export default function Hero() {

  return (
    <>
      <div className="relative h-[112vh] flex justify-center items-center text-white p-8">
        <AppBgImg />
        {/* <AboutSidebar/> */}
        
        <div className="relative inline-block text-center m-auto">
          <h1 className="font-bold text-[2.5rem] md:text-7xl flex flex-col gap-2 text-center leading-snug lg:space-y-2">
            <span className="text-[#facc15]">MAKE YOUR BODY</span>
            <span className="font-normal text-white">FIT & PERFECT</span>
            {/* <AboutSidebar/> */}
          </h1>
          {/* <button
            onClick={() => setAboutSidebar(true)}
            className="text-2xl hover:text-[#FF0336] ease-in duration-200"
          >
            <i className="fa-regular fa-chart-bar"></i>
          </button> */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 py-4"
          >
            <LandingButton/>
            
          </Link>
        </div>
      </div>
    </>
  );
}
