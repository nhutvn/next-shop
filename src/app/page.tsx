import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
    const perks: {
        name: string;
        icon: any;
        description: string;
    }[] = [
        {
            name: 'Instant Devlivery',
            icon: ArrowDownToLine,
            description:
                'Get your assets delivered to your email in seconds and download them right away',
        },
        {
            name: 'Instant Devlivery',
            icon: ArrowDownToLine,
            description:
                'Get your assets delivered to your email in seconds and download them right away',
        },
        {
            name: 'Instant Devlivery',
            icon: ArrowDownToLine,
            description:
                'Get your assets delivered to your email in seconds and download them right away',
        },
    ];

    return (
        <>
            <MaxWidthWrapper>
                <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Your marketplace for hight-quality{' '}
                        <span className="text-blue-600">digital assets.</span>{' '}
                    </h1>
                </div>
                <p className="mt-6 text-lg text-center text-muted-foregroun">
                    Welcome to Next Shop. Every access on our platform is verified by our team to
                    ensure out highest quility standards.
                </p>
                <div className="flex flex-col justify-center sm:flex-row gap-4 my-6">
                    <Link href="/products" className={buttonVariants()}>
                        Browser Trending
                    </Link>
                    <Button variant={'ghost'}>Our quality promise &rarr;</Button>
                </div>
            </MaxWidthWrapper>
            <section className="border-t border-gray-200 bg-gray-50">
                <MaxWidthWrapper className="py-20">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                        {perks.map((perk, index) => (
                            <div
                                key={index}
                                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                            >
                                <div className="md:flex-shrink-0 flex justify-center">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                                        {<perk.icon className="w-1/3 h-1/3" />}
                                    </div>
                                </div>

                                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-base font-medium text-gray-900">
                                        {perk.name}
                                    </h3>
                                    <p className="mt-3 text-sm text-muted-foreground">
                                        {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
}
