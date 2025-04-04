import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <div className="container py-10">
            <div className="mx-auto max-w-[58rem] space-y-12">
                <div className="space-y-6">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        About Me
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Hi, I'm Guillaume — I help teams build smart tools that actually solve real problems.
                    </p>
                </div>

                <div className="space-y-8">
                    <section className="space-y-4">
                        <h2 className="font-heading text-2xl">Background</h2>
                        <p className="text-muted-foreground">
                            With over a decade of experience in data science and software engineering,
                            I've worked with startups and enterprises to build data-driven solutions.
                            My expertise spans machine learning, full-stack development, and cloud architecture.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-heading text-2xl">Approach</h2>
                        <p className="text-muted-foreground">
                            I believe in building tools that are not just technically sound, but also
                            practical and user-friendly. My approach combines rapid prototyping with
                            thoughtful architecture to deliver solutions that can scale with your needs.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-heading text-2xl">Who I Work With</h2>
                        <p className="text-muted-foreground">
                            I primarily work with early-stage teams, product organizations, and founder-led
                            startups who need help turning their data and AI initiatives into reality.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="font-heading text-2xl">Values</h2>
                        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                            <li>Build for impact, not complexity</li>
                            <li>Start small, iterate fast</li>
                            <li>Focus on outcomes over output</li>
                            <li>Share knowledge openly</li>
                        </ul>
                    </section>
                </div>

                <div className="flex justify-center space-x-4">
                    <Link href="/contact">
                        <Button size="lg">Get in touch</Button>
                    </Link>
                    <Link href="/playground">
                        <Button variant="outline" size="lg">View my work</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 