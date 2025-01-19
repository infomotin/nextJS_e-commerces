
import ThemeToggle from "@/components/shared/theme-toggle";

import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex gap-x-5 justify-end">
      
      <UserButton/>
      <ThemeToggle/>
      </div>
      <h1 className="text-3xl  text-blue-500 font-barlow">Home Page </h1>
     
    </div>
  );
}
