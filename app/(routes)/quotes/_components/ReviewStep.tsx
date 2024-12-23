"use client";
import { Card, CardContent } from "@/components/ui/card";

import React, { Fragment, useState } from "react";
import ReviewQuoteInformation from "./review/ReviewQuoteInformation";
import ReviewItems from "./review/ReviewItems";
import ReviewTermsAttachments from "./review/ReviewTermsAttachments";
import { Button } from "@/components/ui/button";
import { SectionEnum } from "./RequestQuoteSections";
import { useRouter } from "next/navigation";
import { ConfirmationModal } from "./review/ConfirmationModal";
import { LoadingModal } from "./review/LoadingModal";

export default function ReviewStep() {
  const route = useRouter();
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Card className="shadow-none md:block border-none ">
        <CardContent className=" w-full p-0">
          <div className=" grid gap-2">
            <span className="truncate text-xl font-semibold text-black">
              Request for Quote
            </span>
            <span className="truncate text-sm text-[#667185]">
              Fill out these details to send the RFQ
            </span>
          </div>
          <ReviewQuoteInformation />
          <ReviewItems />
          <ReviewTermsAttachments />
          {/* ============ */}

          <div className="w-full flex flex-row items-center justify-start md:justify-end space-x-1 md:space-x-4 my-8">
            <Button
              onClick={() => route.push(`/quotes?current=${SectionEnum.Form2}`)}
              variant={"outline"}
              type="button"
            >
              Cancel
            </Button>
            <Button
              variant={"outline"}
              type="submit"
              className=" border border-[#175CFF] text-[#175CFF] hover:text-[#175CFF]"
            >
              Save as draft
            </Button>
            <ConfirmationModal
              onConfirm={() => {
                setConfirm(() => false);
                setLoading(() => true);
              }}
              open={confirm}
              onOpenChange={setConfirm}
            >
              <Button
                onClick={() => {
                  setConfirm((p) => !p);
                }}
                className=" bg-[#175CFF] text-white hover:text-white"
                variant={"outline"}
                type="button"
              >
                Submit
              </Button>
            </ConfirmationModal>
          </div>
        </CardContent>
      </Card>
      <LoadingModal open={loading} onOpenChange={setLoading} />
    </>
  );
}
