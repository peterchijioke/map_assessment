import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import CustomImage from "./CustomImage";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

interface SidebarItem {
  title: string;
  url: string;
  icon: string;
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
  },
  {
    title: "Communication",
    url: "#",
    icon: "/chats.svg",
  },
  {
    title: "Calendar",
    url: "#",
    icon: "/calendar-alt.svg",
  },
  {
    title: "Contracts",
    url: "#",
    icon: "/sign-doc.svg",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className=" py-8">
          <CustomImage alt="" src={"/logo.svg"} className="" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (item.title === "Procurement") {
                  return (
                    <Collapsible defaultOpen className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            <SidebarMenuSubItem />
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <CustomImage
                          alt=""
                          src={item.icon}
                          className=" size-5"
                        />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className=" h-16 bg-slate-500 w-full"></div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
