"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const ToastHandlerEditPage = () => {
  const searchParams = useSearchParams();
  const hasShown = useRef(false);

  useEffect(() => {
    if (searchParams.get("updated") === "true" && !hasShown.current) {
      hasShown.current = true;
      toast.success("Idea updated successfully!");
    }
  }, []);

  return <Toaster position="top-center" />;
};

export default ToastHandlerEditPage;
