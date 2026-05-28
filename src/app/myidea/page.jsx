import { GoHeartFill } from "react-icons/go";
import { LiaCommentSolid } from "react-icons/lia";
import { auth } from "../../lib/auth";
import Link from "next/link";
import EditIdea from "../../components/EditIdea";
import DeleteIdea from "../../components/DeleteIdea";
import { headers } from "next/headers";
const myIdeaPage = async () => {
  const { token } = await auth.api.getToken({ headers: await headers() });
  const session = await auth.api.getSession({ headers: await headers() });
  const id = session?.session?.userId;
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/userideas/${id}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const userSharedIdeas = await req.json();

  return (
    <div className="bg-[#0F172A] min-h-screen  relative overflow-hidden  ">
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />
      <h1 className="text-3xl font-bold text-center text-white py-6">
        Your Shared Ideas
      </h1>
      <p className="text-center font-semibold">
        Total shared ideas:{userSharedIdeas.length || 0}
      </p>
      {userSharedIdeas.length > 0 ? (
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
                      <Link
                        href={`/ideas/${data._id}`}
                        className="btn btn-primary"
                      >
                        View
                      </Link>
                      <EditIdea post={data} />
                      <DeleteIdea id={data._id} />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="">
          <h1 className="text-center text-5xl py-10">
            You have not created any post yet.
          </h1>
        </div>
      )}
    </div>
  );
};

export default myIdeaPage;
