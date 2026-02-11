import Link from "next/link";
import { Waves, LayoutDashboard, Calendar, Users, Settings, MessageSquare, LogOut, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50/50">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-white md:flex">
                <div className="flex h-16 items-center px-6 border-b">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl uppercase tracking-wider text-primary">
                        <Waves className="h-6 w-6" />
                        <span>Surf Admin</span>
                    </Link>
                </div>
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Menu
                    </div>
                    <Link href="/admin" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-foreground text-muted-foreground data-[active=true]:bg-primary/10 data-[active=true]:text-primary">
                        <LayoutDashboard className="h-4 w-4" />
                        Overview
                    </Link>
                    <Link href="/admin/bookings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-foreground text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Bookings
                        <Badge className="ml-auto bg-primary text-white hover:bg-primary/80 h-5 px-1.5">3</Badge>
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-foreground text-muted-foreground">
                        <Users className="h-4 w-4" />
                        Users
                    </Link>
                    <Link href="/admin/messages" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-foreground text-muted-foreground">
                        <MessageSquare className="h-4 w-4" />
                        Messages
                    </Link>

                    <div className="mt-6 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        System
                    </div>
                    <Link href="/admin/settings" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/10 hover:text-foreground text-muted-foreground">
                        <Settings className="h-4 w-4" />
                        Settings
                    </Link>
                </nav>
                <div className="p-4 border-t bg-gray-50/50">
                    <Button variant="outline" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 border-red-200">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                    <div className="mt-4 flex items-center gap-3 px-2">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                            AD
                        </div>
                        <div className="text-xs">
                            <p className="font-medium">Admin User</p>
                            <p className="text-muted-foreground">admin@surfsl.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-64">
                <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
                    <h1 className="text-lg font-semibold md:hidden">Surf Admin</h1>
                    <div className="ml-auto flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative text-muted-foreground">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
                        </Button>
                    </div>
                </header>
                <main className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
