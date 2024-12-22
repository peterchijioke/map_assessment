import MainHeader from "@/components/MainHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardTopSection from "../_components/DashboardTopSection";
import DashboardQuoteInformation from "../_components/DashboardQuoteInformation";
import DashboardItems from "../_components/DashboardItems";
import TermsAttachments from "../_components/TermsAttachments";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col ">
      <MainHeader />
      <ScrollArea className="grid w-full h-full overflow-auto pb-9 bg-white mt-1">
        <div className="flex flex-1 flex-col gap-8 container mx-auto p-4">
          <DashboardTopSection />
          <DashboardQuoteInformation />
          <DashboardItems />
          <TermsAttachments />
        </div>
      </ScrollArea>
    </div>
  );
}
