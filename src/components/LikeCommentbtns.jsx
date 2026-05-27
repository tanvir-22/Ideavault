"use client";
import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
const LikeCommentbtns = ({ res }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const userId = session?.session?.userId;

  const [hasliked, setHasliked] = useState(res.likes.includes(userId));
  const handleLikeBtn = async () => {
    setHasliked(!hasliked);
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/like/${res._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });
    router.refresh();
  };
  return (
    <div className="flex justify-around mt-8">
      <button
        onClick={handleLikeBtn}
        className="btn bg-white/10 bg-backdrop-lg border-white/20 text-white"
      >
        {hasliked ? <GoHeartFill></GoHeartFill> : <GoHeart></GoHeart>}
        Like ({res.likes.length})
      </button>
      <button className="btn bg-white/10 bg-backdrop-lg border-white/20 text-white">
        Comment ({res?.comments.length})
      </button>
    </div>
  );
};

export default LikeCommentbtns;
