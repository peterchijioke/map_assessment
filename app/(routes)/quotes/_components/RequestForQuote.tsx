import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import RequestForQuoteForm from "./RequestForQuoteForm";

export default function RequestForQuote() {
  return (
    <Card className="shadow-none hidden md:block ">
      <CardContent className=" w-full py-8">
        <div className=" grid gap-2">
          <span className="truncate text-xl font-semibold text-black">
            Request for Quote
          </span>
          <span className="truncate text-sm text-[#667185]">
            Fill out these details to send the RFQ
          </span>
        </div>
        <RequestForQuoteForm />
      </CardContent>
    </Card>
  );
}
