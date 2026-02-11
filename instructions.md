# Project Specification: "Surf Online Lesson" Web Application

## 1. Project Overview
* **Application Name:** Surf Online Lesson (Provisional Title)
* **Goal:** To build a high-conversion, visually stunning Progressive Web App (PWA) for booking surf lessons in Sri Lanka.
* **Core Philosophy:** "Less friction, more stoke." A streamlined booking experience with a heavy focus on visual appeal, social proof, and mobile optimization.
* **Target Audience:** International travelers, digital nomads, and beginners looking for a trusted, high-quality surf experience.

---

## 2. Design System & UI/UX Strategy
* **Visual Style:** "Tropical Modernism."
    * **Layout:** Clean whitespace, grid-based alignment, and immersive full-width imagery.
    * **Imagery:** High-quality, slow-motion video backgrounds and vibrant surf photography.
* **Color Palette:**
    * **Primary:** `Deep Ocean Blue (#006994)` - Used for primary Call-to-Actions (CTAs) and headers.
    * **Secondary:** `Sunset Orange (#FF7F50)` - Used for highlights, discount tags, and urgency indicators.
    * **Background:** `Sand / Off-White (#F8F5F2)` - A soft background to reduce eye strain and mimic the beach aesthetic.
    * **Text:** `Charcoal (#333333)` - Softer than pure black for better readability on light backgrounds.
* **Typography:**
    * **Headings:** `Montserrat` or `Poppins` (Bold, Uppercase for section titles).
    * **Body:** `Open Sans` or `Lato` (High legibility for content).

---

## 3. Site Architecture (Sitemap)

### A. Public Facing (Client Side)
1.  **Home / Landing Page:**
    * Hero Section with Video Background.
    * USP (Unique Selling Proposition) Bar.
    * Featured Packages.
    * Social Proof (Reviews).
2.  **Surf Packages:**
    * Detailed breakdown of Beginner, Intermediate, and Advanced lessons.
    * Multi-day Surf Camp options.
3.  **The Experience:**
    * Accommodation details (Dorms vs. Private).
    * Social Life (BBQs, Parties, Yoga).
    * "A Day in the Life" timeline.
4.  **Booking Wizard:**
    * A multi-step, smart form for reserving spots.
5.  **User Dashboard:**
    * Login/Register.
    * My Bookings & Itinerary.
    * Payment History.

### B. Admin Panel (CMS & Management)
1.  **Dashboard Overview:**
    * Today's Schedule.
    * Revenue Charts.
    * New User Registrations.
2.  **Booking Manager:**
    * Calendar View of all lessons.
    * Approve/Cancel/Reschedule functionality.
3.  **Content Management System (CMS):**
    * Edit Home Banners and Text.
    * Upload/Delete Images in the Gallery.
    * Manage Package Prices and Descriptions.
4.  **User Management:**
    * Client Database (CRM).
    * Instructor Management.
5.  **Message Center:**
    * Direct inquiries and support chat.

---

## 4. Detailed Page Specifications (Front-End)

### Page 1: The Landing Page
* **Hero Section:** Full-screen video background (slow-motion waves).
    * *Headline:* "Learn to Surf in Paradise."
    * *Sub-headline:* "Professional coaching, luxury stay, and unforgettable vibes in Sri Lanka."
    * *Primary CTA:* "Find My Wave" (Smooth scroll to Packages).
* **Social Proof Strip:** "Rated 5/5 by 10,000+ Legends" (Icons: TripAdvisor, Google).
* **The "Vibe" Grid:** 3-Column Layout featuring high-quality images with hover effects.
    * *Card 1:* **Surf** (ISA Licensed Coaches, 30+ Spots).
    * *Card 2:* **Stay** (AC Dorms & Private Suites, Coworking WiFi).
    * *Card 3:* **Play** (Rooftop BBQ, Yoga, Friday Jungle Parties).

### Page 2: Packages & Pricing
* **Toggle Switch:** [ Single Lessons ] vs [ Full Camps ]
* **Package Cards:**
    * **The "Drop In" (Single Lesson):** 90 Mins | $25 | 1-on-1 Tuition.
    * **The "Weekender" (3 Days):** Accommodation + 3 Lessons | $150.
    * **The "Pro Soul" (7 Days):** Full board + 10 Lessons + Video Analysis | $550.
