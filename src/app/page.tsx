import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        I help teams turn data-driven ideas into working tools. Fast.
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        From strategy and insights to fully functional prototypes, I'll help you unlock the power of your data every step of the way.
                    </p>
                    <div className="space-x-4">
                        <Link href="/playground">
                            <Button size="lg">See what I can build</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg">Book a free intro call</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container space-y-6 py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        How I Can Help
                    </h2>
                </div>

                <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Explore & Prioritize</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Identify high-impact data or AI opportunities before investing time and resources. We'll assess feasibility, risks, and map out next steps.
                                </p>
                            </div>
                            <div className="pt-6">
                                <Link href="/how-i-can-help" className="w-full">
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Make Sense of Your Data</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Transform raw data into clear, actionable insights. I'll organize, visualize, and uncover patterns that drive real decisions.
                                </p>
                            </div>
                            <div className="pt-6">
                                <Link href="/how-i-can-help" className="w-full">
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Build Smart Tools & MVPs</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Create a working prototype or AI tool, complete with real or sample data. Perfect for pitching, testing, or saving time on key tasks.
                                </p>
                            </div>
                            <div className="pt-6">
                                <Link href="/how-i-can-help" className="w-full">
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto text-center">
                    <p className="mb-6 text-muted-foreground">
                        Ready to get started? Book a free intro call or explore my interactive demos in the Playground.
                    </p>
                    <div className="space-x-4">
                        <Link href="/contact">
                            <Button size="lg">Book a free intro call</Button>
                        </Link>
                        <Link href="/playground">
                            <Button variant="outline" size="lg">View demos</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
