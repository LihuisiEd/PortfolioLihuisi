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
        <div className='bg-zinc-950/50 border border-zinc-700 rounded-lg mb-16'>
            <div className="text-lg text-center w-full mt-6">Backend</div>
            <div className="grid grid-cols-3 gap-6 my-16">
                {techs_backend.map((tech, index) => (
                    <div key={index} className="flex">
                        <div className="w-1/2  flex justify-center">
                            <div className="relative self-center">
                                <Image
                                    src={tech.svg}
                                    width={96}
                                    height={96}
                                    alt={tech.name}
                                />
                                <div className="absolute inset-0 w-24 h-24">
                                    <div className="text-center py-8">
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