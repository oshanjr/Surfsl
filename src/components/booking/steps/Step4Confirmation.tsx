"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function Step4Confirmation() {
    const { watch } = useFormContext();
    const formData = watch();

    // Mock calculation
    const basePrice = formData.packageId === "pro-soul" ? 550 : formData.packageId === "weekender" ? 150 : 25;
    const accommodationPrice = formData.accommodation === "private" ? 60 : formData.accommodation === "dorm" ? 20 : 0;
    const pickupPrice = formData.airportPickup ? 50 : 0;

    // Assume duration based on package for simplicity
    const nights = formData.packageId === "pro-soul" ? 9 : formData.packageId === "weekender" ? 2 : 0;

    const total = (basePrice * formData.guestCount) + (accommodationPrice * nights) + pickupPrice;

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Review Your Booking</h2>
                <p className="text-muted-foreground">You're just one click away from paradise.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Package</span>
                        <span className="font-medium capitalize">{formData.packageId?.replace("-", " ")}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Dates</span>
                        <span className="font-medium">
                            {formData.dateRange?.from ? new Date(formData.dateRange.from).toLocaleDateString() : "-"}
                            {' to '}
                            {formData.dateRange?.to ? new Date(formData.dateRange.to).toLocaleDateString() : "-"}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Guests</span>
                        <span className="font-medium">{formData.guestCount}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Accommodation</span>
                        <span className="font-medium capitalize">{formData.accommodation}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Airport Pickup</span>
                        <span className="font-medium">{formData.airportPickup ? "Yes" : "No"}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                        <span className="text-lg font-bold">Total Estimated</span>
                        <span className="text-2xl font-bold text-primary">${total}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
