"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone } from "lucide-react";

export function Step3Identity() {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Almost there!</h2>
                <p className="text-muted-foreground">Create a profile to save your spot.</p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Full Name</label>
                    <div className="relative">
                        <Input
                            {...register("name", { required: "Name is required" })}
                            placeholder="John Doe"
                            className="pl-10"
                        />
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                    {errors.name && (
                        <p className="text-xs text-red-500">{errors.name.message as string}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Email Address</label>
                    <div className="relative">
                        <Input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="john@example.com"
                            className="pl-10"
                        />
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                    {errors.email && (
                        <p className="text-xs text-red-500">{errors.email.message as string}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Phone Number (Optional)</label>
                    <div className="relative">
                        <Input
                            type="tel"
                            {...register("phone")}
                            placeholder="+1 234 567 890"
                            className="pl-10"
                        />
                        <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    </div>
                </div>
            </div>
        </div>
    );
}
