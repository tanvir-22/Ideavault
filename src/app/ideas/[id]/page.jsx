import React from "react";
import Image from "next/image";
import { TextArea } from "@heroui/react";
import { FaRegComments } from "react-icons/fa";
import { Avatar } from "@heroui/react";
import { IoIosSend } from "react-icons/io";
const mockComments = [
  {
    id: "1",
    author: "Alex Rahman",
    initial: "A",
    text: "This is a brilliant idea! Mental health support is severely lacking and this could help so many people.",
    createdAt: "2 hours ago",
  },
  {
    id: "2",
    author: "jamal Rahman",
    initial: "J",
    text: "This is a brilliant idea! Mental health support is severely lacking and this could help so many people.",
    createdAt: "5 hours ago",
  },
];
const mockIdea = {
  id: "1",
  title: "AI-Powered Mental Health Companion",
  shortDescription:
    "A 24/7 AI companion that helps users manage stress and anxiety.",
  detailedDescription:
    "Our platform uses advanced NLP and emotion detection to provide personalized mental health support. Users can chat anytime, track their mood over time, and receive actionable tips based on their emotional state.",
  category: "HealthTech",
  tags: ["AI", "Mental Health", "NLP", "Wellness"],
  imageUrl:
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&auto=format",
  estimatedBudget: "$50,000",
  targetAudience: "Young adults aged 18–35 dealing with stress and anxiety.",
  problemStatement:
    "Mental health support is inaccessible and expensive for most people. Long waiting times and stigma prevent people from seeking help.",
  proposedSolution:
    "An AI-powered app that provides immediate, affordable, and stigma-free mental health support available 24/7.",
  author: "Sarah Chen",
  authorInitial: "S",
  createdAt: "May 20, 2026",
  likes: 128,
};
const Detailspage = () => {
  return (
    <div className="bg-[#0F172A]  relative overflow-hidden  ">
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />

      <div className="w-10/12 mx-auto flex justify-around items-center p-8 gap-8">
        <div className="w-1/2">
          <Image
            src={mockIdea.imageUrl}
            alt={mockIdea.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          ></Image>
        </div>
        <div className="w-1/2 bg-white/10 backdrop-blur-lg p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-4">
            {mockIdea.title}
          </h1>
          <p className="text-white mb-2">{mockIdea.shortDescription}</p>
          <p className="text-white mb-4">{mockIdea.detailedDescription}</p>
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <span className="badge badge-soft mr-2 badge-primary">
                {mockIdea.category}
              </span>
            </div>
            <div>
              {mockIdea.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 badge badge-soft badge-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <p className="py-2 text-white">
                <span className=" underline font-bold">Budget:</span>{" "}
                {mockIdea.estimatedBudget}
              </p>
              <p className="py-2 text-white">
                <span className=" underline font-bold">Target Audience:</span>{" "}
                {mockIdea.targetAudience}
              </p>
              <p className="py-2 text-white">
                {" "}
                <span className=" underline font-bold">
                  Problem Statement:
                </span>{" "}
                {mockIdea.problemStatement}
              </p>
              <p className="py-2 text-white">
                {" "}
                <span className="underline font-bold">
                  Proposed Solution:
                </span>{" "}
                {mockIdea.proposedSolution}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-10 rounded-full bg-primary text-white flex items-center justify-center">
                  {mockIdea.authorInitial}
                </div>
              </div>
              <span className="text-white">{mockIdea.author}</span>
            </div>
            <span className="text-white">{mockIdea.createdAt}</span>
          </div>
          <div className="flex justify-around mt-8">
            <button className="btn bg-white/10 bg-backdrop-lg border-white/20 text-white">
              Like ({mockIdea.likes})
            </button>
            <button className="btn bg-white/10 bg-backdrop-lg border-white/20 text-white">
              Comment ({mockIdea?.comments || 0})
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg p-10 mb-5 rounded-lg shadow-lg w-10/12 mx-auto mt-8">
        <div>
          <h1 className="flex items-center">
            {" "}
            <FaRegComments className="text-xl mr-2" /> Comments{" "}
            <span className="ml-2 bg-white/10 backdrop-blur-2xl p-1 rounded-full">
              3
            </span>{" "}
          </h1>
          <div className="flex gap-2 py-2 relative">
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <TextArea
              className="placeholder:text-white/70 w-full bg-white/10 backdrop-blur-lg border-white/10 text-white"
              placeholder="Write your comment..."
            />
          </div>
          <button className="btn btn-primary absolute right-10">
            <IoIosSend /> Post Comment
          </button>
        </div>
        <div className="mt-10 divider"></div>

        <div className="">
          {mockComments.map((item) => {
            return (
              <div key={item.id} className="flex gap-3 relative">
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                  />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
                <div className="w-full mb-2 bg-white/10 backdrop-blur-lg border-white/10 text-white p-4 rounded-lg">
                  <h1 className="font-bold">{item.author}</h1>
                  <p className="text-white/70">{item.text}</p>
                  <p className="right-2 top-0 absolute">{item.createdAt}</p>
                  {item.id == 2 && (
                    <div className="flex gap-2 mt-2">
                      <button className="btn bg-white/10 bg-backdrop border-white/20 text-white">
                        Edit
                      </button>
                      <button className="btn bg-white/10 bg-backdrop border-white/20 text-white">
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-10 divider"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
