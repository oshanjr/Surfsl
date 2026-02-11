"use client";

import { useFormContext } from "react-hook-form";
import { Calendar, Users } from "lucide-react";
import { Input } from "@/components/ui/input";

const packages = [
    { id: "drop-in", name: "The Drop In (Single Lesson) - $25" },
    { id: "weekender", name: "The Weekender (3 Days) - $150" },
    { id: "pro-soul", name: "The Pro Soul (7 Days) - $550" },
];

export function Step1Selection() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Start Date
                    </label>
                    <div className="relative">
                        <Input
                            type="date"
                            {...register("dateRange.from", { required: "Start date is required", valueAsDate: true })}
                            className="pl-10"
                        />
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                    {/* @ts-ignore */}
                    {errors.dateRange?.from && (
                        // @ts-ignore
                        <p className="text-xs text-red-500">{errors.dateRange.from.message as string}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        End Date
                    </label>
                    <div className="relative">
                        <Input
                            type="date"
                            {...register("dateRange.to", { required: "End date is required", valueAsDate: true })}
                            className="pl-10"
                        />
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                    {/* @ts-ignore */}
                    {errors.dateRange?.to && (
                        // @ts-ignore
                        <p className="text-xs text-red-500">{errors.dateRange.to.message as string}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Select Package
                </label>
                <select
                    {...register("packageId", { required: "Please select a package" })}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <option value="">Select a package...</option>
                    {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                            {pkg.name}
                        </option>
                    ))}
                </select>
                {errors.packageId && (
                    <p className="text-xs text-red-500">{errors.packageId.message as string}</p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Guest Count
                </label>
                <div className="relative">
                    <Input
                        type="number"
                        min="1"
                        max="10"
                        {...register("guestCount", { valueAsNumber: true, min: 1, max: 10 })}
                        className="pl-10"
                    />
                    <Users className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
                {errors.guestCount && (
                    <p className="text-xs text-red-500">{errors.guestCount.message as string}</p>
                )}
            </div>
        </div>
    );
}
