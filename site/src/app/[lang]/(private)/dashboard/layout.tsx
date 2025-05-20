import Header from "@/ui/header";
import { SidenavDesktop, SidenavMobile } from "@/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 text-white max-h-screen">
      <Header />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden pt-16">
        
        {/* Sidebar Desktop */}
        <div className="hidden md:block flex-none w-64 sticky">
          <SidenavDesktop />
        </div>

        {/* Conteúdo principal */}
        <div className="flex-col flex-grow justify-center md:overflow-y-auto pt-8 px-6">
          {children}
        </div>

        {/* Sidebar Mobile */}
        <div className="md:hidden flex h-screen flex-col md:flex-row md:overflow-hidden pt-16 pb-16">
          <SidenavMobile />
        </div>
      </div>
    </div>
  );
}
