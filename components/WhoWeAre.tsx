import Image from "next/image";
import Link from "next/link";
import NextButton from "./button";
import RadialGradient from "./magicui/radial-gradient";
import LinearGradient from "./magicui/linear-gradient";
import Lenis from "lenis";

function WhoWeAre() {
  
  return (
    <>
      <div className="relative  px-8 pb-16 lg:pb-24 ">
        <Image
          src="/kseniya-lapteva-9oqHatKA8SI-unsplash.jpg"
          fill
          quality={100}
          style={{
            objectFit: "cover",
            zIndex: 0,
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
          }}
          alt=""
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl m-auto gap-8 -translate-y-16 ">
          <div className="bg-white bg-cover   hover:bg-[url('/whoweare.jpg')] hover:text-white cursor-pointer p-8 lg:py-16 flex flex-col items-center text-center gap-4 rounded-tl-[35px] rounded-br-[35px] shadow-2xl ">
            <Image
              src="/png-clipart-reset-button-computer-icons-sign-up-button-angle-text-removebg-preview.png"
              alt="progression"
              width={85}
              height={60}
            />
            <h1 className="font-bold text-2xl">PROGRESSION</h1>
            <p className="text-[0.95rem]">
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
          <div className="bg-white bg-cover hover:bg-[url('/whoweare.jpg')] hover:text-white cursor-pointer p-8 lg:py-16 flex flex-col items-center text-center gap-4 rounded-tl-[35px] rounded-br-[35px] shadow-2xl">
            <Image
              src="/fitness-centre-physical-fitness-logo-work-out-thumbnail-removebg-preview.png"
              alt="workout"
              width={100}
              height={60}
            />
            <h1 className="font-bold text-2xl">WORKOUT</h1>
            <p className="text-[0.95rem]">
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div className="bg-white bg-cover hover:bg-[url('/whoweare.jpg')] hover:text-white cursor-pointer p-8 lg:py-16 flex flex-col items-center text-center gap-4 rounded-tl-[35px] rounded-br-[35px] shadow-2xl">
            <Image
              src="/201-2011732_restaurant-service-nutrition-symbol-black-white-hd-png-removebg-preview.png"
              alt="nutritions"
              width={90}
              height={60}
            />
            <h1 className="font-bold text-2xl">NUTRITIONS</h1>
            <p className="text-[0.95rem]">
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto">
          <div className="relative flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
            {/* <Image
              src="/images/abstract/abstract.svg"
              alt="abstract"
              width={200}
              height={200}
              className="absolute left-[3.75rem] -top-1.5 lg:left-0"
            />
            <p className="text-white relative z-10 font-bold text-center lg:translate-x-10">
              WHO WE ARE
            </p> */}
            <h1 className="font-bold text-4xl">
              Take Your Health And Body To Next Level
            </h1>
            <p>
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-0 lg:text-center gap-8 my-8">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/fitness-centre-physical-fitness-logo-work-out-thumbnail-removebg-preview.png"
                  alt="PROFESSIONAL TRAINERS"
                  width={80}
                  height={60}
                />
                <h1 className="font-bold text-xl">
                  PROFESSIONAL
                  <br />
                  TRAINERS
                </h1>
              </div>
              <div className="flex flex-col items-center gap-4 lg:border-x lg:border-[rgb(0,0,0,0.2)] lg:px-12">
                <Image
                  src="/png-clipart-reset-button-computer-icons-sign-up-button-angle-text-removebg-preview.png"
                  alt="MODERN EQUIPMENTS"
                  width={60}
                  height={60}
                />
                <h1 className="font-bold text-xl">
                  MODERN
                  <br />
                  EQUIPMENTS
                </h1>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/201-2011732_restaurant-service-nutrition-symbol-black-white-hd-png-removebg-preview.png"
                  alt="FANCY GYM MACHINES"
                  width={60}
                  height={60}
                />
                <h1 className="font-bold text-xl">
                  FANCY GYM
                  <br />
                  MACHINES
                </h1>
              </div>
            </div>
            <div>
              <Link href="/">
                <NextButton />
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              width={1000}
              height={1000}
              src="/228-2281563_athletics-athletics-images-png-transparent-png-removebg-preview.png"
              alt="girl_running"
              className="absolute w-[34rem] right-[46%] top-[50%] translate-x-1/2 -translate-y-1/2 z-[5]"
            />
            {/* <Image
              width={250}
              height={250}
              src="/images/whoweare/half-circle.svg"
              alt="bg-red"
              className="absolute top-[55%] left-[9.5rem] translate-x-1/2 -translate-y-1/2"
            /> */}
            <Image
              width={80}
              height={80}
              src="/running-text.png"
              alt="bg-text"
              className="absolute top-[55%] translate-x-1/2 -translate-y-1/2 right-[78%]"
            />
            {/* <Image
              width={80}
              height={80}
              src="/images/whoweare/fart.png"
              alt="bg-wind"
              className="absolute right-[34%] top-[57.5%] translate-x-1/2 -translate-y-1/2"
            /> */}
          </div>
        </div>
        {/* <RadialGradient /> */}
        {/* <LinearGradient/> */}
      </div>
    </>
  );
}

export default WhoWeAre;
