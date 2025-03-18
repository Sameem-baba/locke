"use client";

import Header from "@/components/Header";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function ContactPage() {
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [ errors, setErrors ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [ loading, setLoading ] = useState(false);

    // Handle Input Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [ e.target.name ]: e.target.value });

        // Validate field in real-time
        validateField(e.target.name, e.target.value);
    };

    // Form Validation Functions
    const validateField = (name: string, value: string) => {
        let errorMessage = "";

        switch (name) {
            case "firstName":
                errorMessage = value.trim() === "" ? "First name is required." : "";
                break;
            case "lastName":
                errorMessage = value.trim() === "" ? "Last name is required." : "";
                break;
            case "email":
                errorMessage = /\S+@\S+\.\S+/.test(value) ? "" : "Enter a valid email address.";
                break;
            case "subject":
                errorMessage = value.trim() === "" ? "Subject is required." : "";
                break;
            case "message":
                errorMessage = value.trim().length < 10 ? "Message should be at least 10 characters." : "";
                break;
            default:
                break;
        }

        setErrors((prev) => ({ ...prev, [ name ]: errorMessage }));
    };

    const isFormValid = Object.values(errors).every((error) => error === "") &&
        Object.values(formData).every((value) => value.trim() !== "");

    // Handle Form Submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isFormValid) {
            toast.error("Please fix the errors before submitting.");
            return;
        }

        setLoading(true);
        toast.loading("Sending your message...");

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY
            )
            .then(() => {
                toast.dismiss();
                toast.success("Message sent successfully!");
                setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
                setErrors({ firstName: "", lastName: "", email: "", subject: "", message: "" });
            })
            .catch(() => {
                toast.dismiss();
                toast.error("Something went wrong. Please try again.");
            })
            .finally(() => setLoading(false));
    };

    return (
        <div>
            <Header />

            <section className="flex items-center justify-center min-h-screen bg-white px-4 pt-24 md:pt-0">
                <div className="max-w-4xl w-full text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 mt-2 text-lg">
                        Want to speak to someone about your business? We&apos;d love to chat!
                    </p>

                    <div className="mt-10 bg-gray-100 p-8 rounded-lg shadow-lg">
                        <form className="space-y-4" onSubmit={ handleSubmit }>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        className="input-style"
                                        required
                                        value={ formData.firstName }
                                        onChange={ handleChange }
                                    />
                                    { errors.firstName && <p className="text-red-500 text-sm">{ errors.firstName }</p> }
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        className="input-style"
                                        required
                                        value={ formData.lastName }
                                        onChange={ handleChange }
                                    />
                                    { errors.lastName && <p className="text-red-500 text-sm">{ errors.lastName }</p> }
                                </div>
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input-style w-full"
                                    required
                                    value={ formData.email }
                                    onChange={ handleChange }
                                />
                                { errors.email && <p className="text-red-500 text-sm">{ errors.email }</p> }
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="input-style w-full"
                                    required
                                    value={ formData.subject }
                                    onChange={ handleChange }
                                />
                                { errors.subject && <p className="text-red-500 text-sm">{ errors.subject }</p> }
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Message (min 10 characters)"
                                    className="input-style w-full h-24"
                                    required
                                    value={ formData.message }
                                    onChange={ handleChange }
                                ></textarea>
                                { errors.message && <p className="text-red-500 text-sm">{ errors.message }</p> }
                            </div>

                            <button
                                type="submit"
                                className={ `w-full py-3 rounded-lg transition duration-300 ${isFormValid ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                                    }` }
                                disabled={ !isFormValid || loading }
                            >
                                { loading ? "Sending..." : "Send Message" }
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
