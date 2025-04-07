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
                        I'm Guillaume, a data science consultant who loves turning ideas into real, working tools. My background blends analytics, machine learning, and software engineering, and I've worked across industries like energy, finance, and manufacturing—always focusing on practical, user-friendly solutions. I believe in starting small, testing fast, and iterating based on real feedback, because if something doesn't bring clear value, we re-think it. Whether you're a startup exploring AI or an established team seeking better data insights, I'm here to help make it happen quickly and effectively.
                    </p>
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