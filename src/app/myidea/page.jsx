"use client";
import React, { useState, useEffect } from "react";
import { GoHeartFill } from "react-icons/go";
import { LiaCommentSolid } from "react-icons/lia";
import { authClient } from "../../lib/auth-client";
import { Spinner } from "@heroui/react";
import { redirect } from "next/navigation";
import EditIdea from "../../components/EditIdea";
const myIdeaPage = () => {
  const { data: session } = authClient.useSession();
  const id = session?.session?.userId;
  console.log(id);
  const [userSharedIdeas, setUserSharedIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/userideas/${id}`,
      );
      const res = await req.json();
      setUserSharedIdeas(res);
      setLoading(false);
    }
    if (id) loadData();
  }, [id]);
  console.log(userSharedIdeas);
  const viewHandler = (id) => {
    redirect(`${process.env.NEXT_PUBLIC_CLIENT_URI}/ideas/${id}`);
  };
  return (
    <div className="bg-[#0F172A]  relative overflow-hidden  ">
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />
      <h1 className="text-3xl font-bold text-center text-white py-6">
        Your Shared Ideas
      </h1>
      <p className="text-center font-semibold">
        Total shared ideas:{userSharedIdeas.length}
      </p>
      {loading ? (
        <div className="flex items-center gap-4 h-screen justify-center">
          <Spinner />
        </div>
      ) : null}
      <div className="grid grid-cols-3 gap-4 p-8 w-10/12 mx-auto">
        {userSharedIdeas.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="card bg-white/10 backdrop-blur-lg  w-92 shadow-lg"
              >
                <figure className="h-52 ">
                  <img
                    src={data.imageURL}
                    alt="image"
                    className="w-full h-full object-cover rounded-xs"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.title}</h2>
                  <p>{data.shortDescription}</p>
                  <div className="flex gap-2 py-2">
                    <p className="text-lg">Category-</p>

                    <div className="badge badge-soft badge-accent">
                      {data.category}
                    </div>
                  </div>
                  <div className="flex justify-between py-3   gap-2">
                    <div className="flex items-center gap-1 border border-gray-300 rounded-md p-2">
                      <GoHeartFill className=" text-3xl text-primary" />
                      Likes
                      <span>{data?.likes.length}</span>
                    </div>
                    <div className="flex items-center gap-1 border border-gray-300 rounded-md p-2">
                      <LiaCommentSolid className=" text-3xl text-primary" />
                      Comments
                      <span>{data?.comments.length}</span>
                    </div>
                  </div>
                  <div className="card-actions flex justify-evenly">
                    <button
                      onClick={() => {
                        viewHandler(data._id);
                      }}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                    <EditIdea post={data} />
                    <button className="btn bg-red-600">Delete</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default myIdeaPage;
