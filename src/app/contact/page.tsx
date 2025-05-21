"use client"

import { useState, useEffect } from "react"
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
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });
    const [isValid, setIsValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

    // Validate form data
    const validateForm = () => {
        const newErrors = {
            name: "",
            email: "",
            message: ""
        };

        // Name validation
        if (formData.name.length <= 1) {
            newErrors.name = "Please enter a valid name";
        }

        // Email validation with regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Message validation
        if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);

        // Check if form is valid (no errors)
        const valid = !newErrors.name && !newErrors.email && !newErrors.message;
        setIsValid(valid);

        return valid;
    };

    // Run validation when form data changes
    useEffect(() => {
        validateForm();
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id } = e.target;
        setTouched(prev => ({
            ...prev,
            [id]: true
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Final validation check before submission
        if (!validateForm()) {
            // Mark all fields as touched to show errors
            setTouched({
                name: true,
                email: true,
                message: true
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
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
            // Reset touched state after successful submission
            setTouched({ name: false, email: false, message: false });
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
                    <p className="text-base md:text-xl text-muted-foreground">
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
                                    onBlur={handleBlur}
                                    className={touched.name && errors.name ? "border-red-500" : ""}
                                />
                                {touched.name && errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={touched.email && errors.email ? "border-red-500" : ""}
                                />
                                {touched.email && errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    className={`min-h-[120px] ${touched.message && errors.message ? "border-red-500" : ""}`}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.message && errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
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
                                disabled={!isValid || isSubmitting}
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