"use client";
import React, { useState } from "react";
import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Profilepage = () => {
  const router = useRouter();
  const [isedit, setIsEdit] = useState(false);
  const { data: session } = authClient.useSession();
  const [name, setName] = useState(session?.user?.name);
  const [imageURL, setImageURL] = useState(session?.user?.image);
   useEffect(() => {
     if (session?.user) {
       setName(session.user.name || "");
       setImageURL(session.user.image || "");
     }
   }, [session]);
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-[#0F172A]">
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]"></div>
        <h1 className="text-center pt-4 text-3xl">Welcome ! </h1>
        <h1 className="text-center py-2 text-xl">Manage your profile  </h1>
        <div className="flex flex-col justify-center items-center  bg-white/20 rounded-md w-10/12 mx-auto p-7 backdrop-blur-lg">
          <div className="w-30 h-30 rounded-full border overflow-hidden ">
            {" "}
            <img
              src={session?.user?.image}
              className="w-full h-full object-cover"
            ></img>
            <div></div>
          </div>
          {isedit ? (
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col py-4 ">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  className=" text-xl px-2 py-2 bg-white/10 border border-white/10 text-white"
                ></input>
                <textarea
                  value={imageURL}
                  onChange={(e) => {
                    setImageURL(e.target.value);
                  }}
                  className="mt-3 px-2 py-2 text-xl bg-white/10 border border-white/10 text-white"
                />
              </div>
              <button
                onClick={async () => {
                  const { data, error } = await authClient.updateUser({
                    name: name,
                    image: imageURL,
                  });
                  if (data) {
                    setIsEdit(false);
                    router.refresh();
                  }
                }}
                className="btn btn-primary "
              >
                save
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 py-5 justify-center">
              <div className="flex flex-col">
                <p className="text-xl text-white bg-white/15 p-3 rounded-md mb-1">
                  Username: {session?.user?.name}
                </p>
                <p className="text-xl text-white bg-white/15 p-3 rounded-md">
                  imageURL: {session?.user?.image.slice(0, 20) || "not found"}
                </p>
              </div>

              <button
                onClick={() => {
                  setIsEdit(true);
                }}
                className="btn btn-primary "
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profilepage;
