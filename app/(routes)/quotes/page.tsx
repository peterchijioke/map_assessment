import MainHeader from "@/components/MainHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardTopSection from "../_components/DashboardTopSection";
import DashboardQuoteTopSection from "./_components/DashboardQuoteTopSection";
import DashboardQuoteInfoSection from "./_components/DashboardQuoteInfoSection";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col ">
      <MainHeader />
      <ScrollArea className="grid w-full h-full overflow-auto pb-9 bg-white mt-1">
        <div className="flex flex-1 flex-col gap-8 container mx-auto p-4">
          <DashboardQuoteTopSection />
          <DashboardQuoteInfoSection />
        </div>
      </ScrollArea>
    </div>
  );
}
