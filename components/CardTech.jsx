import Image from 'next/image'
export default function CardTech({ children }) {
    const { title, svg, href } = children;
    return (
        <div className="transition ease-in-out hover:scale-105 duration-300  hover:shadow-lg rounded-lg hover:shadow-white/10">
            <div className="bg-zinc-950 border border-zinc-700 rounded-lg hover:bg-gradient-to-b from-zinc-800 to-transparent hover:border-white h-52 ">
                <div className="flex flex-col items-center justify-center h-full">
                    <a href={href} className='text-center'>
                    <div className="m-6">
                        <Image
                            src={svg}
                            width={64}
                            height={64}
                            alt={title}
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