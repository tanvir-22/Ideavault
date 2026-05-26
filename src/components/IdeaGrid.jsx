import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { FaRocket } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
const IdeaGrid = () => {
  return (
    <div className="bg-[#0F172A] py-10">
      <div className="w-10/12 mx-auto py-20 ">
        <h1 className="text-4xl  text-center ">
          Everything You Need to Grow Your Ideas
        </h1>
        <p className="text-center text-white/70 mt-4">
          Discover powerful features designed to help innovators share,
          validate, and improve startup ideas through community collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/20 transition duration-300">
            <FaLightbulb className="text-3xl text-white" />
            <h2 className="text-xl font-bold mt-2 text-white">
              Share Startup Ideas
            </h2>
            <p className="text-white/70 mt-1">
              Post your innovative concepts and showcase your creativity with
              the community.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/20 transition duration-300">
            <FaFireAlt className="text-3xl text-white" />
            <h2 className="text-xl font-bold mt-2 text-white">
              Discover Trending Ideas
            </h2>
            <p className="text-white/70 mt-1">
              Explore popular and fast-growing startup ideas shared by other
              innovators.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/20 transition duration-300">
            <CiChat1 className="text-3xl text-white" />
            <h2 className="text-xl font-bold mt-2 text-white">
              Community Discussions
            </h2>
            <p className="text-white/70 mt-1">
              Engage in meaningful conversations through comments and idea
              feedback.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/20 transition duration-300">
            <FaRocket className="text-3xl text-white" />
            <h2 className="text-xl font-bold mt-2 text-white">
              Idea Validation
            </h2>
            <p className="text-white/70 mt-1">
              Get opinions and reactions from users to refine and strengthen
              your concept.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/20 transition duration-300">
            <FaHandshake className="text-3xl text-white" />
            <h2 className="text-xl font-bold mt-2 text-white">
              Collaborate With Innovators
            </h2>
            <p className="text-white/70 mt-1">
              Connect with creative thinkers, developers, and future
              entrepreneurs.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/20 transition duration-300">
            <GoGraph className="text-3xl text-white" />
            <h2 className="text-xl font-bold mt-2 text-white">
              Track Engagement
            </h2>
            <p className="text-white/70 mt-1">
              See which ideas are gaining attention through likes, discussions,
              and interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaGrid;
