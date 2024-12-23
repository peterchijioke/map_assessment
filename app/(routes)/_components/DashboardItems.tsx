import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { CustomTable } from "./CustomTable";

export default function DashboardItems() {
  return (
    <Card className="shadow-none hidden md:block">
      <CardContent className=" py-5 space-y-8">
        <div className=" flex flex-row items-center justify-between">
          <span className="truncate text-xl font-semibold text-black">
            Item(s)
          </span>
        </div>
        <CustomTable />
      </CardContent>
    </Card>
  );
}
