import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const demos = [
    {
        title: "Forecast Simulator",
        description: "Interactive time series forecasting with adjustable parameters.",
        href: "/playground/forecast",
        tags: ["Python", "FastAPI", "React"],
    },
    {
        title: "Customer Segmentation",
        description: "Dynamic clustering visualization with real-time updates.",
        href: "/playground/segments",
        tags: ["Python", "scikit-learn", "D3.js"],
    },
    {
        title: "Chat with PDF",
        description: "AI-powered document Q&A using LLMs and vector search.",
        href: "/playground/chat-pdf",
        tags: ["LangChain", "OpenAI", "Pinecone"],
    },
]

export default function Playground() {
    return (
        <div className="container py-10">
            <div className="mx-auto max-w-[58rem] space-y-12">
                <div className="space-y-6 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Interactive Demos
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Explore working examples of the tools and solutions I can build.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {demos.map((demo) => (
                        <Card key={demo.title}>
                            <CardHeader>
                                <CardTitle>{demo.title}</CardTitle>
                                <CardDescription>{demo.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {demo.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={demo.href}>
                                        <Button className="w-full">Try it out</Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mx-auto text-center">
                    <p className="mb-4 text-muted-foreground">
                        Want to build something similar?
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Get in touch</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 