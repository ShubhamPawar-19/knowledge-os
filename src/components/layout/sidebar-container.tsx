"use client";

import { useSidebar } from "./sidebar-provider";
import { cn } from "@/src/lib/utils";


export function SidebarContainer({
 children,
}:{
 children:React.ReactNode
}) {

const {collapsed}=useSidebar();


return (
<div
className={cn(
"h-full transition-all duration-200",
collapsed ? "w-20":"w-64"
)}
>
{children}
</div>
)

}