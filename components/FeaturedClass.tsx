import Image from "next/image";

function FeaturedClass() {
  return (
    <section className="bg-[#252525]">
      <div className="px-8 py-16 flex flex-col  gap-8 max-w-screen-xl m-auto lg:px-0 lg:py-24">
        {/* <div className="relative">
          <Image
            src="/pexels-anush-1229356.jpg"
            alt="abstract"
            width={270}
            height={270}
            className="absolute left-[1.65rem] lg:left-[39.25%] -top-2.5"
          />
          <p className="text-white relative z-10 font-bold text-center">
            OUR FEATURED CLASS
          </p>
        </div> */}
        <h1 className="text-white font-bold text-4xl text-center">
          We Are Offering Best Flexible Classes
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 lg:mt-4">
          <div className="group h-[20rem] lg:col-span-2 flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)]  rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 after:absolute after:scale-[.7] "></div>
            <div className="absolute inset-0 bg-[url('/pexels-anush-1229356.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Cycling</h1>
              <p className="bg-[#fbbf24] px-4 py-1">
                Wednesday: 9:00am-10:00am
              </p>
            </div>
          </div>
          <div className="group h-[20rem] flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)] rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 "></div>
            <div className="absolute inset-0 bg-[url('/pexels-anush-1229356.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Karate</h1>
              <p className="bg-[#fbbf24] px-4 py-1">Friday: 10:00am-11:00am</p>
            </div>
          </div>
          <div className="group h-[20rem] flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)]  rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 "></div>
            <div className="absolute inset-0 bg-[url('/pexels-anush-1229356.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Power</h1>
              <p className="bg-[#fbbf24] px-4 py-1">Saturday: 9:00am-10:00am</p>
            </div>
          </div>
          <div className="group h-[20rem] flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)]  rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 "></div>
            <div className="absolute inset-0 bg-[url('/pexels-anush-1229356.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Meditation</h1>
              <p className="bg-[#fbbf24] px-4 py-1">Friday: 1:00pm-2:00pm</p>
            </div>
          </div>
          <div className="group h-[20rem] flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)]  rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 "></div>
            <div className="absolute inset-0 bg-[url('/pexels-anush-1229356.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Martial Arts</h1>
              <p className="bg-[#fbbf24] px-4 py-1">Sunday: 6:00pm-7:00pm</p>
            </div>
          </div>
          <div className="group h-[20rem] lg:col-span-2 flex items-end relative p-6 overflow-hidden cursor-pointer">
            <div className="bg-[hsla(0,0%,100%,.3)]  rounded-tr-[50px] rounded-br-[50%] absolute top-[20%] -left-[3.125rem] w-[8.75rem] h-[4.375rem] rotate-[30deg] z-10 "></div>
            <div className="absolute inset-0 bg-[url('/pexels-anush-1229356.jpg')] bg-cover bg-[50%] grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300 ease-linear"></div>
            <div className="space-y-4 text-white grayscale-0">
              <h1 className="font-bold text-3xl">Workout</h1>
              <p className="bg-[#fbbf24] px-4 py-1">Monday: 4:00pm-5:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedClass;
