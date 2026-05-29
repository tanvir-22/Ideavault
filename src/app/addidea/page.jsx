"use client";
import { FloppyDisk } from "@gravity-ui/icons";
import Lottie from "lottie-react";
import animationData from "../../../public/codework.json";
import { ListBox, Select } from "@heroui/react";
import { IoIosSend } from "react-icons/io";
import { authClient } from "../../lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const AddIdeaPage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const [category, setCategory] = useState("");
  const formHandler = async (e) => {
    e.preventDefault();
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;
    const formData = new FormData(e.target);
    const postData = Object.fromEntries(formData.entries());
    postData.category = category;
    postData.author = session?.session?.userId;
    postData.likes = [];
    postData.comments = [];
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createpost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
    const result = await req.json();
    if (result.insertedId) {
      alert("Successfully added your idea");
      router.push("/myidea");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <>
      <div className="bg-[#0F172A] min-h-screen relative overflow-hidden ">
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[100px]" />
        <div className="py-8 relative z-10">
          <h1 className="text-3xl font-bold text-center text-white relative z-10 mb-2">
            Share Your Startup Idea
          </h1>
          <p className="text-white/80 text-center mb-6 md:w-1/2 mx-auto ">
            Have an innovative startup concept in mind? Publish your idea to
            showcase your vision, receive valuable community feedback, connect
            with potential collaborators, and refine your concept into something
            impactful.
          </p>
        </div>
        <div className="flex  gap-6 md:w-11/12 mx-auto relative z-10">
          <div className="md:w-6/12 mx-auto relative  p-6 hidden md:block">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "50vw", height: "70vh" }}
            ></Lottie>
            <div>
              <h2 className="text-2xl text-center font-bold text-[#7357F5]">
                Bring Your Idea to Life
              </h2>
              <p >
                Share your startup concept with a community of innovators and
                creators. Explain your vision, inspire others, receive
                constructive feedback, and discover opportunities to improve and
                grow your idea together.
              </p>
            </div>
          </div>
          <div className="md:w-6/12 mx-auto relative z-10 p-6">
            <Form
              onSubmit={formHandler}
              className="flex w-full flex-col gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg"
            >
              <Fieldset className="w-full">
                <Fieldset.Legend className="text-white text-xl font-semibold">
                  Create New Idea
                </Fieldset.Legend>
                <Description className="text-white/60 text-sm">
                  Share your innovative startup idea with the community.
                </Description>

                <Fieldset.Group>
                  <div className="grid grid-cols-3 gap-4">
                    <TextField
                      isRequired
                      name="title"
                      validate={(value) =>
                        value.length < 10
                          ? "Title must be at least 10 characters"
                          : null
                      }
                    >
                      <Label className="text-white/80">Idea Title</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="My Awesome Startup Idea"
                        variant="secondary"
                      />
                      <FieldError />
                    </TextField>

                    <TextField isRequired name="shortDescription">
                      <Label className="text-white/80">Short Description</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="A brief overview of your idea"
                        variant="secondary"
                      />
                      <FieldError />
                    </TextField>

                    <TextField isRequired name="tags">
                      <Label className="text-white/80">Tags</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="e.g. AI, HealthTech"
                        variant="secondary"
                      />
                      <Description className="text-white/40 text-xs">
                        Comma-separated tags.
                      </Description>
                      <FieldError />
                    </TextField>

                    <TextField isRequired name="imageURL">
                      <Label className="text-white/80">Image URL</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="https://example.com/image.jpg"
                        variant="secondary"
                      />
                      <Description className="text-white/40 text-xs">
                        Visually represent your idea.
                      </Description>
                      <FieldError />
                    </TextField>

                    <TextField isRequired name="estimatedBudget" type="number">
                      <Label className="text-white/80">Estimated Budget</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="Enter estimated budget in USD"
                        variant="secondary"
                      />
                      <Description className="text-white/40 text-xs">
                        Budget in USD.
                      </Description>
                      <FieldError />
                    </TextField>

                    <TextField isRequired name="targetAudience">
                      <Label className="text-white/80">Target Audience</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="Describe your target audience"
                        variant="secondary"
                      />
                      <Description className="text-white/40 text-xs">
                        Who is this for?
                      </Description>
                      <FieldError />
                    </TextField>

                    {/* Select spans 1 col */}
                    <Select
                      isRequired
                      className="w-full"
                      placeholder="Select category"
                      onSelectionChange={(key) => {
                        setCategory(key);
                      }}
                    >
                      <Label className="text-white/80">Category</Label>
                      <Select.Trigger className="text-white/80 border-white/20 bg-white/10 w-full">
                        <Select.Value className="text-white/80" />
                        <Select.Indicator className="text-white/80" />
                      </Select.Trigger>
                      <Select.Popover className="bg-[#1E293B] border border-white/20">
                        <ListBox className="text-white/80">
                          <ListBox.Item
                            className="text-white/80 hover:bg-white/10"
                            id="ai"
                            textValue="AI"
                          >
                            AI <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item
                            className="text-white/80 hover:bg-white/10"
                            id="healthtech"
                            textValue="HealthTech"
                          >
                            HealthTech <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item
                            className="text-white/80 hover:bg-white/10"
                            id="edtech"
                            textValue="EdTech"
                          >
                            EdTech <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item
                            className="text-white/80 hover:bg-white/10"
                            id="fintech"
                            textValue="FinTech"
                          >
                            FinTech <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item
                            className="text-white/80 hover:bg-white/10"
                            id="ecommerce"
                            textValue="E-commerce"
                          >
                            E-commerce <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* Full width fields span both columns */}
                    <TextField
                      isRequired
                      name="detailedDescription"
                      className="col-span-2"
                      validate={(value) =>
                        value.length < 10
                          ? "Must be at least 10 characters"
                          : null
                      }
                    >
                      <Label className="text-white/80">
                        Detailed Description
                      </Label>
                      <TextArea
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="Tell us about your idea..."
                        variant="secondary"
                      />
                      <Description className="text-white/40 text-xs">
                        Minimum 10 characters.
                      </Description>
                      <FieldError />
                    </TextField>

                    <TextField
                      isRequired
                      name="problemStatement"
                      className="col-span-2"
                    >
                      <Label className="text-white/80">Problem Statement</Label>
                      <TextArea
                        className=" bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="What problem does your idea solve?"
                        variant="secondary"
                      />
                      <Description className="text-white/40 text-xs">
                        Clearly articulate the problem.
                      </Description>
                      <FieldError />
                    </TextField>

                    <TextField
                      isRequired
                      name="proposedSolution"
                      className="col-span-2"
                    >
                      <Label className="text-white/80">Proposed Solution</Label>
                      <TextArea
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="How does your idea solve the problem?"
                        variant="secondary"
                      />
                      <Description className="text-white/40 text-xs">
                        Describe your solution.
                      </Description>
                      <FieldError />
                    </TextField>
                  </div>
                </Fieldset.Group>

                <Fieldset.Actions>
                  <Button type="submit" className="w-full btn btn-primary">
                    <IoIosSend />
                    Post Idea
                  </Button>
                </Fieldset.Actions>
              </Fieldset>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddIdeaPage;
