"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">System Settings</h2>
                <p className="text-sm text-muted-foreground">Configure your resort parameters.</p>
            </div>

            <div className="grid gap-6">
                {/* General Config */}
                <Card className="bg-white/80 backdrop-blur-md border border-white/50 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">General Information</CardTitle>
                        <CardDescription>Resort contact and location details used in invoices.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase text-muted-foreground tracking-wider">Resort Name</label>
                                <Input defaultValue="Surf Online Lesson" className="bg-white/50 border-black/5 focus:bg-white transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase text-muted-foreground tracking-wider">Contact Email</label>
                                <Input defaultValue="contact@surfsl.com" className="bg-white/50 border-black/5 focus:bg-white transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase text-muted-foreground tracking-wider">Phone Number</label>
                                <Input defaultValue="+94 77 123 4567" className="bg-white/50 border-black/5 focus:bg-white transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-medium uppercase text-muted-foreground tracking-wider">Address</label>
                                <Input defaultValue="123 Beach Rd, Weligama" className="bg-white/50 border-black/5 focus:bg-white transition-all" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="border-t border-black/5 bg-black/[0.02] px-6 py-4 flex justify-end">
                        <Button className="shadow-md">Save Changes</Button>
                    </CardFooter>
                </Card>

                {/* Preferences */}
                <Card className="bg-white/80 backdrop-blur-md border border-white/50 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Booking Preferences</CardTitle>
                        <CardDescription>Automation rules for new reservations.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border border-black/5 bg-white/40 p-4 transition-colors hover:bg-white/60">
                            <div className="space-y-0.5">
                                <label className="text-base font-medium text-foreground">Auto-confirm Bookings</label>
                                <p className="text-sm text-muted-foreground">Automatically confirm bookings if dates are available.</p>
                            </div>
                            {/* iOS Style Switch Mockup */}
                            <div className="cursor-pointer relative inline-flex h-7 w-12 items-center rounded-full bg-green-500 transition-colors duration-200">
                                <span className="translate-x-6 inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition duration-200" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-black/5 bg-white/40 p-4 transition-colors hover:bg-white/60">
                            <div className="space-y-0.5">
                                <label className="text-base font-medium text-foreground">Maintenance Mode</label>
                                <p className="text-sm text-muted-foreground">Disable bookings temporarily for site maintenance.</p>
                            </div>
                            {/* iOS Style Switch Mockup (Off) */}
                            <div className="cursor-pointer relative inline-flex h-7 w-12 items-center rounded-full bg-gray-200 transition-colors duration-200">
                                <span className="translate-x-0.5 inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition duration-200" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
