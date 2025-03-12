import Header from "@/components/Header";

function ContactPage() {
    return <div>
        <Header />

        <section className="flex items-center justify-center min-h-screen bg-white px-4">
            <div className="max-w-5xl w-full text-center">
                <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
                <p className="text-gray-600 mt-2">
                    Want to speak to someone about your startup? We&apos;d love to chat!
                </p>

                <div className="mt-10 grid grid-cols-1 gap-10 bg-gray-100 p-8 rounded-lg shadow-lg">
                    {/* Contact Form */ }
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="First name" className="input-style" />
                            <input type="text" placeholder="Last name" className="input-style" />
                        </div>
                        <input type="email" placeholder="Email" className="input-style w-full" />
                        <input type="tel" placeholder="Phone number" className="input-style w-full" />
                        <textarea placeholder="Message" className="input-style w-full h-24"></textarea>
                        <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700">
                            Send message
                        </button>
                    </form>

                    {/* Contact Info */ }

                </div>
            </div>
        </section>
    </div>;
}
export default ContactPage;
