import Header from "@/components/dashboardcomponets/header/header";
import Sidebar from "@/components/dashboardcomponets/sidebar/sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default await async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //block non admin users to access this page
  //Get current User from awit currentUser() clerk module
  const user = await currentUser();
  //if user is not admin, redirect to home
  if (!user?.privateMetadata?.role || user?.privateMetadata.role !== "ADMIN")
    redirect("/");
  return (
    <div className="flex h-full w-full flex-col">
      {/* sidebar container */}
      <Sidebar />
      <div className="h-full w-full bg-white ml-[300px]">
        {/* header container */}
        <Header />
        <div className="w-full mt-[75px] p-4">{children}</div>
      </div>
    </div>
  );
};
