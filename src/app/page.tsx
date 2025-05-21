"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <section className="relative flex min-h-[90vh] sm:min-h-[100vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/70 py-6 landscape:py-4 sm:py-0">
                <ParticlesBackground />
                <div className="container relative flex max-w-[64rem] flex-col items-center gap-6 landscape:gap-4 sm:gap-8 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.3] sm:leading-[1.25] md:leading-[1.2] pb-2 overflow-visible">
                        I turn your data into <br></br>insights & prototypes
                    </h1>
                    <p className="text-sm leading-tight text-muted-foreground sm:text-xl sm:leading-8">
                        Exploring AI or ready to build? I can help.
                    </p>
                    <div className="space-x-4">
                        <Button
                            size="lg"
                            onClick={() => {
                                const element = document.getElementById('solutions-section');
                                if (element) {
                                    const headerOffset = 80; // Adjust this value based on your header height
                                    const elementPosition = element.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                        >
                            How I can help
                        </Button>
                        {/* Temporarily hidden for v1 launch - uncomment when ready
                        <Link href="/playground">
                            <Button variant="outline" size="lg">What I can build</Button>
                        </Link>
                        */}
                    </div>
                </div>
            </section>

            <section id="solutions-section" className="relative flex min-h-[calc(100vh-12rem)] items-center justify-center w-full py-8 md:py-12 lg:py-16">
                <div className="container">
                    <div className="mx-auto flex max-w-[64rem] flex-col items-center space-y-4 text-center mb-16">
                        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                            How I Can Help
                        </h2>
                    </div>

                    <div className="mx-auto grid justify-center gap-4 md:gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mb-16">
                        <div className="relative overflow-hidden rounded-lg border-2 border-[hsl(210,100%,90%)] dark:border-[hsl(210,100%,30%)] bg-background p-2">
                            <div className="flex flex-col justify-between rounded-md p-4 sm:p-6 h-auto sm:h-[240px]">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">Discover What's Possible</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        Uncover high-impact AI and data opportunities early. I'll assess feasibility, and help map out next steps.
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-auto w-full">
                                    <Link href="/how-i-can-help#discover" className="block w-full">
                                        <Button variant="outline" className="w-full h-9">Learn More</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border-2 border-[hsl(210,100%,90%)] dark:border-[hsl(210,100%,30%)] bg-background p-2">
                            <div className="flex flex-col justify-between rounded-md p-4 sm:p-6 h-auto sm:h-[240px]">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">Make Sense of Your Data</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        Discover opportunities in your data. I'll generate actionable insights to help you make smarter decisions.
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-auto w-full">
                                    <Link href="/how-i-can-help#analyze" className="block w-full">
                                        <Button variant="outline" className="w-full h-9">Learn More</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg border-2 border-[hsl(210,100%,90%)] dark:border-[hsl(210,100%,30%)] bg-background p-2">
                            <div className="flex flex-col justify-between rounded-md p-4 sm:p-6 h-auto sm:h-[240px]">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">Build Smart Tools & MVPs</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        Turn your idea into a working prototype. I'll build a demo-ready AI tool to help you pitch, validate, or automate faster.
                                    </p>
                                </div>
                                <div className="mt-4 sm:mt-auto w-full">
                                    <Link href="/how-i-can-help#build" className="block w-full">
                                        <Button variant="outline" className="w-full h-9">Learn More</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-[64rem] text-center">
                        <p className="mb-8 text-xl text-muted-foreground">
                            Interested in working together?
                        </p>
                        <div className="space-x-4">
                            <Link href="/contact">
                                <Button size="lg">Let's chat</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
