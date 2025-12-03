import DashboardNav from "@/components/dashboard/DashboardNav";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { authOptions } from "@/lib/auth.client";
import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="flex pt-16 relative">
        <DashboardSidebar />
        <main className=" w-[-webkit-fill-available]  flex-1 left-56 absolute p-2 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}