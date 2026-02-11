export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Surf Online Lesson",
        "image": "https://surf-online-lesson.com/logo.png", // Placeholder URL
        "@id": "https://surf-online-lesson.com",
        "url": "https://surf-online-lesson.com",
        "telephone": "+94771234567",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Beach Road",
            "addressLocality": "Weligama",
            "postalCode": "81700",
            "addressCountry": "LK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 5.9728,
            "longitude": 80.4288
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "06:00",
            "closes": "20:00"
        },
        "sameAs": [
            "https://www.facebook.com/surfonlinelesson",
            "https://www.instagram.com/surfonlinelesson"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
