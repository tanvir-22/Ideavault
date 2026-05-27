"use client";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { TextArea } from "@heroui/react";
import { FaRegComments } from "react-icons/fa";
import { Avatar } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

const LikeCommentSection = ({ res, userData }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const { data: session } = authClient.useSession();
  console.log(res);
  const userId = session?.session?.userId;
  const router = useRouter();
  const [comment, setComment] = useState("");
  const handleComment = async () => {
    if (!comment.trim()) return;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/${res._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId,
        text: comment,
        author: session?.user?.name,
      }),
    });
    setComment("");
    router.refresh();
  };

  const handleEdit = async (commentId) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comment/${res._id}/edit`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ commentId, text: editText }),
    });
    setEditingId(null);
    setEditText("");
    router.refresh();
  };

  const handleDelete = async (commentId) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comment/${res._id}/delete`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ commentId }),
      },
    );
    router.refresh();
  };
  return (
    <>
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="placeholder:text-white/70 w-full bg-white/10 backdrop-blur-lg border-white/10 text-white"
              placeholder="Write your comment..."
            />
          </div>
          <button
            onClick={handleComment}
            className="btn btn-primary absolute right-10"
          >
            <IoIosSend /> Post Comment
          </button>
        </div>
        <div className="mt-10 divider"></div>

        <div className="">
          {res?.comments.map((item) => {
            return (
              <div key={item._id} className="flex gap-3 relative">
                <Avatar>
                  <Avatar.Image alt="John Doe" src={userData.image} />
                  <Avatar.Fallback>{userData.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <div className="w-full mb-2 bg-white/10 backdrop-blur-lg border-white/10 text-white p-4 rounded-lg">
                  <h1 className="font-bold">{item.author}</h1>
                  {editingId === item.commentId ? (
                    <div className="flex gap-2 mt-2">
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="input bg-white/10 text-white w-full"
                      />
                      <button
                        onClick={() => handleEdit(item.commentId)}
                        className="btn btn-primary"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="btn"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <p className="text-white/70">{item.text}</p>
                  )}
                  <p className="right-2 top-0 absolute">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                  {item?.userId == userId && (
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => {
                          setEditingId(item.commentId);
                          setEditText(item.text);
                        }}
                        className="btn bg-white/10 bg-backdrop border-white/20 text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.commentId)}
                        className="btn bg-white/10 bg-backdrop border-white/20 text-white"
                      >
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
};

export default LikeCommentSection;
