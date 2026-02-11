"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Trash2, Reply } from "lucide-react";

const messages = [
    { id: 1, from: "John Doe", subject: "Custom Dates Enquiry", preview: "Hi, do you have availability for...", date: "2 mins ago", unread: true },
    { id: 2, from: "Sarah Lee", subject: "Dietary Requirements", preview: "I am vegan, will there be options...", date: "1 hour ago", unread: false },
    { id: 3, from: "Mike Ross", subject: "Airport Pickup", preview: "Can I schedule a pickup at 3 AM?", date: "Yesterday", unread: false },
];

export default function MessagesPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Messages</h2>
                <p className="text-muted-foreground">Stay in touch with your surfers.</p>
            </div>

            <div className="grid gap-4">
                {messages.map((msg) => (
                    <Card key={msg.id} className={`transition-all hover:bg-gray-50 ${msg.unread ? "border-l-4 border-l-primary" : ""}`}>
                        <CardContent className="p-4 flex items-start gap-4">
                            <div className={`mt-1 h-10 w-10 rounded-full flex items-center justify-center ${msg.unread ? "bg-primary/20 text-primary" : "bg-gray-100 text-gray-500"}`}>
                                <Mail className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className={`text-sm font-semibold ${msg.unread ? "text-foreground" : "text-muted-foreground"}`}>
                                        {msg.from}
                                        {msg.unread && <Badge className="ml-2 h-4 px-1 text-[10px]">NEW</Badge>}
                                    </h4>
                                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{msg.date}</span>
                                </div>
                                <p className="text-sm font-medium leading-none mb-1">{msg.subject}</p>
                                <p className="text-sm text-muted-foreground line-clamp-1">{msg.preview}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                    <Reply className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
