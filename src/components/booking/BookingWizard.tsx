"use client";

import { useForm, FormProvider, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, BookingFormData } from "@/lib/schemas";
import { useBookingStore } from "@/store/bookingStore";
import { Button } from "@/components/ui/button";
import { Step1Selection } from "@/components/booking/steps/Step1Selection";
import { Step2Customization } from "@/components/booking/steps/Step2Customization";
import { Step3Identity } from "@/components/booking/steps/Step3Identity";
import { Step4Confirmation } from "@/components/booking/steps/Step4Confirmation";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";

const steps = [
    { id: 1, title: "Selection", component: Step1Selection },
    { id: 2, title: "Customization", component: Step2Customization },
    { id: 3, title: "Identity", component: Step3Identity },
    { id: 4, title: "Confirmation", component: Step4Confirmation },
];

export function BookingWizard() {
    const { step, setStep, updateFormData, formData } = useBookingStore();

    const methods = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: formData as any,
        mode: "onChange",
    });

    const { trigger, handleSubmit } = methods;

    const nextStep = async () => {
        let isValid = false;

        if (step === 1) {
            isValid = await trigger(["dateRange", "packageId", "guestCount"]);
        } else if (step === 2) {
            isValid = await trigger(["accommodation", "airportPickup", "dietaryPrefs"]);
        } else if (step === 3) {
            isValid = await trigger(["name", "email", "phone"]);
        } else {
            isValid = true;
        }

        if (isValid) {
            updateFormData(methods.getValues());
            setStep(step + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        updateFormData(methods.getValues());
        setStep(step - 1);
        window.scrollTo(0, 0);
    };

    const onSubmit = (data: BookingFormData) => {
        console.log("Booking Submitted:", data);
        alert("Booking Confirmed! (This is a demo)");
        // Here you would redirect to success page or API
    };

    const CurrentStepComponent = steps[step - 1].component;
    const isLastStep = step === steps.length;
    const progress = (step / steps.length) * 100;

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-secondary transition-all duration-500 ease-in-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    {steps.map((s) => (
                        <span key={s.id} className={cn(s.id === step && "font-bold text-primary transition-colors")}>
                            {s.title}
                        </span>
                    ))}
                </div>
            </div>

            {/* Form Steps */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CurrentStepComponent />
                    </form>
                </FormProvider>
            </div>

            {/* Navigation Keys */}
            <div className="mt-8 flex justify-between">
                <Button
                    variant="ghost"
                    onClick={prevStep}
                    disabled={step === 1}
                    className={cn("text-muted-foreground", step === 1 && "invisible")}
                >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>

                {isLastStep ? (
                    <Button onClick={handleSubmit(onSubmit)} className="px-8" size="lg">
                        Confirm Booking
                    </Button>
                ) : (
                    <Button onClick={nextStep} className="px-8" size="lg">
                        Next Step
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
