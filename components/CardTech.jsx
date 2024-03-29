'use client'
import Image from 'next/image'
export default function CardTech({ children }) {
    const { title, svg, href } = children;
    return (
        <div className="transition ease-in-out duration-300  hover:shadow-lg rounded-lg hover:shadow-white/10">
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg hover:bg-gradient-to-b from-zinc-700 to-transparent hover:border-white h-52 ">
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <a href={href} target='blank' className='w-fit' >
                        <div className="px-9 my-6">
                            <Image
                                src={svg}
                                width={64}
                                height={64}
                                alt={title}
                                className="transition-opacity opacity-0 duration-[2s] w-full"
                                onLoadingComplete={(image) =>
                                    image.classList.remove("opacity-0")
                                }
                            />
                        </div>
                        <div >
                            {title}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}