"use client";

import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import CustomImage from "@/components/CustomImage";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function TermsAttachments() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-5"
    >
      <CollapsibleTrigger asChild>
        <Card className="shadow-none hidden md:block cursor-pointer">
          <CardContent className=" py-5 space-y-8">
            <div className=" flex flex-row items-center justify-between">
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
              <ChevronDown className=" text-[#98A2B3] size-5" />
            </div>
          </CardContent>
        </Card>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Content here
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
