"use client";

import Header from "@/components/Header";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactPage() {
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [ loading, setLoading ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ error, setError ] = useState(false);

    // Handle Input Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [ e.target.name ]: e.target.value });
    };

    // Handle Form Submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs
            .send(
                "service_hduyvie", // Replace with your EmailJS Service ID
                "template_81x717m", // Replace with your EmailJS Template ID
                templateParams,
                "ytyoA4PFk6NRjLxGz" // Replace with your EmailJS Public Key
            )
            .then(() => {
                setSuccess(true);
                setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    };

    return (
        <div>
            <Header />

            {/* Fixed Spacing Issue on Smaller Screens */ }
            <section className="flex items-center justify-center min-h-screen bg-white px-4 pt-24 md:pt-0">
                <div className="max-w-4xl w-full text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 mt-2 text-lg">
                        Want to speak to someone about your business? We&apos;d love to chat!
                    </p>

                    {/* Contact Form */ }
                    <div className="mt-10 bg-gray-100 p-8 rounded-lg shadow-lg">
                        <form className="space-y-4" onSubmit={ handleSubmit }>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    className="input-style"
                                    required
                                    value={ formData.firstName }
                                    onChange={ handleChange }
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    className="input-style"
                                    required
                                    value={ formData.lastName }
                                    onChange={ handleChange }
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input-style w-full"
                                required
                                value={ formData.email }
                                onChange={ handleChange }
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="input-style w-full"
                                value={ formData.subject }
                                onChange={ handleChange }
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="input-style w-full h-24"
                                required
                                value={ formData.message }
                                onChange={ handleChange }
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                                disabled={ loading }
                            >
                                { loading ? "Sending..." : "Send Message" }
                            </button>
                        </form>

                        {/* Success & Error Messages */ }
                        { success && <p className="text-green-600 mt-4">Message sent successfully!</p> }
                        { error && <p className="text-red-600 mt-4">Something went wrong. Please try again.</p> }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
