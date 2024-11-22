"use client";

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  LayoutDashboard,
  Sprout,
  ChartNoAxesColumn,
  Bot,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { Style_Script as fontSignature } from "next/font/google";
import { cn } from "@/lib/utils";

const signature = fontSignature({
  variable: "--font-signature",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "AI Tools",
    url: "#",
    icon: Bot,
  },
  {
    title: "Crop Rotation",
    url: "/crop-rotation-algorithm",
    icon: Sprout,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Pivot Control",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader
        className={`bg-blue-500 rounded-t-lg bg-opacity-10 ${
          open || openMobile ? "block" : "hidden"
        }`}
      >
        <div
          className={cn(
            "flex justify-center text-blue-500 items-center",
            signature.variable,
            signature.className
          )}
        >
          <h1
            className={`text-3xl text-center font-bold ${
              open || openMobile ? "block" : "hidden"
            }`}
          >
            InnoPivot.
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-blue-500 rounded-b-lg bg-opacity-10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
