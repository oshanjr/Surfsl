import Link from "next/link";
import { Waves, LayoutDashboard, Calendar, Users, Settings, MessageSquare, LogOut, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-[#F0F2F5]"> {/* macOS desktop gray */}
            {/* Sidebar - Finder Style */}
            <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-white/20 bg-white/60 backdrop-blur-xl md:flex shadow-xl">
                <div className="flex h-14 items-center px-6 border-b border-black/5">
                    {/* Traffic Lights */}
                    <div className="flex space-x-2 mr-4">
                        <div className="h-3 w-3 rounded-full bg-[#FF5F57] border border-[#E0443E]"></div>
                        <div className="h-3 w-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
                        <div className="h-3 w-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto p-3 space-y-1">
                    <div className="px-3 py-2 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                        Favorites
                    </div>
                    <Link href="/admin" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 text-foreground/80">
                        <LayoutDashboard className="h-4 w-4 text-primary" />
                        Overview
                    </Link>
                    <Link href="/admin/bookings" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 text-foreground/80">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        Bookings
                        <Badge variant="secondary" className="ml-auto bg-gray-200 text-gray-700 hover:bg-gray-300 h-5 px-1.5 shadow-none">3</Badge>
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 text-foreground/80">
                        <Users className="h-4 w-4 text-green-500" />
                        Users
                    </Link>
                    <Link href="/admin/messages" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 text-foreground/80">
                        <MessageSquare className="h-4 w-4 text-orange-500" />
                        Messages
                    </Link>

                    <div className="mt-6 px-3 py-2 text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                        System
                    </div>
                    <Link href="/admin/settings" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 text-foreground/80">
                        <Settings className="h-4 w-4 text-gray-500" />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-black/5 bg-white/40">
                    <div className="flex items-center gap-3 px-2 mb-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-md flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
                            AD
                        </div>
                        <div className="text-xs">
                            <p className="font-medium">Admin User</p>
                            <p className="text-muted-foreground">admin@surfsl.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 md:ml-64 flex flex-col h-screen">
                {/* Toolbar */}
                <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-white/20 bg-white/60 backdrop-blur-md px-6 shadow-sm">
                    <h1 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <Waves className="h-4 w-4" />
                        Surf Online Admin
                    </h1>

                    <div className="ml-auto flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search..."
                                className="h-9 w-64 rounded-md bg-white/50 border-0 ring-1 ring-black/5 focus-visible:ring-blue-500 pl-9 transition-all"
                            />
                        </div>
                        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:bg-black/5">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white" />
                        </Button>
                    </div>
                </header>

                {/* Content Scroll Area */}
                <main className="flex-1 overflow-auto p-6 md:p-8">
                    <div className="mx-auto max-w-7xl animate-in fade-in zoom-in-95 duration-500">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
