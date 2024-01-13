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
        <div className='bg-zinc-950/50 border border-zinc-700 rounded-lg mb-11'>
            <div className="text-lg text-center w-full mt-6">Frontend</div>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-6 my-6 mx-10">
                {techs_frontend.map((tech, index) => (
                    <div key={index} className="flex border border-zinc-700  rounded-lg">
                        <div className="w-1/2  flex justify-center">
                            <div className="relative self-center m-4">
                                <Image
                                    src={tech.svg}
                                    width={80}
                                    height={80}
                                    alt={tech.name}
                                />
                                <div className="absolute inset-0 w-20 h-20">
                                    <div className="text-center py-6">
                                        {tech.percentage}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center h-full justify-start">
                                {tech.name}
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}