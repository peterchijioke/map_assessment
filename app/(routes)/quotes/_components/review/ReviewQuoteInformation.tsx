import CustomImage from "@/components/CustomImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { Fragment } from "react";

export default function ReviewQuoteInformation() {
  return (
    <Card className="shadow-none my-8">
      <CardContent className=" py-5 space-y-8">
        <div className=" flex flex-row flex-wrap items-center justify-between">
          <span className="truncate text-xl font-semibold text-black">
            Request Information
          </span>

          <Button variant={"outline"} className=" border-none" size={"icon"}>
            <CustomImage src={"/edit.svg"} alt="" className="" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 grid gap-5 grid-cols-1 md:grid-cols-2">
            <Fragment>
              <span className="text-[#555E68] text-sm">Title</span>
              <span className="text-[#344054] text-sm">
                Request for Equipments
              </span>
            </Fragment>
            <Fragment>
              <span className="text-[#555E68] text-sm">RFQ No</span>
              <span className="text-[#344054] text-sm">RQ #01234</span>
            </Fragment>
            <Fragment>
              <span className="text-[#555E68] text-sm">Requestor</span>
              <div className="flex items-center gap-2">
                <Avatar className="size-7 bg-[#FFECE5]">
                  <AvatarFallback className="bg-[#FFECE5]">JD</AvatarFallback>
                </Avatar>
                <span className="text-[#344054] font-semibold text-sm">
                  Jane Doe{" "}
                  <span className="text-[#98A2B3] font-normal">
                    {" • "} {"Head Nurse, Pediatrics"}
                  </span>
                </span>
              </div>
            </Fragment>
            <Fragment>
              <span className="text-[#555E68] text-sm">Status</span>
              <span className="text-[#F56630] w-fit rounded-3xl bg-[#FFECE5] px-3 py-1  text-sm">
                Awaiting
              </span>
            </Fragment>
            <Fragment>
              <span className="text-[#555E68] text-sm">Department</span>
              <span className="text-[#344054]  text-sm">Maternity</span>
            </Fragment>
          </div>

          {/* <div className="md:col-span-1">
            <Card className="shadow-none h-fit">
              <div className="p-4 space-y-3">
                <div className=" flex flex-row items-center gap-4">
                  <CustomImage className="size-5" src={"/icon.svg"} alt="" />
                  <span className="text-[#667185] text-sm">Client</span>
                </div>

                <div className=" flex items-center space-x-4">
                  <Avatar className="size-7 bg-[#FFECE5]">
                    <AvatarFallback className="bg-[#FFECE5]">W</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Westend Hospital
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Clear street
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
