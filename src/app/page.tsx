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
                        Whether you're exploring AI opportunities, want clearer data insights, or need a quick MVP, I've got you covered.
                    </p>
                    <div className="space-x-4">
                        <Link href="/how-i-can-help">
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
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        From data analysis to full-stack applications, I can help you build the tools you need.
                    </p>
                </div>

                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold">Make Sense of Your Data</h3>
                                <p className="text-sm text-muted-foreground">
                                    Transform raw data into actionable insights. I'll organize, visualize, and uncover the patterns that drive decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold">Build Smart Tools</h3>
                                <p className="text-sm text-muted-foreground">
                                    Automate repetitive tasks or enhance decision-making with AI-powered tools tailored to your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <div className="space-y-2">
                                <h3 className="font-bold">Turn Ideas Into Working Demos</h3>
                                <p className="text-sm text-muted-foreground">
                                    Have a big idea? Let's quickly prototype and prove it. From feasibility to functional MVP.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto text-center md:max-w-[58rem]">
                    <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Explore the{" "}
                        <Link
                            href="/playground"
                            className="underline underline-offset-4"
                        >
                            Playground
                        </Link>
                        {" "}to see a few interactive demos or{" "}
                        <Link
                            href="/contact"
                            className="underline underline-offset-4"
                        >
                            book a free call
                        </Link>
                        {" "}to discuss your project.
                    </p>
                </div>
            </section>
        </div>
    )
}
