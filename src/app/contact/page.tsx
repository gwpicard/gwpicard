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
        <div className="container flex min-h-[calc(100vh-12rem)] items-center py-4">
            <div className="mx-auto w-full max-w-[40rem] space-y-4">
                <div className="space-y-2 text-center">
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Have a project in mind? I'd love to hear about it.
                    </p>
                </div>

                <Card className="pt-3">
                    <CardContent>
                        <form className="space-y-3 pt-2">
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
                                    className="min-h-[90px]"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 