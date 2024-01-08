import Subtitle from "./Subtitle"
import Message from "./Message"
import Image from "next/image"

export default function SocialMedia() {
    return (
        <div className="flex justify-end  my-11">
            <div className="w-3/4  px-10">
                <Subtitle>Social Media</Subtitle>
                <div className="flex gap-4">
                    <button className="transition ease-in-out hover:scale-105 duration-300  hover:shadow-lg rounded-lg hover:shadow-white/10 ">
                        <div className="transition ease-in-out bg-zinc-950 border border-zinc-700 rounded-lg hover:bg-gradient-to-b from-zinc-800 to-transparent w-52 h-52 hover:border-white">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="m-6">
                                    <Image
                                        src='/linkedin-icon.svg'
                                        width={70}
                                        height={70}
                                        alt='LinkedIn'
                                    />
                                </div>
                                <div >
                                    LinkedIn
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="transition ease-in-out hover:scale-105 duration-300  hover:shadow-lg rounded-lg hover:shadow-white/10">
                        <div className="bg-zinc-950 border border-zinc-700 rounded-lg hover:bg-gradient-to-b from-zinc-800 to-transparent hover:border-white w-52 h-52 ">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="m-6">
                                    <Image
                                        src='/instagram-icon.svg'
                                        width={70}
                                        height={70}
                                        alt='Instagram'
                                    />
                                </div>
                                <div >
                                    Instagram
                                </div>
                            </div>
                        </div>
                    </button>

                    <button className="transition ease-in-out hover:scale-105 duration-300  hover:shadow-lg rounded-lg hover:shadow-white/10">
                        <div className="bg-zinc-950 border border-zinc-700 rounded-lg w-52 h-52 hover:bg-gradient-to-b from-zinc-800 to-transparent hover:border-white">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="m-6">
                                    <Image
                                        src='/tiktok-icon.svg'
                                        width={70}
                                        height={70}
                                        alt='TikTok'
                                    />
                                </div>
                                <div >
                                    TikTok
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="mt-16">
                    <Message>Hey! Thanks for scrolling ma' dude! :D</Message>
                </div>
            </div>
        </div>
    )
}