import Header from "@/components/Header";

function ContactPage() {
    return (
        <div>
            <Header />

            {/* Fixed Spacing Issue on Smaller Screens */ }
            <section className="flex items-center justify-center min-h-screen bg-white px-4 pt-24 md:pt-0">
                <div className="max-w-4xl w-full text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="text-gray-600 mt-2 text-lg">
                        Want to speak to someone about your startup? We&apos;d love to chat!
                    </p>

                    {/* Contact Form */ }
                    <div className="mt-10 bg-gray-100 p-8 rounded-lg shadow-lg">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="First name" className="input-style" required />
                                <input type="text" placeholder="Last name" className="input-style" required />
                            </div>
                            <input type="email" placeholder="Email" className="input-style w-full" required />
                            <input type="tel" placeholder="Phone number" className="input-style w-full" />
                            <textarea placeholder="Message" className="input-style w-full h-24" required></textarea>
                            <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
