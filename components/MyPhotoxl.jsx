'use client'
import Image from "next/image"
export default function MyPhotoxl() {
    return (
        <Image
            src={"/Frame 5.png"}
            width={500}
            height={500}
            className="transition-opacity opacity-0 duration-[2s] object-cover w-full h-full  rounded-lg bg-zinc-200 border border-zinc-700"
            onLoadingComplete={(image) =>
                image.classList.remove("opacity-0")
            }
        />
    )
}