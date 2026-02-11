"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MoreHorizontal, UserPlus } from "lucide-react";

const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Customer", status: "Active", joined: "Oct 24, 2023" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Customer", status: "Active", joined: "Nov 12, 2023" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Admin", status: "Active", joined: "Sep 05, 2023" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Customer", status: "Inactive", joined: "Dec 01, 2023" },
    { id: 5, name: "Evan Wright", email: "evan@example.com", role: "Customer", status: "Active", joined: "Jan 15, 2024" },
];

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Users</h2>
                    <p className="text-muted-foreground">Manage your customer base and administrators.</p>
                </div>
                <Button className="w-full sm:w-auto">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add User
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search users..."
                        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    />
                </div>
            </div>

            <Card>
                <CardHeader className="p-0" />
                <CardContent className="p-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Role</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Joined</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {users.map((user) => (
                                    <tr key={user.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle font-medium">{user.name}</td>
                                        <td className="p-4 align-middle">{user.email}</td>
                                        <td className="p-4 align-middle">{user.role}</td>
                                        <td className="p-4 align-middle">
                                            <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                                                {user.status}
                                            </Badge>
                                        </td>
                                        <td className="p-4 align-middle">{user.joined}</td>
                                        <td className="p-4 align-middle text-right">
                                            <Button variant="ghost" size="icon">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Actions</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
