import Link from "next/link";
import { Waves, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <Waves className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold uppercase tracking-wider text-primary">
                                Surf Online
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Less friction, more stoke. Join us for an unforgettable surf experience in Sri Lanka.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Explore
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/packages" className="text-base text-muted-foreground hover:text-primary">
                                    Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="/experience" className="text-base text-muted-foreground hover:text-primary">
                                    The Experience
                                </Link>
                            </li>
                            <li>
                                <Link href="/booking" className="text-base text-muted-foreground hover:text-primary">
                                    Book Now
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="#" className="text-base text-muted-foreground hover:text-primary">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-muted-foreground hover:text-primary">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Social
                        </h3>
                        <div className="mt-4 flex space-x-6">
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8">
                    <p className="text-base text-muted-foreground text-center">
                        &copy; {new Date().getFullYear()} Surf Online Lesson. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
