'use client'
import { LayoutGrid, Upload, Library, Search, Palette, Bell, Settings, CreditCard, LogOut, Zap } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = [
    { icon: <LayoutGrid className="w-5 h-5" />, label: 'Overview', href: '/dashboard' },
    { icon: <Upload className="w-5 h-5" />, label: 'Uploads & Jobs', href: '/dashboard/uploads' },
    { icon: <Library className="w-5 h-5" />, label: 'Content Library', href: '/dashboard/library' },
    { icon: <Search className="w-5 h-5" />, label: 'Semantic Search', href: '/dashboard/search' },
    { icon: <Palette className="w-5 h-5" />, label: 'Brand & Templates', href: '/dashboard/brand' },
    { icon: <Bell className="w-5 h-5" />, label: 'Notifications', href: '/dashboard/notifications' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', href: '/dashboard/settings' },
    { icon: <CreditCard className="w-5 h-5" />, label: 'Billing & Usage', href: '/dashboard/billing' },
  ];

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col h-screen  h-[93vh] min-h-fit  fixed left-0 top-16">
 

      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigation(item.href)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              pathname === item.href
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className={pathname === item.href ? 'text-blue-600' : 'text-gray-600'}>
              {item.icon}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-200 space-y-3">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="flex items-start gap-2 mb-3">
            <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm">Upgrade to Pro</h3>
              <p className="text-xs text-blue-100 mt-1">Unlock unlimited videos and advanced AI features</p>
            </div>
          </div>
          <button 
            onClick={() => router.push('/dashboard/billing')}
            className="w-full bg-white text-blue-600 hover:bg-blue-50 py-2 rounded-lg font-medium text-sm transition-colors mt-3"
          >
            Upgrade Now
          </button>
        </div>

        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}