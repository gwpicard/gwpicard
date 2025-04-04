import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
    title: {
        default: "Guillaume Picard | Data & AI Consultant",
        template: "%s | Guillaume Picard",
    },
    description: "I help teams turn data-driven ideas into working tools. Fast.",
    openGraph: {
        title: "Guillaume Picard | Data & AI Consultant",
        description: "I help teams turn data-driven ideas into working tools. Fast.",
        url: "https://gwpicard.com",
        siteName: "Guillaume Picard",
    },
    twitter: {
        card: "summary_large_image",
        title: "Guillaume Picard | Data & AI Consultant",
        description: "I help teams turn data-driven ideas into working tools. Fast.",
        creator: "@gwpicard",
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
