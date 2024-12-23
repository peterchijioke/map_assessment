import CustomImage from "@/components/CustomImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React, { Fragment } from "react";
import { ReviewTable } from "./ReviewTable";

export default function ReviewItems() {
  return (
    <Card className="shadow-none hidden md:block my-8">
      <CardContent className=" py-5 space-y-8">
        <div className=" flex flex-row items-center justify-between">
          <span className="truncate text-xl font-semibold text-black">
            Item(s)
          </span>
        </div>
        <ReviewTable />
      </CardContent>
    </Card>
  );
}
