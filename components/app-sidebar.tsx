import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import CustomImage from "./CustomImage";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronRight, ChevronUp, LogOut } from "lucide-react";

interface SidebarItem {
  title: string;
  url: string;
  icon: string;
  subItems?: Array<SidebarItem>;
  value?: number;
}
const items: Array<SidebarItem> = [
  {
    title: "Dashboard",
    url: "#",
    icon: "/grid-2.svg",
  },
  {
    title: "Inventory",
    url: "#",
    icon: "/box.svg",
  },
  {
    title: "Procurement",
    url: "#",
    icon: "/cart.svg",
    subItems: [
      {
        title: "Quotes",
        url: "#",
        icon: "/box.svg",
      },
      {
        title: "Orders",
        url: "#",
        icon: "/box.svg",
      },
    ],
  },
  {
    title: "Finance",
    url: "#",
    icon: "/money-1.svg",
    subItems: [
      {
        title: "Money",
        url: "#",
        icon: "/box.svg",
      },
      {
        title: "More",
        url: "#",
        icon: "/box.svg",
      },
    ],
  },
  {
    title: "Communication",
    url: "#",
    icon: "/chats.svg",
    value: 10,
  },
  {
    title: "Calendar",
    value: 10,
    url: "#",
    icon: "/calendar-alt.svg",
  },
  {
    title: "Contracts",
    url: "#",
    icon: "/sign-doc.svg",
  },
  {
    title: "Support",
    url: "#",
    icon: "/question-circle.svg",
  },
  {
    title: "Settings",
    url: "#",
    icon: "/settings.svg",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarHeader>
        <div className=" py-6">
          <CustomImage alt="" src={"/logo.svg"} className="" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item?.subItems) {
                  return (
                    <Collapsible
                      key={item.title}
                      defaultOpen
                      className="group/collapsible"
                    >
                      <SidebarMenuItem key={item.title}>
                        <CollapsibleTrigger
                          className=" hover:bg-[#E3EAFB] hover:text-[#344054]"
                          asChild
                        >
                          <SidebarMenuButton tooltip={item.title}>
                            {item.icon && (
                              <CustomImage
                                alt=""
                                src={item.icon}
                                className=" size-5"
                              />
                            )}
                            <span>{item.title}</span>
                            <ChevronUp className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        {item.subItems.map((item) => (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                <SidebarMenuSubButton
                                  className=" hover:bg-[#E3EAFB] hover:text-[#344054]"
                                  asChild
                                >
                                  <Link href={item.url}>
                                    <span>{item.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        ))}
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                if (item.title !== "Settings" && item.title !== "Support") {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        className=" hover:bg-[#E3EAFB] hover:text-[#344054]"
                        asChild
                      >
                        <Link href={item.url}>
                          <CustomImage
                            alt=""
                            src={item.icon}
                            className=" size-5"
                          />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                      {item?.value && (
                        <SidebarMenuBadge className=" bg-blue-600 rounded-3xl px-2 text-white">
                          {item.value}
                        </SidebarMenuBadge>
                      )}
                    </SidebarMenuItem>
                  );
                }
                return null;
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {items.map((item) => {
            if (item.title === "Settings" || item.title === "Support") {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className=" hover:bg-[#E3EAFB] hover:text-[#344054]"
                    asChild
                  >
                    <Link href={item.url}>
                      <CustomImage alt="" src={item.icon} className=" size-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }
          })}
          <SidebarMenuItem>
            <div className=" py-4 w-full flex-row flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="profile"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Mark Benson</span>
                  <span className="truncate text-xs">
                    markbenson@coremed.com
                  </span>
                </div>
              </div>
              <LogOut />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
