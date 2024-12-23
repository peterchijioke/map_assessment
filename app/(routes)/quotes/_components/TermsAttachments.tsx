import CustomImage from "@/components/CustomImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import React, { Fragment } from "react";
import RequestForQuoteForm from "./RequestForQuoteForm";
import RequestForQuoteAttachmentForm from "./RequestForQuoteAttachmentForm";

export default function TermsAttachments() {
  return (
    <Card className="shadow-none md:block ">
      <CardContent className=" w-full py-8">
        <div className=" grid gap-2">
          <span className="truncate text-xl font-semibold text-black">
            Request for Quote
          </span>
          <span className="truncate text-sm text-[#667185]">
            Fill out these details to send the RFQ
          </span>
        </div>
        <RequestForQuoteAttachmentForm />
      </CardContent>
    </Card>
  );
}
