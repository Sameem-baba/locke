'use client';

import { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import Header from '@/components/Header';

export default function BookTrial() {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        // Simulating loading delay
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 pt-24 md:pt-10">
            <Header />
            <h1 className="text-3xl font-semibold text-center mb-6">Book a Free Trial</h1>
            <p className="text-gray-600 text-center md:w-2/3 mb-4">
                By booking a demo, you&apos;ll experience first-hand how our cutting-edge digital platform transforms the laundry industry. Developed in collaboration with technology experts and industry leaders, our AI-powered system and smart lockers optimize operations, enhance customer convenience, and maximize profitability. Our intuitive, globally adaptable interface enables businesses to manage orders, track logistics, and streamline services effortlessly—all at the click of a button. 🚀
            </p>

            <Card className="w-full max-w-6xl p-4 bg-white shadow-md rounded-2xl">
                <CardContent>
                    { loading ? (
                        <div className="flex justify-center py-10">
                            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                        </div>
                    ) : (
                        <InlineWidget url="https://calendly.com/ssssameembaba/30min" styles={ { height: '400px' } } />
                    ) }
                </CardContent>
            </Card>
        </div>
    );
}
