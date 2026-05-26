import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { LiaCommentSolid } from "react-icons/lia";
const myIdeaPage = () => {
  return (
    <div className="bg-[#0F172A]  relative overflow-hidden  ">
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />
      <h1 className="text-3xl font-bold text-center text-white py-8">
        Your Shared Ideas
      </h1>
      <div className="grid grid-cols-3 gap-4 p-8">
        <div className="card bg-white/10 backdrop-blur-lg  w-92 shadow-lg">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="flex gap-2 py-2">
              <p className="text-lg">Category-</p>
              <div className="badge badge-soft badge-primary">Primary</div>
              <div className="badge badge-soft badge-accent">Accent</div>
            </div>
            <div className="flex justify-between py-3   gap-2">
              <div className="flex items-center gap-1 border border-gray-300 rounded-md p-2">
                <GoHeartFill className=" text-3xl text-primary" />
                Likes
                <span>113</span>
              </div>
              <div className="flex items-center gap-1 border border-gray-300 rounded-md p-2">
                <LiaCommentSolid className=" text-3xl text-primary" />
                Comments
                <span>113</span>
              </div>
            </div>
            <div className="card-actions ">
              <button className="btn btn-primary">View</button>
              <button className="btn btn-primary">Edit Idea</button>
              <button className="btn bg-red-600">Delete Idea</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default myIdeaPage