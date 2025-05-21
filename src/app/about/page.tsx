import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <div className="container flex min-h-[calc(100vh-12rem)] items-center py-16">
            <div className="mx-auto max-w-[58rem] space-y-16">
                <div className="space-y-8">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        About Me
                    </h1>
                    <p className="text-xl leading-relaxed text-muted-foreground">
                        Hi! 👋🏼 I'm Guillaume, a data science and AI specialist who loves turning ideas into real, useful tools. My skillset blends analytics, ML & AI, and software engineering. I've worked across industries and organisations of all sizes—always focusing on practical, user-centred solutions. <br></br>
                        <br></br>
                        I believe in starting small, testing fast, and iterating based on real feedback, because if something doesn't bring clear value, we re-think it. Whether you're a startup exploring AI or an established team seeking better data insights, I'm here to help make it happen quickly and effectively.
                    </p>
                </div>

                <div className="flex justify-center space-x-4 pt-6">
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