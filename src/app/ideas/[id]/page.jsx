import React from "react";
import Image from "next/image";

import { Avatar } from "@heroui/react";

import LikeCommentSection from "@/components/LikeCommentSection";
import LikeCommentbtns from "@/components/LikeCommentbtns";
import { auth } from "../../../lib/auth";
import { headers } from "next/headers";
const Detailspage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const res = await req.json();

  const userRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${res?.author}`,
    {
      headers:{
        authorization:`Bearer ${token}`
      }
    }
  );
  const userData = await userRequest.json();

  return (
    <div className="bg-[#0F172A]  relative overflow-hidden  ">
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />

      <div className="md:w-10/12 mx-auto flex flex-col md:flex-row justify-around items-center p-8 gap-8">
        <div className="md:w-1/2">
          <Image
            src={res.imageURL}
            alt={res.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          ></Image>
        </div>
        <div className=" md:w-1/2 bg-white/10 backdrop-blur-lg p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-4">{res.title}</h1>
          <p className="text-white mb-2">{res.shortDescription}</p>
          <p className="text-white mb-4">{res.detailedDescription}</p>
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <span className="badge badge-soft mr-2 badge-primary">
                {res.category}
              </span>
            </div>
            <div>
              {res.tags.map((tag) => (
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
                {res.estimatedBudget}
              </p>
              <p className="py-2 text-white">
                <span className=" underline font-bold">Target Audience:</span>{" "}
                {res.targetAudience}
              </p>
              <p className="py-2 text-white">
                {" "}
                <span className=" underline font-bold">
                  Problem Statement:
                </span>{" "}
                {res.problemStatement}
              </p>
              <p className="py-2 text-white">
                {" "}
                <span className="underline font-bold">
                  Proposed Solution:
                </span>{" "}
                {res.proposedSolution}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="avatar">
                <Avatar>
                  <Avatar.Image alt="John Doe" src={userData.image} />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
              </div>
              <span className="text-white">{userData.name}</span>
            </div>
            <span className="text-white">
              {new Date(res.updatedAt).toLocaleDateString()}
            </span>
          </div>
          <LikeCommentbtns res={res}></LikeCommentbtns>
        </div>
      </div>

      <LikeCommentSection res={res} userData={userData} />
    </div>
  );
};

export default Detailspage;
