import React from "react";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import Location from "@/components/contact/Location";

const Contact = () => {
  return (
    <>
      <div className="relative h-[70vh] top-16 md:top-0">
        <Image
          src="/contact-img.jpg"
          alt="Gym interior with exercise equipment"
          layout="fill"
          quality={100}
          className="md:h-auto max-w-full"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:left-[30%] lg:left-[25%] text-white uppercase text-6xl font-bold sm:text-6xl md:text-7xl tracking-wide text-center">
          Contact us
        </h1>
      </div>
      <div className="bg-[#252525]">
        <section className="bg-[#292524] flex flex-col gap-10 md:flex-row py-24 px-10 container max-w-screen-xl mx-auto">
          <Location />
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Contact;
