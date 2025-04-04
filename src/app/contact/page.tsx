"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
    return (
        <div className="container py-10">
            <div className="mx-auto max-w-[58rem] space-y-12">
                <div className="space-y-6 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Want to build something together? Drop me a message or book a call.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                Fill out the form below and I'll get back to you within 24 hours.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="your@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell me about your project..."
                                        className="min-h-[100px]"
                                    />
                                </div>
                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Book a Call</CardTitle>
                            <CardDescription>
                                Schedule a free 30-minute intro call to discuss your project.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    During the call, we'll:
                                </p>
                                <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                                    <li>Discuss your project goals and challenges</li>
                                    <li>Explore potential solutions</li>
                                    <li>Determine if we're a good fit to work together</li>
                                </ul>
                                <Button
                                    className="w-full"
                                    onClick={() => window.open('https://cal.com/gwpicard/30min', '_blank')}
                                >
                                    Schedule Call
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
} 