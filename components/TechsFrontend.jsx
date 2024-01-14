import Image from 'next/image'
export default function TechFrontend() {
    const techs_frontend = [
        {
            name: "HTML",
            svg: "/puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "CSS",
            svg: "puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "Javascript",
            svg: "puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "Tailwind CSS",
            svg: "puntos/100puntos.svg",
            percentage: "100%",
        },
        {
            name: "Boostrap",
            svg: "puntos/95puntos.svg",
            percentage: "95%",
        },
        {
            name: "Next.js",
            svg: "puntos/95puntos.svg",
            percentage: "95%",
        },
        {
            name: "React Native",
            svg: "puntos/95puntos.svg",
            percentage: "95%",
        },
        {
            name: "Vue.js",
            svg: "puntos/80puntos.svg",
            percentage: "80%",
        },
        {
            name: "Angular",
            svg: "puntos/80puntos.svg",
            percentage: "80%",
        },
    ];
    return (
        <div className='bg-zinc-950 border border-zinc-700 rounded-lg mb-11'>
            <div className="text-lg text-center w-full mt-6">Frontend</div>
            <div className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-6 my-6 mx-10">
                {techs_frontend.map((tech, index) => (
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