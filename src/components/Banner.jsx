"use client";
import React from "react";
import "animate.css";
import Lottie from "lottie-react";
import animationData from "../../public/Business Analytics.json";
const Banner = () => {
  return (
    <div className="bg-[#0F172A] border-t">
      <div className="animate__animated animate__backInRight flex flex-col md:flex-row md:w-10/12 mx-auto p-10 gap-10 justify-between items-center ">
        <div className="md:w-1/2  space-y-7">
          <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold text-white">
            Turn Bold Ideas Into <br />{" "}
            <span className="text-[#6a51e3]">Tomorrow’s</span> Startups
          </h1>
          <p className="text-gray-300 text-center md:text-left">
            IdeaVault is a platform where users can share startup ideas, explore
            creative concepts, and connect with others through comments and
            discussions. It helps innovators gain feedback, validate ideas, and
            grow together as a community.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <button className="btn bg-[#1e293b]">Get Started</button>
            <button className="btn bg-[#7357f5]">Learn More</button>
          </div>
        </div>

        <div className="  md:w-1/2  ">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-100  md:w-[550px] md:h-[550]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
