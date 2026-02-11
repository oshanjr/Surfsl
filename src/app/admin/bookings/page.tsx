"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Need Badge component. I'll mock it inline or create it. I'll create inline for now.
import { cn } from "@/lib/utils";

const initialBookings = [
    { id: "BK-001", customer: "John Doe", type: "Pro Soul", date: "2023-11-15", status: "new" },
    { id: "BK-002", customer: "Jane Smith", type: "Weekender", date: "2023-11-16", status: "new" },
    { id: "BK-003", customer: "Bob Brown", type: "Single Lesson", date: "2023-11-14", status: "confirmed" },
    { id: "BK-004", customer: "Alice Green", type: "Pro Soul", date: "2023-11-10", status: "confirmed" },
    { id: "BK-005", customer: "Charlie White", type: "Weekender", date: "2023-11-01", status: "completed" },
];

export default function BookingsPage() {
    const [bookings, setBookings] = useState(initialBookings);

    const moveBooking = (id: string, status: string) => {
        setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
    };

    const columns = [
        { id: "new", title: "New Requests", color: "bg-blue-100 text-blue-800" },
        { id: "confirmed", title: "Confirmed", color: "bg-green-100 text-green-800" },
        { id: "completed", title: "Completed", color: "bg-gray-100 text-gray-800" },
    ];

    return (
        <div className="h-full flex flex-col space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Booking Manager</h2>
                <p className="text-muted-foreground">Manage lessons and camps efficiently.</p>
            </div>

            <div className="flex-1 overflow-x-auto">
                <div className="flex space-x-6 min-w-max h-full pb-4">
                    {columns.map((col) => (
                        <div key={col.id} className="w-80 flex flex-col bg-gray-50 rounded-xl p-4 border h-full">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-lg">{col.title}</h3>
                                <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold", col.color)}>
                                    {bookings.filter(b => b.status === col.id).length}
                                </span>
                            </div>

                            <div className="flex-1 space-y-3 overflow-y-auto pr-2">
                                {bookings.filter(b => b.status === col.id).map((booking) => (
                                    <Card key={booking.id} className="cursor-move hover:shadow-md transition-shadow">
                                        <CardHeader className="p-4 pb-2">
                                            <div className="flex justify-between items-start">
                                                <CardTitle className="text-sm font-bold">{booking.customer}</CardTitle>
                                                <span className="text-xs text-muted-foreground">{booking.id}</span>
                                            </div>
                                            <CardDescription className="text-xs">{booking.type}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="p-4 pt-0">
                                            <div className="text-xs text-muted-foreground mt-2 flex items-center">
                                                📅 {booking.date}
                                            </div>
                                            {/* Quick Actions */}
                                            <div className="flex justify-end mt-3 space-x-2">
                                                {col.id === 'new' && (
                                                    <button
                                                        onClick={() => moveBooking(booking.id, 'confirmed')}
                                                        className="text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                                                    >
                                                        Confirm
                                                    </button>
                                                )}
                                                {col.id === 'confirmed' && (
                                                    <button
                                                        onClick={() => moveBooking(booking.id, 'completed')}
                                                        className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                                                    >
                                                        Complete
                                                    </button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
