import CustomImage from "@/components/CustomImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React, { Fragment } from "react";
import { CustomTable } from "./CustomTable";

export default function TermsAttachments() {
  return (
    <Card className="shadow-none hidden md:block">
      <CardContent className=" py-5 space-y-8">
        <div className=" flex flex-row gap-2">
          <CustomImage src={"/sign.svg"} alt="" className=" size-6" />
          <div className="grid">
            <span className="truncate text-xl font-semibold text-black">
              Terms & Attachments
            </span>
            <span className="text-[#344054]  text-sm">
              Review payment and delivery terms
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
