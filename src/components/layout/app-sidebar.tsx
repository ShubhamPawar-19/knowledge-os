import { SidebarClient } from "./sidebar-client";


import type {
DashboardUser,
DashboardWorkspace
} from "@/src/types/dashboard";


interface Props {
user:DashboardUser;
workspace:DashboardWorkspace;
workspaces:{
id:string;
name:string;
slug:string;
}[];
}



export function AppSidebar(props:Props){

return (
<SidebarClient
{...props}
/>
)

}