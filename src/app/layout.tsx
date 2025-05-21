import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
    metadataBase: new URL('https://gwpicard.com'),
    title: {
        default: "Guillaume Picard | Data Science & AI Consultant Copenhagen",
        template: "%s | Guillaume Picard - Data & AI Solutions",
    },
    description: "Copenhagen-based consultant specializing in data science, AI prototypes, and MVP development. Turn your data into working solutions with fast, practical implementations.",
    keywords: [
        "data science consultant",
        "AI prototype development",
        "MVP development Copenhagen",
        "data analytics Nordic",
        "AI consulting Scandinavia",
        "rapid prototyping",
        "machine learning consultant",
        "data visualization",
        "startup MVP",
        "proof of concept",
        "AI implementation",
        "data strategy",
    ],
    authors: [{ name: "Guillaume Picard" }],
    creator: "Guillaume Picard",
    publisher: "Guillaume Picard",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Guillaume Picard | Data Science & AI Consultant Copenhagen",
        description: "Copenhagen-based consultant specializing in data science, AI prototypes, and MVP development. Turn your data into working solutions with fast, practical implementations.",
        url: "https://gwpicard.com",
        siteName: "Guillaume Picard",
        locale: "en_DK",
        type: "website",
        images: [{
            url: "/og-image.jpg", // You'll need to add this image
            width: 1200,
            height: 630,
            alt: "Guillaume Picard - Data Science & AI Consulting",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Guillaume Picard | Data Science & AI Consultant Copenhagen",
        description: "Copenhagen-based consultant specializing in data science, AI prototypes, and MVP development. Fast, practical implementations.",
        creator: "@gwpicard",
        images: ["/og-image.jpg"], // You'll need to add this image
    },
    alternates: {
        canonical: "https://gwpicard.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="relative flex min-h-screen flex-col">
                        <Navigation />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
