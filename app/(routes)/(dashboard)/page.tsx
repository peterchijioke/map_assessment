import MainHeader from "@/components/MainHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardTopSection from "../_components/DashboardTopSection";
import DashboardQuoteInformation from "../_components/DashboardQuoteInformation";
import DashboardItems from "../_components/DashboardItems";
import TermsAttachments from "../_components/TermsAttachments";

export default function Page() {
  return (
    <>
      <MainHeader />
      <ScrollArea className=" h-screen">
        <div className="flex flex-col gap-8 container p-4">
          <DashboardTopSection />
          <DashboardQuoteInformation />
          <DashboardItems />
          <TermsAttachments />
        </div>
      </ScrollArea>
    </>
  );
}
