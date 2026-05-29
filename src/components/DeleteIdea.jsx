"use client";

import { AlertDialog, Button } from "@heroui/react";
import { error } from "better-auth/api";
import { Erica_One } from "next/font/google";
import { useRouter } from "next/navigation";
const DeleteIdea = ({ id }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/deletepost/${id}`,
      {
        method: "DELETE",
      },
    );
    const res = await req.json();
    console.log(res);
    if (res.deletedCount > 0) {
      router.refresh();
    } else {
      console.error(error);
    }
  };
  return (
    <>
      <AlertDialog>
        <Button className={`btn bg-red-600`}>Delete </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete idea permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>My Awesome idea</strong>{" "}
                  and all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" className={`btn`}>
                  Cancel
                </Button>
                <Button
                  className={`btn bg-red-600`}
                  onClick={handleDelete}
                  slot="close"
                >
                  Delete Idea
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </>
  );
};

export default DeleteIdea;
