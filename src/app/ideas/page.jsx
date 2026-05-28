"use client";
import { Button, Dropdown } from "@heroui/react";
import { Label, SearchField } from "@heroui/react";
import { GoHeartFill } from "react-icons/go";
import { LiaCommentSolid } from "react-icons/lia";
import Link from "next/link";
import {Spinner} from "@heroui/react";
import { useEffect, useState } from "react";
const IdeaPage = () => {
  const [postData, setPostData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectsort, setSelectsort] = useState(null);
  const [loading,setLoading] = useState(true)
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    async function loadData() {
      const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      const res = await req.json();
      setPostData(res);
      setLoading(false)
    }
    loadData();
  }, []);
  const filteredPosts = postData
    .filter((item) => {
      const query = search.toLowerCase();
      const resultSearch =
        item?.title?.toLowerCase().includes(query) ||
        item?.category.toLowerCase().includes(query);
      const resultCategory = selectedCategory
        ? item.category == selectedCategory
        : true;
      return resultCategory && resultSearch;
    })
    .sort((a, b) => {
      if (selectsort == "Latest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (selectsort == "Popular") {
        return b.likes.length - a.likes.length;
      }
      if (selectsort == "Most Commented") {
        return b.comments.length - a.comments.length;
      }
    });
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
            <SearchField.Input
              value={search}
              className="w-[280px]"
              placeholder="Search by title or category..."
              onChange={handleSearch}
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        <Dropdown>
          <Button aria-label="Menu" className="btn btn-primary">
            {selectedCategory || "Category"}
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu
              onAction={(key) =>
                setSelectedCategory(key === selectedCategory ? null : key)
              }
            >
              <Dropdown.Item id="AI" textValue="AI">
                <Label>AI</Label>
              </Dropdown.Item>
              <Dropdown.Item id="HealthTech" textValue="HealthTech">
                <Label>HealthTech</Label>
              </Dropdown.Item>
              <Dropdown.Item id="EdTech" textValue="EdTech">
                <Label>EdTech</Label>
              </Dropdown.Item>
              <Dropdown.Item id="FinTech" textValue="FinTech">
                <Label>FinTech</Label>
              </Dropdown.Item>
              <Dropdown.Item id="E-commerce" textValue="E-commerce">
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
            <Dropdown.Menu
              onAction={(key) => setSelectsort(key === selectsort ? null : key)}
            >
              <Dropdown.Item id="Latest" textValue="Latest">
                <Label>Latest</Label>
              </Dropdown.Item>
              <Dropdown.Item id="Popular" textValue="Popular">
                <Label>Popular</Label>
              </Dropdown.Item>
              <Dropdown.Item id="Most Commented" textValue="Most Commented">
                <Label>Most Commented</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>

      {loading ? (
        <div className="flex items-center justify-center gap-4 h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="w-10/12 pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {filteredPosts.map((data) => {
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
                      <Link
                        className="btn btn-primary"
                        href={`/ideas/${data?._id}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default IdeaPage;
