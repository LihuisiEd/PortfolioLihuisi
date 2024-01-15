'use client'
import Image from "next/image"
export default function MyPhoto() {
    return (
        <Image
            src={"/Frame 5.png"}
            width={500}
            height={500}
            className="transition-opacity opacity-0 duration-[2s] object-cover w-full sm:w-2/4 bg-zinc-200 rounded-lg border border-zinc-700"
            onLoadingComplete={(image) =>
                image.classList.remove("opacity-0")
            }
        />
    )
}