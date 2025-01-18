
"use client"
import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "../ui/button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger } from "../ui/dropdown-menu";
// import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";


export default function ThemeToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
                <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>  
        <DropdownMenuContent align="end" sideOffset={5}>
            <DropdownMenuItem>Light</DropdownMenuItem>
            <DropdownMenuItem>Dark</DropdownMenuItem>
            <DropdownMenuItem>System</DropdownMenuItem>
        </DropdownMenuContent> 
    </DropdownMenu>
  )
}
