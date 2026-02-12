import { BookingWizard } from "@/components/booking/BookingWizard";

export default function BookingPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl">
                        Book Your Surf Trip
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Customize your perfect surf holiday in just a few clicks.
                    </p>
                </div>

                <BookingWizard />
            </div>
        </div>
    );
}
