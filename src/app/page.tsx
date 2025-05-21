import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/70">
                <ParticlesBackground />
                <div className="container relative flex max-w-[64rem] flex-col items-center gap-8 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        I turn ideas into <br></br> data-driven solutions
                    </h1>
                    <p className="max-w-[46rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Whether you're exploring what AI can do or have a project in mind, I can help.
                    </p>
                    <div className="space-x-4">
                        <Link href="/how-i-can-help">
                            <Button size="lg">How I can help</Button>
                        </Link>
                        {/* Temporarily hidden for v1 launch - uncomment when ready
                        <Link href="/playground">
                            <Button variant="outline" size="lg">What I can build</Button>
                        </Link>
                        */}
                    </div>
                </div>
            </section>

            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        How I Can Help
                    </h2>
                </div>

                <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mb-12">
                    <div className="relative overflow-hidden rounded-lg border-2 border-[hsl(210,100%,90%)] dark:border-[hsl(210,100%,30%)] bg-background p-2">
                        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Discover What's Possible</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Identify high-impact data or AI opportunities before investing time and resources. We'll assess feasibility, risks, and map out next steps.
                                </p>
                            </div>
                            <div className="pt-6">
                                <Link href="/how-i-can-help#discover" className="w-full">
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border-2 border-[hsl(210,100%,90%)] dark:border-[hsl(210,100%,30%)] bg-background p-2">
                        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Make Sense of Your Data</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Transform raw data into clear, actionable insights. I'll organize, visualize, and uncover patterns that drive real decisions.
                                </p>
                            </div>
                            <div className="pt-6">
                                <Link href="/how-i-can-help#analyze" className="w-full">
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border-2 border-[hsl(210,100%,90%)] dark:border-[hsl(210,100%,30%)] bg-background p-2">
                        <div className="flex h-[240px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold">Build Smart Tools & MVPs</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Create a working prototype or AI tool, complete with real or sample data. Perfect for pitching, testing, or saving time on key tasks.
                                </p>
                            </div>
                            <div className="pt-6">
                                <Link href="/how-i-can-help#build" className="w-full">
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto text-center">
                    <p className="mb-6 text-muted-foreground">
                        Interested in working together?
                    </p>
                    <div className="space-x-4">
                        <Link href="/contact">
                            <Button size="lg">Let's chat</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
