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
                        Hi! 👋🏼 I'm Guillaume, a data science and AI specialist who loves turning ideas into real, useful tools. My experience blends together analytics, ML & AI, and software engineering. I've worked across industries and organisations of all sizes—always focused building on practical, user-centric solutions. <br></br>
                        <br></br>
                        I have a simple approach: start with a real question, identify the key challenge, and build just enough to tackle it—so no time is wasted on building features nobody needs. Whether it's a quick proof-of-concept or a polished demo, I'll help you test fast and build with confidence.
                    </p>
                </div>

                <div className="flex justify-center space-x-4 pt-4 md:pt-6">
                    <Link href="/contact">
                        <Button size="lg">Send me a message</Button>
                    </Link>
                    {/* <Link href="/playground">
                        <Button variant="outline" size="lg">View my work</Button>
                    </Link> */}
                </div>
            </div>
        </div>
    )
} 