"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Users, DollarSign, CalendarCheck, TrendingUp, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
    { name: "Mon", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Tue", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Wed", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Thu", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Fri", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Sat", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Sun", total: Math.floor(Math.random() * 5000) + 1000 },
];

export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
                    <p className="text-sm text-muted-foreground">Here's what's happening today.</p>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="bg-white/50 backdrop-blur-sm">Download Report</Button>
                    <Button size="sm" className="shadow-md">New Booking</Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: "Total Revenue", icon: DollarSign, value: "$45,231.89", trend: "+20.1%", trendColor: "text-green-600" },
                    { title: "Active Bookings", icon: CalendarCheck, value: "+2350", trend: "+180.1%", trendColor: "text-green-600" },
                    { title: "New Customers", icon: Users, value: "+12,234", trend: "+19%", trendColor: "text-green-600" },
                    { title: "Occupancy Rate", icon: TrendingUp, value: "85%", trend: "+7%", trendColor: "text-green-600" },
                ].map((item, i) => (
                    <Card key={i} className="bg-white/70 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
                            <item.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.value}</div>
                            <p className={`text-xs ${item.trendColor} font-medium mt-1`}>{item.trend} from last month</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-white/70 backdrop-blur-md border border-white/40 shadow-sm">
                    <CardHeader>
                        <CardTitle>Revenue Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={data}>
                                <XAxis
                                    dataKey="name"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Tooltip
                                    cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)' }}
                                />
                                <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card className="col-span-3 bg-white/70 backdrop-blur-md border border-white/40 shadow-sm">
                    <CardHeader>
                        <CardTitle>Recent Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div className="flex items-center group cursor-pointer" key={i}>
                                    <div className="relative">
                                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-primary font-bold shadow-sm ring-2 ring-white">
                                            {String.fromCharCode(65 + i)}
                                        </div>
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                                    </div>
                                    <div className="ml-4 space-y-1 flex-1">
                                        <p className="text-sm font-semibold leading-none group-hover:text-primary transition-colors">Customer {i}</p>
                                        <p className="text-xs text-muted-foreground">The Pro Soul • 7 Days</p>
                                    </div>
                                    <div className="ml-auto font-medium text-sm">+$550.00</div>
                                    <Button variant="ghost" size="icon" className="ml-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
