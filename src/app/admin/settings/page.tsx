"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/input"; // Just using standard label if component not there, but let's try standard html label
import { Switch } from "@/components/ui/switch"; // Need switch component. I'll create it or mock it. I'll mock it for now.

export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your global application settings.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>General Information</CardTitle>
                    <CardDescription>Update your resort details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Resort Name</label>
                            <Input defaultValue="Surf Online Lesson" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Contact Email</label>
                            <Input defaultValue="contact@surfsl.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <Input defaultValue="+94 77 123 4567" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Address</label>
                            <Input defaultValue="123 Beach Rd, Weligama" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save Changes</Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Booking Preferences</CardTitle>
                    <CardDescription>Configure how bookings are handled.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <label className="text-base font-medium">Auto-confirm Bookings</label>
                            <p className="text-sm text-muted-foreground">Automatically confirm bookings if dates are available.</p>
                        </div>
                        {/* Mock Switch */}
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/20">
                            <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-primary transition" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <label className="text-base font-medium">Maintenance Mode</label>
                            <p className="text-sm text-muted-foreground">Disable bookings temporarily.</p>
                        </div>
                        {/* Mock Switch */}
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                            <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
