'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)
    const [ isScrolled, setIsScrolled ] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Determine text color based on the page and scroll state
    const textColor = pathname === "/" || pathname === "/team" || pathname === "/contact" ? "text-black" : isScrolled ? "text-black" : "text-white";
    const bgColor = isScrolled ? "bg-white shadow-lg" : "bg-transparent";

    // Function to handle active link styling
    const getLinkClass = (href: string) => {
        if (pathname === href) {
            return "text-lime-300 font-semibold";
        }
        return pathname === "/" || pathname === "/team" || pathname === "/contact"
            ? "text-black hover:text-gray-700"
            : isScrolled
                ? "text-black hover:text-gray-700"
                : "text-white hover:text-gray-300";
    };

    return (
        <header className={ `fixed inset-x-0 top-0 z-30 transition-all duration-300 ${bgColor}` }>
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 flex items-center space-x-2 p-1.5">
                        <Image
                            alt="Company Logo"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            height={ 32 }
                            width={ 32 }
                        />
                        <span className={ `text-sm/6 uppercase tracking-widest font-semibold ${textColor}` }>Locke</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={ () => setMobileMenuOpen(true) }
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Link href="/about" className={ `text-sm/6 font-medium uppercase tracking-widest ${getLinkClass("/about")}` }>About</Link>
                    <Link href="/whatwedo" className={ `text-sm/6 font-medium uppercase tracking-widest ${getLinkClass("/whatwedo")}` }>What we do</Link>
                    <Link href="/howitworks" className={ `text-sm/6 font-medium uppercase tracking-widest ${getLinkClass("/howitworks")}` }>How it works</Link>
                    <Link href="/team" className={ `text-sm/6 font-medium uppercase tracking-widest ${getLinkClass("/team")}` }>Team</Link>
                    <Link href="/contact" className={ `text-sm/6 font-medium uppercase tracking-widest ${getLinkClass("/contact")}` }>Contact</Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/bookademo" className={ `text-sm/6 font-medium uppercase tracking-widest rounded-full py-1 px-3 ${textColor} border border-lime-300` }>
                        Book a demo <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */ }
            <Dialog open={ mobileMenuOpen } onClose={ setMobileMenuOpen } className="lg:hidden">
                <div className="fixed inset-0 z-10 bg-gray-500/50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-500/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <Image
                                alt="Company Logo"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                height={ 32 }
                                width={ 32 }
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={ () => setMobileMenuOpen(false) }
                            className="-m-2.5 rounded-md p-2.5 text-gray-500"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</Link>
                                <Link href="/whatwedo" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">What we do</Link>
                                <Link href="/howitworks" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">How it works</Link>
                                <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contact</Link>
                            </div>
                            <div className="py-6">
                                <Link href="/bookademo" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Book a demo</Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
