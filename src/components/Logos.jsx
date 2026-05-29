"use client"
import logo1 from "../../public/airbnb.svg"
import logo2 from "../../public/meta-3.svg"
import logo3 from "../../public/microsoft.png"
import logo4 from "../../public/google.svg"
import logo5 from "../../public/claude-logo.svg"
import logo6 from "../../public/figma-icon.svg"
import logo7 from "../../public/deepseek.svg"
import logo8 from "../../public/ldin.svg"
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
const Logos = () => {
  return (
    <div className="bg-[#0F172A]">
      <h1 className=" md:text-4xl text-3xl  text-center py-8">Inspired by Great Ideas</h1>
      <div className="w-10/12 mx-auto  ">
        <Marquee speed={70} gradient={false} pauseOnHover={true}>
          <Image
            className="mx-8"
            src={logo1}
            alt="Logo 1"
            height={100}
            width={100}
          />
          <Image
            className="mx-8"
            src={logo2}
            alt="Logo 2"
            height={60}
            width={60}
          />
          <Image
            className="mx-8"
            src={logo3}
            alt="Logo 3"
            height={100}
            width={100}
          />
          <Image
            className="mx-8"
            src={logo4}
            alt="Logo 4"
            height={100}
            width={100}
          />
          <Image
            className="mx-8"
            src={logo5}
            alt="Logo 5"
            height={50}
            width={50}
          />
          <Image
            className="mx-8"
            src={logo6}
            alt="Logo 6"
            height={35}
            width={35}
          />
          <Image
            className="mx-8"
            src={logo7}
            alt="Logo 7"
            height={200}
            width={200}
          />
          <Image
            className="mx-8"
            src={logo8}
            alt="Logo 8"
            height={170}
            width={170}
          />
        </Marquee>
      </div>
    </div>
  );
}

export default Logos