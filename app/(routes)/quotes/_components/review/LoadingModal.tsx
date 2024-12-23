/* eslint-disable @typescript-eslint/no-unused-expressions */

"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
export function LoadingModal({ ...props }: AlertDialogProps) {
  useEffect(() => {
    if (!props.open) {
      return;
    }
    const timeout = setTimeout(() => {
      toast.success("RFQ ID sent successfully!", {
        position: "top-right",
      });
      props.onOpenChange && props.onOpenChange(!props.open);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [props]);
  return (
    <AlertDialog {...props}>
      <AlertDialogContent>
        <AlertDialogTitle></AlertDialogTitle>
        <div className=" flex flex-col items-center justify-center py-9 px-14 gap-5">
          <Loader className=" size-8 text-black animate-spin" />
          <span className=" text-sm text-center">Sending Quote...</span>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
