"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui"

const offers = [
    {
        title: "Discover What's Possible",
        id: "discover",
        duration: "Timeline: 1-2 weeks",
        description: "A focused exploration into how AI/data could be applied to your business. Whether you have a specific problem in mind or you're unsure where to start, I'll identify feasible use cases and outline a clear plan.",
        deliverables: [
            "Quick data and tech feasibility check",
            "Opportunity map highlighting which ideas bring the most ROI",
            "A clear set of next steps (e.g. analytics, AI tool, or MVP build)",
        ],
        idealFor: [
            "Teams curious about whether AI/data can solve specific challenges",
            "Data owners wanting to uncover high-value use cases in their data",
            "Founders and managers looking to prioritize different AI/data initiatives",
        ],
    },
    {
        title: "Make Sense of Your Data",
        id: "analyze",
        duration: "Timeline: 2-4 weeks",
        description: "A hands-on deep dive into your data. I'll clean and organise your datasets, analyze trends, and build interactive dashboards or reports so you can make smarter, data-driven decisions.",
        deliverables: [
            "Thorough data cleaning and organization",
            "nIteractive dashboards or visual reports",
            "A concise report with actionable recommendations",
        ],
        idealFor: [
            "Teams struggling with messy data who need reliable datasets",
            "Product leaders wanting clarity on user behavior, churn, and retention",
            "Decision-makers seeking actionable insights to shape roadmap priorities",
        ],
    },
    {
        title: "Build Smart Tools & MVPs",
        id: "build",
        duration: "Timeline: 4-8 weeks",
        description: "I build prototypes—from automating time-consuming tasks to delivering MVPs you can pitch, demo, or launch. I'll turn your concept into a solution that convinces investors, validates product ideas, or saves your team hours on manual tasks.",
        deliverables: [
            "A functional prototype or MVP (frontend + backend)",
            "Integration with real or simulated data sources",
            "Comprehensive documentation and a live walkthrough",
        ],
        idealFor: [
            "Founders who need a live demo or MVP to convince investors",
            "Teams ready to tackle a real business challenge with AI/data solution",
            "Organisations looking to pilot or validate a new AI/data initiative",
        ],
    },
]

const addOns = [
    {
        title: "Pitch-Ready Upgrade",
        description: "Investor-facing visuals, slide decks, and final UX polish to elevate your investor pitch",
    },
    {
        title: "Implementation Support",
        description: "Hands-on onboarding of your internal dev team and ongoing advisory support",
    },
]

export default function HowICanHelp() {
    const [activeTab, setActiveTab] = useState("discover")

    // Handle URL hash fragments for direct linking to tabs
    useEffect(() => {
        // Scroll to top first
        window.scrollTo(0, 0)

        // Function to handle hash changes
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '')
            if (hash && ["discover", "analyze", "build"].includes(hash)) {
                setActiveTab(hash)
            }
        }

        // Check initial hash
        handleHashChange()

        // Add event listener for hash changes
        window.addEventListener('hashchange', handleHashChange)

        // Cleanup
        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, [])

    return (
        <div className="container py-10">
            <div className="mx-auto max-w-[58rem] space-y-12">
                <div className="space-y-6">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Services
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Whether you're looking for clarity, insights, or a fully-fledged MVP, I can make it happen.
                    </p>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        {offers.map((offer) => (
                            <TabsTrigger
                                key={offer.id}
                                value={offer.id}
                                className="data-[state=active]:border-b-2 data-[state=active]:border-[hsl(210,100%,50%)] dark:data-[state=active]:border-[hsl(210,100%,60%)]"
                            >
                                {offer.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {offers.map((offer) => (
                        <TabsContent key={offer.id} value={offer.id}>
                            <div className="rounded-lg border bg-card p-8 shadow-sm">
                                <div className="space-y-4">
                                    <div>
                                        <h2 className="font-heading text-2xl">{offer.title}</h2>
                                        <p className="text-sm text-muted-foreground">{offer.duration}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">What It Is</h3>
                                        <p className="mt-2 text-muted-foreground">{offer.description}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">What You Get</h3>
                                        <ul className="mt-2 space-y-2 text-muted-foreground">
                                            {offer.deliverables.map((item) => (
                                                <li key={item}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Ideal For</h3>
                                        <ul className="mt-2 space-y-2 text-muted-foreground">
                                            {offer.idealFor.map((item) => (
                                                <li key={item}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {offer.id === "build" && (
                                <div className="mt-8 space-y-6">
                                    <h2 className="font-heading text-2xl">Optional Add-Ons</h2>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        {addOns.map((addon) => (
                                            <div
                                                key={addon.title}
                                                className="rounded-lg border bg-card p-6"
                                            >
                                                <h3 className="font-medium">{addon.title}</h3>
                                                <p className="mt-2 text-sm text-muted-foreground">
                                                    {addon.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mx-auto text-center">
                    <p className="mb-4 text-muted-foreground">
                        Have something in mind?
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Let's talk</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 