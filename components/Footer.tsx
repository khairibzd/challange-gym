import Image from "next/image";
import Link from "next/link";


function Footer() {
  return (
    <>
      <footer className="px-8 py-16 text-center lg:text-left bg-gray-800 text-white">
        <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row lg:justify-between">
          <div className="space-y-4 lg:w-[90vh]">
            <div>
              <Image
                src="/logo-gym-removebg-preview.png"
                alt="logo"
                width={110}
                height={160}
                className="m-auto lg:m-0"
              />
              <p className="text-[0.9rem] mt-4">
                Take your health and body to the next level with our comprehensive
                program designed to help you reach your fitness goals.
              </p>
            </div>
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
            <div>
              <p>Privacy Policy | © {new Date().getFullYear()} Challenge</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 lg:mt-0">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="font-bold text-2xl">Our Classes</h1>
                <span className="top-8 left-[5.75rem] lg:left-0 absolute w-16 h-[4px] bg-[#fcd34d]"></span>
              </div>
              <div className="flex flex-col gap-4 items-center lg:items-baseline">
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
                <span className="top-8 left-[4.45rem] lg:left-0 absolute w-16 h-[4px] bg-[#fcd34d]"></span>
              </div>
              <div className="space-y-2">
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
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;