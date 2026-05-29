"use client";
import Link from "next/link";
import { authClient } from "../lib/auth-client";

const Navbar = () => {
  const { data: session, isPending, error } = authClient.useSession();

  return (
    <div className="bg-[#0F172A] ">
      <div className="navbar shadow-sm  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown relative">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/ideas">Ideas</Link>
              </li>
              <li>
                <Link href="/addidea">Add Idea</Link>
              </li>
              <li>
                <Link href="/myidea">My Ideas</Link>
              </li>
              <li>
                <Link href="/myinteractions">My Interactions</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">IdeaVault </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ideas">Ideas</Link>
            </li>
            <li>
              <Link href="/addidea">Add Idea</Link>
            </li>
            <li>
              <Link href="/myidea">My Ideas</Link>
            </li>
            <li>
              <Link href="/myinteractions">My Interactions</Link>
            </li>
          </ul>
        </div>
        {session?.user ? (
          <div className="navbar-end ">
            <p className="mr-2 font-semibold text-[#7357F5] hidden md:block">
              Welcome {session?.user?.name}!
            </p>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={session?.user?.image}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={`/myprofile`} className="justify-between">
                    Update Profile
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li>
                  <button
                    onClick={async () => {
                      await authClient.signOut();
                    }}
                    className="btn bg-red-600"
                  >
                    {" "}
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end flex gap-3">
            <button className="btn bg-[#1e293b]">
              <Link href="/login">Login</Link>
            </button>
            <button className="btn bg-[#7357f5]">
              <Link href="/signup">Sign Up</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
