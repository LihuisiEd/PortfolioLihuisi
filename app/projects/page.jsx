'use client'
import Subtitle from "@/components/Subtitle"
import Card from "@/components/Card"
import { useEffect, useState } from 'react';
import SkeletonLoader from "@/components/Skeletons/SkeletonLoader";
import JavaScriptPortfolio from "@/components/JavaScriptPortfolio";
import Message from "@/components/Message";
import Link from "next/link";

const Projects = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const cardData = [
        {
            title: 'Guardianes del Planeta Tierra',
            chips: ['Unity', 'C#'],
            image: '/projects/guardianes-tiny.jpg',
            href: 'https://github.com/joseph-leon/Juego-Unesco'
        },
        {
            title: 'System Recommendation',
            chips: ['Python', 'Dask', 'React', 'AWS', 'Docker', 'PostgreSQL'],
            image: '/projects/system-recom-tiny.jpg',
            href: 'https://github.com/ARamosA0/ms_courses_recom'
        },
        {
            title: 'Hell-Merce',
            chips: ['Next.js', 'API', 'MySQL'],
            image: '/projects/hellmerce-tiny.jpg',
            href: 'https://hell-mmerce.vercel.app/'
        },
        {
            title: 'ToDoo',
            chips: ['Next.js', 'Figma', 'MySQL'],
            image: '/projects/todoo-tiny.jpg',
            href: 'https://todoo-steel.vercel.app/'
        },
        {
            title: 'Cifumiga',
            chips: ['Kotlin', 'Django', 'Firebase'],
            image: '/projects/cifumiga-tiny.jpg',
            href: 'https://github.com/LihuisiEd/Cifumiga-proyecto'
        },
        {
            title: 'Task-Verse',
            chips: ['AWS', 'React-Native', 'RDS', 'Figma'],
            image: '/projects/taskverse-tiny.jpg',
            href: 'https://github.com/LihuisiEd/project-team'
        },
        {
            title: 'Automat',
            chips: ['React', 'Kotlin', 'MySQL', 'Django', 'LucidChart'],
            image: '/projects/automat-tiny.jpg',
            href: 'https://github.com/ARamosA0/projectoInegrador-S4'
        },
    ];

    return (
        <div className="mt-28 lg:pr-10 mx-5 lg:mx-0">
            {isLoading ? (
                <SkeletonLoader>All my projects</SkeletonLoader>
            ) : (
                <div>
                    <div>
                        <Subtitle>All my projects</Subtitle>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
                        {cardData.map((data, index) => (
                            <Card key={index}>
                                {{
                                    title: data.title,
                                    image: data.image,
                                    href: data.href,
                                    ...data.chips.reduce((acc, chip, chipIndex) => {
                                        acc[`chip${chipIndex + 1}`] = chip;
                                        return acc;
                                    }, {}),
                                }}
                            </Card>
                        ))}
                    </div>
                    <div><hr className="my-16" /></div>

                    <div className="mt-16">
                        <Subtitle>JavaScript Portfolio</Subtitle>
                    </div>
                    <div className="description text-white sm:w-1/2 w-full mb-16">
                        It arises as a way to practice Javascript; this has also opened doors to technologies like Tailwind and Next.js. Here, you will find some of the basic projects that only include pure HTML and JavaScript.
                    </div>
                    <JavaScriptPortfolio></JavaScriptPortfolio>
                    <div className="flex gap-6 mt-72 mb-11">
                        <Message>Wow! You still here...</Message>
                        <Message>Ok let’s continue :D</Message>
                        <button className="text-white transition ease-in-out duration-75  hover:scale-125 rounded-full hover:bg-zinc-600/50 p-2">
                            <Link href='/tech'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </Link>
                        </button>
                    </div>



                </div>

            )}
        </div>
    );
};

export default Projects;