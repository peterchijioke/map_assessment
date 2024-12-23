"use client";
import React, { Fragment, useCallback } from "react";
import RequestForQuote from "./RequestForQuote";
import { useSearchParams } from "next/navigation";
import TermsAttachments from "./TermsAttachments";
import ReviewStep from "./ReviewStep";

export default function RequestQuoteSections() {
  const searchParam = useSearchParams();
  const currentSection: SectionEnum =
    (searchParam.get("current") as SectionEnum) ?? SectionEnum.Form1;

  const renderSection = useCallback(() => {
    switch (currentSection) {
      case SectionEnum.Form1:
        return <RequestForQuote />;
      case SectionEnum.Form2:
        return <TermsAttachments />;
      case SectionEnum.Form3:
        return <ReviewStep />;
    }
  }, [currentSection]);

  return <Fragment>{renderSection()}</Fragment>;
}

export enum SectionEnum {
  Form1 = "form1",
  Form2 = "form2",
  Form3 = "form3",
}
