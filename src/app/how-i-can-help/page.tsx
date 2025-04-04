import Link from "next/link"
import { Button } from "@/components/ui/button"

const offers = [
    {
        title: "Feasibility Sprint",
        description: "A 1-week deep dive to assess technical feasibility and outline potential solutions.",
        features: [
            "Technical feasibility assessment",
            "Solution architecture outline",
            "Implementation roadmap",
            "Cost and timeline estimates",
        ],
    },
    {
        title: "Solution Sketch",
        description: "2-3 weeks to create a working prototype and validate core assumptions.",
        features: [
            "Rapid prototyping",
            "Core functionality implementation",
            "Technical validation",
            "Next steps recommendation",
        ],
    },
    {
        title: "Prototype Sprint",
        description: "4-6 weeks to build a production-ready MVP with your core features.",
        features: [
            "Full MVP development",
            "Production deployment",
            "Documentation",
            "Handover support",
        ],
    },
    {
        title: "Pitch-Ready+",
        description: "Get a polished demo and technical materials for investor presentations.",
        features: [
            "Interactive demo development",
            "Technical pitch deck support",
            "Architecture documentation",
            "Investment-ready artifacts",
        ],
    },
    {
        title: "Implementation Support",
        description: "Ongoing technical guidance and development support for your team.",
        features: [
            "Technical advisory",
            "Code reviews",
            "Architecture guidance",
            "Best practices implementation",
        ],
    },
]

export default function HowICanHelp() {
    return (
        <div className="container py-10">
            <div className="mx-auto max-w-[58rem] space-y-12">
                <div className="space-y-6 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        How I Can Help
                    </h1>
                    <p className="text-muted-foreground sm:text-xl">
                        No matter where you are in the process — exploring, prototyping, or scaling — I have a way to help.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {offers.map((offer) => (
                        <div
                            key={offer.title}
                            className="rounded-lg border bg-card p-6 shadow-sm"
                        >
                            <h3 className="font-heading text-xl">{offer.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {offer.description}
                            </p>
                            <ul className="mt-4 space-y-2">
                                {offer.features.map((feature) => (
                                    <li key={feature} className="text-sm">
                                        • {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mx-auto text-center">
                    <p className="mb-4 text-muted-foreground">
                        Ready to discuss your project?
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Book a free intro call</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 