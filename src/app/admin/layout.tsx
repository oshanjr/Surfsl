import Link from "next/link";
import { Waves, LayoutDashboard, Calendar, Users, Settings, MessageSquare, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r hidden md:flex flex-col">
                <div className="p-6 border-b flex items-center space-x-2">
                    <Waves className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold uppercase tracking-wider text-primary">
                        Surf Admin
                    </span>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg bg-primary/10 text-primary">
                        <LayoutDashboard className="h-5 w-5" />
                        <span>Overview</span>
                    </Link>
                    <Link href="/admin/bookings" className="flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg text-muted-foreground hover:bg-gray-50 hover:text-foreground">
                        <Calendar className="h-5 w-5" />
                        <span>Bookings</span>
                    </Link>
                    <Link href="/admin/users" className="flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg text-muted-foreground hover:bg-gray-50 hover:text-foreground">
                        <Users className="h-5 w-5" />
                        <span>Users</span>
                    </Link>
                    <Link href="/admin/messages" className="flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg text-muted-foreground hover:bg-gray-50 hover:text-foreground">
                        <MessageSquare className="h-5 w-5" />
                        <span>Messages</span>
                    </Link>
                    <Link href="/admin/settings" className="flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg text-muted-foreground hover:bg-gray-50 hover:text-foreground">
                        <Settings className="h-5 w-5" />
                        <span>Settings</span>
                    </Link>
                </nav>
                <div className="p-4 border-t">
                    <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
}
