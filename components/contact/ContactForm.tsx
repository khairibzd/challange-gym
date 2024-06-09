import React from "react";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 w-full font-normal text-[#313646]">
      <Input
        type="email"
        isRequired
        label="FirstName"
      />
      <Input
        type="email"
        isRequired
        label="LastName"
      />
      <Input type="email" errorMessage="Please Fill" isRequired label="Phone" />

      <Input type="email" errorMessage="Please Fill" isRequired label="Email" />

      {/* <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        placeholder="Email"
        id="email"
        required
        aria-required
        className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
      /> */}

      <Textarea
        label="Message"
        isRequired
        errorMessage="Please Fill"
        placeholder="Enter your message"
        className=" placeholder:text-[#313646]  "
      />
      {/* <textarea
        placeholder="Message"
        rows={6}
        id="message"
        required
        aria-required
        className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
      ></textarea> */}
      <button className="animated-button  w-[140px]  text-white uppercase   text-sm ">
        <span> Send message</span>
        <span></span>
      </button>
    </form>
  );
};

export default ContactForm;
