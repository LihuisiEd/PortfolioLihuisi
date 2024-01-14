import Image from 'next/image'
export default function TechBackend() {
    const techs_backend = [
        {
            name: "Node.js",
            svg: "/puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "Express.js",
            svg: "puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "Django",
            svg: "puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "Flask",
            svg: "puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "Kotlin",
            svg: "puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "Docker",
            svg: "puntos/95puntos.svg",
            percentage: "95%",
        },
        {
            name: "Firebase",
            svg: "puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "AWS",
            svg: "puntos/90puntos.svg",
            percentage: "90%",
        },
        {
            name: "Laravel",
            svg: "puntos/80puntos.svg",
            percentage: "80%",
        },
    ];
    return (
        <div className='bg-zinc-950 border border-zinc-700 rounded-lg mb-11'>
            <div className="text-lg text-center w-full mt-6">Backend</div>
            <div className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-6 my-6 mx-10">
                {techs_backend.map((tech, index) => (
                    <div key={index} className="flex border relative border-zinc-700 pb-2 sm:pb-0 rounded-lg">
                        <div className="w-1/2  flex justify-center">
                            <div className="self-center m-5 sm:m-4">
                                <Image
                                    src={tech.svg}
                                    width={84}
                                    height={80}
                                    alt={tech.name}
                                />

                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center text-xs sm:text-base h-full justify-start">
                                {tech.name}
                            </div>
                        </div>
                        <div className="absolute bottom-0 sm:top-0 mb-2  w-1/2">
                            <div className="text-center text-xs sm:text-base sm:py-11">
                                {tech.percentage}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}