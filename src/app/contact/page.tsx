"use client"

import { useState } from "react"
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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields");
            setIsSubmitting(false);
            return;
        }

        try {
            // For testing - just log the data
            console.log("Form submitted with data:", formData);

            // Send data to our API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to send message');
            }

            // Success!
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <form className="space-y-3 pt-2" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    className="min-h-[90px]"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            {submitStatus === "success" && (
                                <p className="text-green-600 text-sm">Your message has been sent!</p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-red-600 text-sm">There was an error sending your message. Please try again.</p>
                            )}
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 