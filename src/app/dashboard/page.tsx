import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, User, Waves } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold uppercase tracking-tight">Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, Surfer!</p>
                    </div>
                    <Button asChild>
                        <Link href="/booking">Book New Session</Link>
                    </Button>
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
                            <Waves className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2/5</div>
                            <p className="text-xs text-muted-foreground">Keep it up!</p>
                            <div className="w-full bg-secondary/20 h-2 rounded-full mt-2">
                                <div className="bg-secondary h-full rounded-full w-[40%]" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                            <Calendar className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1</div>
                            <p className="text-xs text-muted-foreground">Tomorrow at 09:00 AM</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Account Status</CardTitle>
                            <User className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Active</div>
                            <p className="text-xs text-muted-foreground">Member since 2023</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>My Itinerary</CardTitle>
                                <CardDescription>Your upcoming activities.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                                        <div className="flex items-center space-x-4">
                                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                                <Waves className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Surf Lesson Level 2</h4>
                                                <p className="text-sm text-muted-foreground">with Coach Sandy</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">Tomorrow</p>
                                            <p className="text-sm text-muted-foreground">09:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-4 border rounded-lg bg-white opacity-60">
                                        <div className="flex items-center space-x-4">
                                            <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                                                <Waves className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Surf Lesson Level 1</h4>
                                                <p className="text-sm text-muted-foreground">Completed</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">Yesterday</p>
                                            <p className="text-sm text-muted-foreground">09:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Payment History</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center">
                                        <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span>Order #12345</span>
                                    </div>
                                    <span className="font-bold">$150.00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center">
                                        <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span>Order #12000</span>
                                    </div>
                                    <span className="font-bold">$25.00</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
