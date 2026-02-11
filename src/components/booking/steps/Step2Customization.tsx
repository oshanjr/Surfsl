"use client";

import { useFormContext } from "react-hook-form";
import { Check, Hotel, Car, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

export function Step2Customization() {
    const { register, watch, setValue } = useFormContext();
    const accommodation = watch("accommodation");
    const dietaryPrefs = watch("dietaryPrefs");

    return (
        <div className="space-y-8">
            {/* Accommodation */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                    <Hotel className="mr-2 h-5 w-5 text-primary" />
                    Need a place to crash?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div
                        onClick={() => setValue("accommodation", "none")}
                        className={cn(
                            "cursor-pointer rounded-lg border p-4 text-center transition-all hover:border-primary",
                            accommodation === "none" ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-input"
                        )}
                    >
                        <div className="font-semibold">No thanks</div>
                        <div className="text-sm text-muted-foreground">I have my own stay</div>
                    </div>
                    <div
                        onClick={() => setValue("accommodation", "dorm")}
                        className={cn(
                            "cursor-pointer rounded-lg border p-4 text-center transition-all hover:border-primary",
                            accommodation === "dorm" ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-input"
                        )}
                    >
                        <div className="font-semibold">Social Dorm</div>
                        <div className="text-sm text-muted-foreground">+$20/night</div>
                    </div>
                    <div
                        onClick={() => setValue("accommodation", "private")}
                        className={cn(
                            "cursor-pointer rounded-lg border p-4 text-center transition-all hover:border-primary",
                            accommodation === "private" ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-input"
                        )}
                    >
                        <div className="font-semibold">Private Suite</div>
                        <div className="text-sm text-muted-foreground">+$60/night</div>
                    </div>
                </div>
                <input type="hidden" {...register("accommodation")} />
            </div>

            {/* Airport Pickup */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                    <Car className="mr-2 h-5 w-5 text-primary" />
                    Airport Pickup?
                </h3>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="airportPickup"
                        {...register("airportPickup")}
                        className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="airportPickup" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Yes, pick me up from Colombo Airport (+$50)
                    </label>
                </div>
            </div>

            {/* Dietary Prefs */}
            <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center">
                    <Utensils className="mr-2 h-5 w-5 text-primary" />
                    Dietary Preferences
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["none", "vegetarian", "vegan", "gluten-free"].map((pref) => (
                        <div
                            key={pref}
                            onClick={() => setValue("dietaryPrefs", pref)}
                            className={cn(
                                "cursor-pointer rounded-lg border p-3 text-center capitalize transition-all hover:border-primary",
                                dietaryPrefs === pref ? "border-primary bg-primary/5 ring-2 ring-primary" : "border-input"
                            )}
                        >
                            {pref}
                        </div>
                    ))}
                </div>
                <input type="hidden" {...register("dietaryPrefs")} />
            </div>
        </div>
    );
}
