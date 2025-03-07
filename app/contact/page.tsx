import Header from "@/components/Header";
import Link from "next/link";

function ContactPage() {
    return <div>
        <Header />

        <section className="flex items-center justify-center min-h-screen bg-white px-4">
            <div className="max-w-5xl w-full text-center">
                <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
                <p className="text-gray-600 mt-2">
                    Want to speak to someone about your startup? We&apos;d love to chat!
                </p>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-100 p-8 rounded-lg shadow-lg">
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
                    <div className="text-gray-800 text-left">
                        <h3 className="font-semibold text-lg">Call us</h3>
                        <p className="text-sm text-gray-500">Call our team Mon-Fri from 9am to 5pm.</p>
                        <div className="flex items-center justify-start space-x-2">
                            {/* <PhoneIcon className="h-4 w-4" /> */ }
                            <p className=" text-gray-800 underline font-medium mt-1">+1 855-000-0000</p>
                        </div>

                        <h3 className="font-semibold text-lg mt-6">Chat with us</h3>
                        <div className="flex flex-col space-y-2 mt-1">
                            {/* <li>Start a live chat</li> */ }
                            <Link href="mailto:hello@gmail.com" className="underline text-gray-800">Send us an email</Link>
                            <Link href="https://x.com/" className="underline text-gray-800 underline-offset-2">Message us on X</Link>
                        </div>

                        <h3 className="font-semibold text-lg mt-6">Visit us</h3>
                        <p className="text-gray-500 text-sm">Chat in person at our Melbourne HQ</p>
                        <p className=" font-medium mt-1 underline text-gray-800 underline-offset-2">
                            100 Smith Street, Collingwood VIC 3066
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}
export default ContactPage;
