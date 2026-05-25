"use client"
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Marketing.json";

const Marketing = () => {
  return (
    <div className="bg-[#0F172A] py-10">
      <h1 className="text-4xl text-center ">
        Transform Ideas Into Data-Driven Innovation
      </h1>
      <div className="w-10/12 mx-auto py-20 flex justify-between items-center">
        <div className="w-1/2">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 500, height: 500 }}
          ></Lottie>
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl text-[#6f54ef] font-semibold py-5">Understand What Makes Ideas Succeed</h3>
          <p className="text-gray-300 text-xl w-4/5">
            IdeaVault helps innovators go beyond simply sharing ideas by
            providing meaningful engagement insights and community-driven
            feedback. Discover which startup concepts are trending, analyze user
            interactions, and understand what captures attention the most.
            
          </p>
          <button className="bg-[#6f54ef] mt-5 text-white py-2 px-4 rounded-md hover:bg-[#5a41d0]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
