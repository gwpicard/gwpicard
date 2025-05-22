import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <div className="container flex min-h-[calc(100vh-12rem)] items-center py-8 md:py-16">
            <div className="mx-auto max-w-[58rem] space-y-8 md:space-y-16">
                <div className="space-y-4 md:space-y-8">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        About Me
                    </h1>
                    <p className="text-base md:text-xl leading-relaxed text-muted-foreground">
                        Hi! 👋🏼 I'm Guillaume, a data science and AI specialist with 6+ years experience building data-driven solutions for startups, companies, and R&D teams. I combine analytics, machine learning & AI, and software engineering to prototype user-focused tools that solve real problems. <br></br>
                        <br></br>
                        My process is simple: start with a question, identify key challenges, and build only what's needed—no time wasted on irrelevant features. Whether the solution is straightforward analytics or a cutting-edge AI prototype, I determine the best approach tailored to each problem.
                    </p>
                </div>

                <div className="flex justify-center space-x-4 pt-4 md:pt-6">
                    <Link href="/contact">
                        <Button size="lg">Let's talk</Button>
                    </Link>
                    {/* <Link href="/playground">
                        <Button variant="outline" size="lg">View my work</Button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
} 