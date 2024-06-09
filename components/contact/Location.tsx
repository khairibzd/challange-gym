import React from "react";
import Image from "next/image";

const Location = () => {
  return (
    <div className="text-white relative flex flex-col w-full">
      <div className="relative w-full h-[300px]  ">
        <Image
          src="/Googlemap-600x551-1.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-[20px]"
          alt="Map showing gym location pinpoint"
        />
      </div>
      <div className="relative mt-7 px-4">
        <h4 className="text-[#facc15] font-bold text-xl uppercase tracking-wide">Address</h4>
        <p>Lorem ipsum dolor sit, amet consectetur</p>
      </div>
      <div className="relative flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center mt-5 px-4">
        <div>
          <h4 className="text-[#facc15] text-xl font-bold uppercase tracking-wide">Phone</h4>
          <p>0203 3333 3333</p>
        </div>
        <div>
          <h4 className="text-[#facc15]  font-bold  text-xl uppercase tracking-wide">
            Email
          </h4>
          <p className="text-accent">power@poweronline.com</p>
        </div>
      </div>
      <p className="relative mt-10 px-4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
    </div>
  );
};

export default Location;
