import React from "react";
import DashboardTopSection from "./DashboardTopSection";
import DashboardItems from "./DashboardItems";
import DashboardQuoteInformation from "./DashboardQuoteInformation";
import TermsAttachments from "./TermsAttachments";

export default function DashboardLayout() {
  return (
    <div className="flex flex-1 flex-col gap-8 container mx-auto p-4">
      <DashboardTopSection />
      <DashboardQuoteInformation />
      <DashboardItems />
      <TermsAttachments />
    </div>
  );
}
