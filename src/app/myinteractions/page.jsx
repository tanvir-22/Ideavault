import Link from "next/link";
import React from "react";
import { FaRegComments } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";

const myInteractionsPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  const userId = session?.session?.userId;

  const req_one = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mycomment/${userId}`,
  );
  const commentedPosts = await req_one.json();
  const req_two = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mylikes/${userId}`,
  );
  const likedPosts = await req_two.json();

  return (
    <div className="bg-[#0F172A] min-h-screen relative overflow-hidden">
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />

      <div className="w-10/12 mx-auto py-10">
        <h1 className="text-3xl font-bold text-white text-center mb-10">
          My Interactions
        </h1>

        {/* LIKED POSTS */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-white flex  items-center gap-2 mb-4">
            <GoHeartFill className="text-primary" /> Liked Posts
            <span className="bg-white/10 px-2 py-0.5 rounded-full text-sm">
              {likedPosts.length}
            </span>
          </h2>

          {likedPosts.length === 0 ? (
            <p className="text-white/50">You haven't liked any posts yet.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {likedPosts.map((post) => (
                <div
                  key={post._id}
                  className=" bg-white/10 backdrop-blur-lg shadow-lg p-5 flex flex-col md:flex-row rounded-md   md:items-center"
                >
                  <figure className="w-80 h-30 md:h-35 md:w-40">
                    <img
                      src={post.imageURL}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-white text-xs md:text-xl">
                      {post.title}
                    </h3>
                    <p className="text-white/60 md:text-sm text-[12px]">
                      {post.shortDescription}
                    </p>
                    <div className="badge badge-soft badge-accent">
                      {post.category}
                    </div>
                  </div>
                  <Link
                    href={`/ideas/${post._id}`}
                    className="btn btn-primary btn-sm mt-2"
                  >
                    View Post
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="divider"></div>

        <div>
          <h2 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
            <FaRegComments className="text-primary" /> My Comments
            <span className="bg-white/10 px-2 py-0.5 rounded-full text-sm">
              {commentedPosts.length}
            </span>
          </h2>

          {commentedPosts.length === 0 ? (
            <p className="text-white/50">
              You haven't commented on any posts yet.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {commentedPosts.map((post) => {
                const myComments = post.comments.filter(
                  (c) => c.userId === userId,
                );
                return (
                  <div
                    key={post._id}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-white font-bold text-lg">
                        {post.title}
                      </h3>
                      <Link
                        href={`/ideas/${post._id}`}
                        className="btn btn-primary btn-sm"
                      >
                        View Post
                      </Link>
                    </div>
                    {/* show user's comments on this post */}
                    {myComments.map((comment) => (
                      <div
                        key={comment.commentId}
                        className="bg-white/5 rounded-lg p-3 mb-2"
                      >
                        <p className="text-white/80">{comment.text}</p>
                        <p className="text-white/40 text-xs mt-1">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default myInteractionsPage;
