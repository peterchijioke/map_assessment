"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useMemo } from "react";
import { SectionEnum } from "./RequestQuoteSections";

export default function DashboardQuoteInfoSection() {
  const searchParam = useSearchParams();
  const current = searchParam.get("current") as SectionEnum | SectionEnum.Form1;
  const currentSection = useMemo(() => current, [current]);

  return (
    <Card className="shadow-none hidden md:block">
      <CardContent className=" py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Request Information",
            description: "Provide details about the RFQ",
          },
          {
            title: "Terms and Attachments",
            description: "Payment and delivery terms",
          },
          {
            title: "Review",
            description: "Confirm all information provided",
          },
        ].map((_, index) => {
          return (
            <Fragment key={index}>
              <div className=" flex-row gap-5 items-start flex">
                <div
                  className={cn(
                    "p-4 rounded-full flex size-5 items-center justify-center",

                    index === 0 && currentSection === SectionEnum.Form1
                      ? "bg-[#175CFF] text-white"
                      : index === 0 && currentSection !== SectionEnum.Form1
                      ? "bg-[#E7F6EC] text-[#0F973D]"
                      : index === 1 && currentSection === SectionEnum.Form2
                      ? "bg-[#175CFF] text-white"
                      : index === 1 && currentSection === SectionEnum.Form3
                      ? "bg-[#E7F6EC] text-[#0F973D]"
                      : index === 2 && currentSection === SectionEnum.Form3
                      ? "bg-[#175CFF] text-white"
                      : "bg-[#ffffff]  border border-[#98A2B3] text-[#98A2B3]"
                  )}
                >
                  {index + 1}
                </div>
                <div className="grid">
                  <span
                    className={cn(
                      "text-[#101928] text-sm ",
                      index === 0 && currentSection === SectionEnum.Form1
                        ? "font-semibold"
                        : index === 0 && currentSection !== SectionEnum.Form1
                        ? "font-semibold"
                        : index === 1 && currentSection === SectionEnum.Form2
                        ? "font-semibold"
                        : index === 1 && currentSection === SectionEnum.Form3
                        ? "font-semibold"
                        : index === 2 && currentSection === SectionEnum.Form3
                        ? "font-semibold"
                        : "font-medium"
                    )}
                  >
                    {_.title}
                  </span>
                  <span className="text-[#475367]  text-sm">
                    {_.description}
                  </span>
                </div>
              </div>
            </Fragment>
          );
        })}
      </CardContent>
    </Card>
  );
}
