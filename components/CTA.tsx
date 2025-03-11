import React from 'react'
import Link from 'next/link'

const CTA = () => {
    return (
        <section className='w-full flex items-center md:flex-row flex-col gap-7 max-w-6xl mx-auto border-t py-10 border-gray-400'>
            <p className='text-black font-extrabold flex-1 text-3xl max-md:text-center'>
                Do you like our vision? Want to know more about us? <br className='sm:block hidden' />
                Click on the button!
            </p>
            <Link href="/contact" className='text-white bg-gradient-to-r from-lime-300 to-emerald-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'> Click here</Link>
        </section>
    )
}

export default CTA