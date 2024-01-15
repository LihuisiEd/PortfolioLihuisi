'use client'
import Subtitle from "@/components/Subtitle"
import HobbieGrid from "@/components/HobbieGrid"
import SkeletonHobbie from "@/components/Skeletons/SkeletonHobbie"
import Message from "@/components/Message"
import { useEffect, useState } from 'react';
import Link from "next/link"
export default function Hobbies() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false);
        };

        fetchData();
    }, []);
    return (
        <div className="mx-10 lg:mx-0 mt-28">
            {isLoading ? (
                <SkeletonHobbie />
            ) : (
                <div>
                    <Subtitle>Hobbies</Subtitle>
                    <HobbieGrid></HobbieGrid>

                    <div className="bg-zinc-950 border border-zinc-700 mt-11  rounded-lg">
                        <div className="flex flex-col h-36 justify-evenly items-center">
                            <div>
                                You can check out my Illustrator portfolio
                            </div>
                            <div>
                                <button className="fullstack w-fit py-3 px-6">
                                    <a href="https://eduardolihuisi.carrd.co/" target="blank">
                                        https://eduardolihuisi.carrd.co
                                    </a>
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className="flex gap-6 mt-48 mb-11">
                        <Message>Okey, we almost done</Message>
                        <button className="text-white transition ease-in-out duration-75  hover:scale-125 rounded-full hover:bg-zinc-600/50 p-2">
                            <Link href='/contact'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}