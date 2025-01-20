import { currentUser } from "@clerk/nextjs/server";
import { FC } from "react";

interface SidebarProps {
  isAdmin?: boolean;
}

// import React from 'react'

// export default function Sidebar() {
//   return (
//     <div>sidebar</div>
//   )
// }

const Sidebar: FC<SidebarProps> = async ({ isAdmin }) => {
  const user = await currentUser();

  return (
    <div className="w-[300px] border-r h-screen p-4 flex flex-col fixed top-0 left-0 bottom-0">
       
    </div>
  );
};

export default Sidebar;
