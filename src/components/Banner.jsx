"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Business Analytics.json";
const Banner = () => {
  return (
    <div className="bg-[#0F172A] border-t">
    <div className=" flex w-10/12 mx-auto p-10 gap-10 justify-between items-center ">
      <div className="w-1/2  space-y-7">
        <h1 className="text-5xl font-bold text-white">Turn Bold Ideas Into <br /> <span className="text-[#6a51e3]">Tomorrow’s</span> Startups</h1>
        <p className="text-gray-300">
          IdeaVault is a platform where users can share startup ideas, explore
          creative concepts, and connect with others through comments and
          discussions. It helps innovators gain feedback, validate ideas, and
          grow together as a community.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="btn bg-[#1e293b]">Get Started</button>
          <button className="btn bg-[#7357f5]">Learn More</button>
        </div>
      </div>

      <div className="w-1/2  ">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 550, height: 550 }}
        />
      </div>
    </div>
    </div>
  );
};

export default Banner;
