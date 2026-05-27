"use client"
import React from 'react'
import { IoIosSend } from "react-icons/io";
import { TextArea } from "@heroui/react";
import { FaRegComments } from "react-icons/fa";
import { Avatar } from "@heroui/react";
const LikeCommentSection = ({ res, userData }) => {
  return (
    <>
      <div className="bg-white/10 backdrop-blur-lg   rounded-lg shadow-lg w-2/12 mx-auto mt-8">
       
      </div>

      <div className="bg-white/10 backdrop-blur-lg p-10 mb-5 rounded-lg shadow-lg w-10/12 mx-auto mt-8">
        <div>
          <h1 className="flex items-center">
            {" "}
            <FaRegComments className="text-xl mr-2" /> Comments{" "}
            <span className="ml-2 bg-white/10 backdrop-blur-2xl p-1 rounded-full">
              {res.comments.length}
            </span>{" "}
          </h1>
          <div className="flex gap-2 py-2 relative">
            <Avatar>
              <Avatar.Image alt="John Doe" src={userData.image} />
              <Avatar.Fallback>{userData.name.charAt(0)}</Avatar.Fallback>
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
          {res?.comments.map((item) => {
            return (
              <div key={item.id} className="flex gap-3 relative">
                <Avatar>
                  <Avatar.Image alt="John Doe" src={userData.image} />
                  <Avatar.Fallback>{userData.name.charAt(0)}</Avatar.Fallback>
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
    </>
  );
}

export default LikeCommentSection