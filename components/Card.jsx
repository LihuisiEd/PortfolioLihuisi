import Chip from "./Chip"
import Image from "next/image";
export default function Card({ children }) {
    const { title, image, href, ...chips } = children;

    return (
        <div className="bg-zinc-950 card-height border border-zinc-700 rounded-lg">
            <a href={href} target="blank" className="brightness-50 hover:brightness-100 transition duration-300">
                <div className="h-60 lg:h-96 bg-cover rounded-t-lg overflow-hidden">
                    <Image
                        src={image}
                        width={500}
                        height={400}
                        alt={title}
                        className="transition-opacity opacity-0 duration-[2s] w-full"
                        onLoadingComplete={(image) =>
                            image.classList.remove("opacity-0")
                        }
                    />
                </div>
            </a>


            <div className="">
                <div className="cursor-default">

                    <div className="my-4 flex justify-center">
                        {title}
                    </div>
                    <div className="grid mx-6 gap-4 grid-cols-2 xl:grid-cols-3 pb-4 text-center">
                        {Object.values(chips).map((chip, index) => (
                            <div key={index}>
                                <Chip>{chip}</Chip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}