* **Features List:** Icons indicating "Includes Board Rental," "Rash Guard," "Transport to Breaks."

### Page 3: The "Smart" Booking Wizard
* *Optimization Strategy:* Use "Progressive Disclosure" to reduce friction. Users only see relevant fields.
* **Step 1: Selection**
    * Select Dates (Range Picker).
    * Select Package (Dropdown).
    * Guest Count (Counter - / +).
* **Step 2: Customization**
    * "Need a place to crash?" (Yes/No toggle -> Shows Room Types: Dorm/Private).
    * "Airport Pickup?" (Yes/No toggle).
    * "Dietary Prefs?" (Icons: Vegan, Veg, None).
* **Step 3: Identity (The Gate)**
    * *Prompt:* "Almost there! Create an account to save your spot."
    * *Form:* Name, Email, Password (OR "Sign up with Google").
* **Step 4: Confirmation**
    * Order Summary Card.
    * Payment Options (Stripe / Wise / Cash on Arrival).

### Page 4: User Dashboard (Post-Login)
* **Welcome Message:** "Welcome Back, [Name]!"
* **Upcoming Sessions:** Card showing Date, Time, and Instructor Name.
* **Progress Tracker:** Gamified bar showing "You've completed 2/5 lessons!"

---

## 5. Admin Panel Specifications (Front-End)

* **Layout:** Sidebar Navigation (Left), Main Content Area (Right).
* **CMS Module:**
    * *Live Editor:* Admin can click on text blocks to edit them directly.
    * *Media Library:* Drag-and-drop zone to upload new photos.
* **Booking Manager:**
    * *Kanban View:* Columns for [New Request] -> [Confirmed] -> [Completed].
    * *Calendar View:* Visual grid showing instructor availability.
* **User Manager:**
    * Table view with Search/Filter.
    * Columns: Name, Email, Total Spent, Last Booking.

---

## 6. SEO & Web Application Optimization

* **Meta Tags:** Dynamic generation for package pages (e.g., "Best Surf Camp Sri Lanka - 7 Day Package").
* **Performance:**
    * **Lazy Loading:** Images below the fold only load when scrolled to.
    * **Next-Gen Formats:** Use WebP for all images (smaller file size, high quality).
    * **Code Splitting:** Only load the JavaScript needed for the current page.
* **Schema Markup:** `Product` schema for surf packages and `LocalBusiness` schema for location data.
* **Accessibility:** ARIA labels on all forms and meaningful alt text for images.

---

## 7. Technology Stack Recommendation

To build a modern, high-performance, and scalable application, the following stack is recommended:

### **Frontend (The User Experience)**
* **Framework:** **Next.js (React)**
    * *Reason:* Best-in-class SEO, server-side rendering (SSR) for fast load times, and excellent developer experience.
* **Language:** **TypeScript**
    * *Reason:* Ensures code quality, reduces bugs, and makes maintenance easier.
* **Styling:** **Tailwind CSS**
    * *Reason:* Rapid UI development, highly customizable, and ensures a consistent design system.
* **Animation:** **Framer Motion**
    * *Reason:* For creating smooth, professional animations (like the slow-motion wave effects and page transitions).
* **Icons:** **Lucide React** or **Heroicons**
    * *Reason:* Clean, modern SVG icons that match the design aesthetic.

### **State Management & Forms**
* **State Management:** **Zustand**
    * *Reason:* Lightweight and simple state management for handling the booking flow and user session.
* **Form Handling:** **React Hook Form** + **Zod**
    * *Reason:* Efficient form validation (essential for the booking wizard) without re-rendering the whole page.

### **Admin Panel & Backend (Preparatory)**
* **Admin Dashboard:** **Shadcn UI** (Components) + **Recharts** (for data visualization).
* **Authentication (Mock/Prep):** **NextAuth.js** (ready to integrate with Google/Email login).
* **CMS Structure:** Headless CMS architecture (ready to connect to Strapi or Sanity in the future).

### **Deployment & Infrastructure**
* **Hosting:** **Vercel**
    * *Reason:* Native support for Next.js, global CDN for fast access in Sri Lanka and abroad.
* **Image Optimization:** **Next/Image** component.