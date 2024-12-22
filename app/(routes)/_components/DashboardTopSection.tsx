import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";

export default function DashboardTopSection() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 ">
      <div className="grid w-full text-smt">
        <span className="truncate text-xl font-semibold text-black">
          Quote details
        </span>
        <span className="truncate text-sm text-[#667185]">
          Created on Wed, 12th June 2022, 08:00am
        </span>
      </div>
      <div className=" flex flex-row md:w-fit w-full items-center gap-3">
        <Button className=" w-full bg-[#175CFF] hover:bg-[#175CFF] text-white hover:text-white">
          Respond
        </Button>
        <Button className=" w-full bg-[#D42620] hover:bg-[#D42620] text-white hover:text-white">
          <X className=" size-3" />
          Reject
        </Button>
      </div>
    </div>
  );
}
