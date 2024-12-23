import MainHeader from "@/components/MainHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
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
