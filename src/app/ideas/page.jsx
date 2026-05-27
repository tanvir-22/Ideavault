"use client";
import { Button, Dropdown } from "@heroui/react";
import { Label, SearchField } from "@heroui/react";
import { GoHeartFill } from "react-icons/go";
import { LiaCommentSolid } from "react-icons/lia";
import Link from "next/link";
import { useEffect, useState } from "react";
const IdeaPage = () => {

  const [postData, setPostData] = useState([]);
  useEffect(() => {
    async function loadData() {
      const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      const res = await req.json();
      setPostData(res);
    }
    loadData();
  }, []);
  console.log(postData);
  return (
    <div className="bg-[#0F172A] relative overflow-hidden min-h-screen">
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center ">Explore Ideas</h1>
        <p className="text-center text-gray-300">
          Discover innovative startup ideas, share feedback, and collaborate
          with creators.
        </p>
      </div>
      <div className="w-90 mx-auto  flex gap-3  items-center justify-between">
        <SearchField name="search">
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input className="w-[280px]" placeholder="Search..." />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        <Dropdown>
          <Button aria-label="Menu" className="btn btn-primary">
            Category
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
              <Dropdown.Item id="new-file" textValue="New file">
                <Label>AI</Label>
              </Dropdown.Item>
              <Dropdown.Item id="copy-link" textValue="Copy link">
                <Label>HealthTech</Label>
              </Dropdown.Item>
              <Dropdown.Item id="edit-file" textValue="Edit file">
                <Label>EdTech</Label>
              </Dropdown.Item>
              <Dropdown.Item id="" textValue="Delete file">
                <Label>FinTech</Label>
              </Dropdown.Item>
              <Dropdown.Item id="delete-file" textValue="Delete file">
                <Label>E-commerce</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
        <Dropdown>
          <Button aria-label="Menu" className="btn btn-primary">
            Sort
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
              <Dropdown.Item id="new-file" textValue="New file">
                <Label>Latest</Label>
              </Dropdown.Item>
              <Dropdown.Item id="copy-link" textValue="Copy link">
                <Label>Popular</Label>
              </Dropdown.Item>
              <Dropdown.Item id="edit-file" textValue="Edit file">
                <Label>Most Commented</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>

      <div className="w-10/12 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {
          postData.map((data)=>{
            return (
              <>
                <div
                  key={data._id}
                  className="card bg-white/10 backdrop-blur-lg  w-92 shadow-lg"
                >
                  <figure className="h-52 ">
                    <img
                      className="w-full h-full object-cover rounded-xs"
                      src={data.imageURL}
                      alt="Shoes"
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
                    <div className="card-actions justify-end">
                      <Link className="btn btn-primary" href={`/ideas/${data?._id}`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default IdeaPage;
