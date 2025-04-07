import Link from "next/link"
import { Button } from "@/components/ui/button"

const offers = [
    {
        title: "Discover What's Possible",
        duration: "1–2 weeks",
        description: "A focused engagement to define high-impact data or AI opportunities for your business. Whether you have a specific problem in mind or you're unsure where to start, I'll pinpoint feasible use cases and create a short roadmap.",
        deliverables: [
            "Quick data and tech feasibility check",
            "Opportunity mapping: which ideas bring the most ROI",
            "Clear next steps (e.g., analytics, AI tool, or MVP build)",
        ],
        idealFor: [
            "Teams unsure how to leverage their data or AI",
            "Founders evaluating multiple potential use cases",
            "Early product discussions needing clarity before investing",
        ],
    },
    {
        title: "Make Sense of Your Data",
        duration: "2–4 weeks",
        description: "A deeper dive into your existing data. I'll clean it up, analyze trends, and build custom dashboards or visual reports that help you make data-backed decisions—no guesswork needed.",
        deliverables: [
            "Data cleaning and organization",
            "Interactive dashboards or visual reports",
            "Insights and recommendations for next steps",
            "Optional forecasting or predictive analytics",
        ],
        idealFor: [
            "SMEs with messy spreadsheets wanting clarity",
            "Startups needing to understand user behavior, churn, or growth metrics",
            "Anyone aiming to unlock immediate value from existing data",
        ],
    },
    {
        title: "Build Smart Tools & MVPs",
        duration: "4–6 weeks",
        description: "I build a working solution—ranging from a small AI tool that automates a manual process to a full MVP you can pitch, demo, or launch. Perfect for showing investors, validating your product idea, or saving time on critical tasks.",
        deliverables: [
            "Functional prototype or MVP (frontend + backend)",
            "Real or simulated data integration",
            "Documentation + Loom walkthrough",
            "Optional polish: user-friendly UI, pitch materials, and investor deck",
        ],
        idealFor: [
            "Founders needing a tangible demo to secure funding",
            "Teams ready to solve a real business challenge with AI or data",
            "Companies wanting to pilot a new data-driven product",
        ],
    },
]

const addOns = [
    {
        title: "Pitch-Ready Upgrade",
        description: "If you need investor-facing visuals, decks, or final UX polish.",
    },
    {
        title: "Implementation Support",
        description: "Continued advisory, code reviews, or help onboarding your internal devs.",
    },
]

export default function HowICanHelp() {
    return (
        <div className="container py-10">
            <div className="mx-auto max-w-[58rem] space-y-12">
                <div className="space-y-6">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Services
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Whether you're looking clarity, insights, or a fully-fledged MVP, I can make it happen.
                    </p>
                </div>

                <div className="space-y-12">
                    {offers.map((offer) => (
                        <div
                            key={offer.title}
                            id={offer.title === "Discover What's Possible" ? "discover" :
                                offer.title === "Make Sense of Your Data" ? "analyze" :
                                    offer.title === "Build Smart Tools & MVPs" ? "build" : undefined}
                            className="rounded-lg border bg-card p-8 shadow-sm scroll-mt-20"
                        >
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
                    ))}
                </div>

                <div className="space-y-6">
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