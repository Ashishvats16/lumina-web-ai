import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import DashboardNav from '@/components/dashboard/DashboardNav';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getSession();

  // if (!session) {
  //   redirect('/signin');
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}