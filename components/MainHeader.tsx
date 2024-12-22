"use client";
import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronUp, Search } from "lucide-react";
import { Input } from "./ui/input";
import CustomImage from "./CustomImage";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "./ui/breadcrumb";

type Props = {};

export default function MainHeader({}: Props) {
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <header className="flex justify-between flex-row w-full py-4 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <ChevronLeft className="size-4" />
            <BreadcrumbItem>
              <BreadcrumbPage>Back</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="hidden md:flex gap-14 px-4 flex-row items-center ">
        <div className="flex flex-row items-center gap-3 px-3 py-1 border border-[#E4E7EC] rounded-lg">
          <Search className="size-6 text-[#667185]" />
          <Input
            placeholder="Search here..."
            className="w-96 focus-visible:ring-transparent p-0 outline-none border-none"
          />
        </div>
        <div className="flex flex-row items-center gap-5">
          <CustomImage alt="" src="/Container.svg" className="size-7" />
          <CustomImage alt="" src="/message.svg" className="size-7" />
          <div
            className="flex cursor-pointer items-center flex-row gap-1 p-0"
            onClick={handleButtonClick}
          >
            <Avatar className=" size-7">
              <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown
              className={`transition-transform size-5 duration-200 ${
                isRotated ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
