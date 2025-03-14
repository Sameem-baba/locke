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
                By booking a demo, you&apos;ll witness first-hand how our patented predictive model, developed collaboratively by AI Engineers and Oncologists, revolutionizes treatment strategies. Our user-friendly interface, adaptable globally, empowers frontline doctors with a click-of-a-button analysis, offering personalized results within seconds.
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
