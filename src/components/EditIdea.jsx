"use client";
import { Sparkles } from "@gravity-ui/icons";
import { Modal } from "@heroui/react";
import React, { useState } from "react";
import { ListBox, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Pencil } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
const EditIdea = ({ post }) => {
  const [category, setCategory] = useState(post.category);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());
    updatedData.category = category;
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/update/${post._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      },
    );
    const res = await req.json();
    if (res.modifiedCount > 0 || res.matchedCount > 0) {
      setIsOpen(false);
      alert("Idea updated successfully!");
      router.push(`${process.env.NEXT_PUBLIC_CLIENT_URI}/ideas/${post._id}`);
    } else {
      alert("Failed to update idea. Please try again.");
    }
  };
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <Button className={`btn btn-primary `} onClick={() => setIsOpen(true)}>
        Edit
      </Button>
      <Modal.Backdrop
        className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="blur"
      >
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-[#0f172a] ">
            <Modal.Header className="items-center text-center">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Pencil className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-white/70">Edit Idea</Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmit} className=" flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Title */}
                  <TextField
                    isRequired
                    name="title"
                    defaultValue={post.title}
                    validate={(v) =>
                      v.length < 10 ? "At least 10 characters" : null
                    }
                  >
                    <Label className="text-white/70">Idea Title</Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="My Awesome Startup Idea"
                      variant="secondary"
                    />
                    <FieldError />
                  </TextField>

                  {/* Short Description */}
                  <TextField
                    isRequired
                    name="shortDescription"
                    defaultValue={post.shortDescription}
                  >
                    <Label className="text-white/70">Short Description</Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="A brief overview"
                      variant="secondary"
                    />
                    <FieldError />
                  </TextField>

                  {/* Tags */}
                  <TextField
                    isRequired
                    name="tags"
                    defaultValue={post.tags?.join(", ")}
                  >
                    <Label className="text-white/70">Tags</Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="AI, HealthTech"
                      variant="secondary"
                    />
                    <Description className="text-xs">
                      Comma-separated
                    </Description>
                    <FieldError />
                  </TextField>

                  {/* Image URL */}
                  <TextField
                    isRequired
                    name="imageURL"
                    defaultValue={post.imageURL}
                  >
                    <Label className="text-white/70">Image URL</Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="https://example.com/image.jpg"
                      variant="secondary"
                    />
                    <FieldError />
                  </TextField>

                  {/* Budget */}
                  <TextField
                    isRequired
                    name="estimatedBudget"
                    type="number"
                    defaultValue={post.estimatedBudget}
                  >
                    <Label className="text-white/70">Estimated Budget</Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="Budget in USD"
                      variant="secondary"
                    />
                    <FieldError />
                  </TextField>

                  {/* Target Audience */}
                  <TextField
                    isRequired
                    name="targetAudience"
                    defaultValue={post.targetAudience}
                  >
                    <Label className="text-white/70">Target Audience</Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="Who is this for?"
                      variant="secondary"
                    />
                    <FieldError />
                  </TextField>

                  {/* Category */}
                  <Select
                    isRequired
                    className="w-full "
                    selectedKey={category}
                    onSelectionChange={(key) => setCategory(key)}
                  >
                    <Label className="text-white/70 ">Category</Label>
                    <Select.Trigger className="w-full bg-white/10 text-white placeholder:text-white/50 border-white/20">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover className="bg-[#0f172a]">
                      <ListBox>
                        <ListBox.Item
                          className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                          id="AI"
                          textValue="AI"
                        >
                          AI <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                          id="HealthTech"
                          textValue="HealthTech"
                        >
                          HealthTech <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                          id="EdTech"
                          textValue="EdTech"
                        >
                          EdTech <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                          id="FinTech"
                          textValue="FinTech"
                        >
                          FinTech <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                          id="E-commerce"
                          textValue="E-commerce"
                        >
                          E-commerce <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  {/* Detailed Description */}
                  <TextField
                    isRequired
                    name="detailedDescription"
                    className="col-span-2"
                    defaultValue={post.detailedDescription}
                  >
                    <Label className="text-white/70">
                      Detailed Description
                    </Label>
                    <TextArea
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="Tell us about your idea..."
                      variant="secondary"
                    />
                    <FieldError />
                  </TextField>

                  {/* Problem Statement */}
                  <TextField
                    isRequired
                    name="problemStatement"
                    className="col-span-2"
                    defaultValue={post.problemStatement}
                  >
                    <Label className="text-white/70">Problem Statement</Label>
                    <TextArea
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="What problem does your idea solve?"
                      variant="secondary"
                    />
                    <FieldError />
                  </TextField>

                  {/* Proposed Solution */}
                  <TextField
                    isRequired
                    name="proposedSolution"
                    className="col-span-2"
                    defaultValue={post.proposedSolution}
                  >
                    <Label className="text-white/70">Proposed Solution</Label>
                    <TextArea
                      className="bg-white/10 text-white placeholder:text-white/50 border-white/20"
                      placeholder="How does your idea solve the problem?"
                      variant="secondary"
                    />
                    <FieldError />
                  </TextField>
                </div>

                {/* Submit inside form */}
                <Modal.Footer className="flex-col-reverse px-0">
                  <Button type="submit" className="w-full btn btn-primary">
                    Edit
                  </Button>
                  <Button className="w-full btn bg-white/10" slot="close">
                    Cancel
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>

            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditIdea;
