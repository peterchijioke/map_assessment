import MainHeader from "@/components/MainHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardTopSection from "../_components/DashboardTopSection";
import DashboardQuoteInformation from "../_components/DashboardQuoteInformation";
import DashboardItems from "../_components/DashboardItems";
import TermsAttachments from "../_components/TermsAttachments";
import DashboardLayout from "../_components/DashboardLayout";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col ">
      <MainHeader />
      <ScrollArea className="grid w-full h-full overflow-auto pb-9 bg-white mt-1">
        <DashboardLayout />
      </ScrollArea>
    </div>
  );
}
