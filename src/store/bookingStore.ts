import { create } from "zustand";
import { BookingFormData } from "@/lib/schemas";

interface BookingState {
    step: number;
    formData: Partial<BookingFormData>;
    setStep: (step: number) => void;
    updateFormData: (data: Partial<BookingFormData>) => void;
    resetBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
    step: 1,
    formData: {
        guestCount: 1,
        accommodation: "none",
        airportPickup: false,
        dietaryPrefs: "none",
    },
    setStep: (step) => set({ step }),
    updateFormData: (data) =>
        set((state) => ({
            formData: { ...state.formData, ...data },
        })),
    resetBooking: () =>
        set({
            step: 1,
            formData: {
                guestCount: 1,
                accommodation: "none",
                airportPickup: false,
                dietaryPrefs: "none",
            },
        }),
}));
