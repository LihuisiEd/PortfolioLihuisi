'use client'
import Message from "@/components/Message";
import { useState } from 'react';
import Subtitle from "@/components/Subtitle"
import Image from "next/image"
export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    };
    const contactMethods = [
        { src: '/contact/email-icon.svg', alt: 'Email', link: 'mailto:eduardo.lihuisi@tecsup.edu.pe' },
        { src: '/contact/linkedin-contact.svg', alt: 'LinkedIn', link: 'https://www.linkedin.com/in/eduardo-lihuisi-476520222/' },
        { src: '/contact/telegram-icon.svg', alt: 'Telegram', link: 'https://t.me/LihuisiEd' },
        { src: '/contact/whatsapp-icon.svg', alt: 'WhatsApp', link: 'https://wa.me/51950338023' },
    ];
    return (
        <div className="mt-28 sm:w-2/3 mx-5 lg:mx-0">
            <Subtitle>Contact</Subtitle>
            <div className="bg-zinc-950 border h-20 sm:h-28 border-zinc-700 rounded-lg">
                <div className="flex justify-around p-4 sm:p-8">
                    {contactMethods.map((method, index) => (
                        <div key={index}>
                            <a href={method.link} target="_blank" rel="noopener noreferrer">
                                <Image src={method.src} width={40} height={40} alt={method.alt} className="transition-opacity opacity-0 duration-[2s] cursor-pointer w-full"
                                    onLoadingComplete={(image) =>
                                        image.classList.remove("opacity-0")
                                    } />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-11">
                <Subtitle>Send me a message</Subtitle>
                <div className="bg-zinc-950 border border-zinc-700 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-end p-5 sm:p-10">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="transition ease-in-out duration-300 p-6 bg-zinc-800 rounded-lg w-full mb-4 border border-zinc-700 hover:bg-zinc-700"
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="transition ease-in-out duration-300 p-6 bg-zinc-800 rounded-lg w-full border border-zinc-700 hover:bg-zinc-700"
                                />
                                <textarea
                                    type="text"
                                    placeholder="Message"
                                    className="transition ease-in-out duration-300 p-6 bg-zinc-800 rounded-lg w-full mt-4 border min-h-32 sm:min-h-24 border-zinc-700 hover:bg-zinc-700"
                                />
                                <div className="sm:mx-10 lg:mx-0">
                                    <button
                                        type="submit"
                                        className="transition ease-in-out hover:scale-105 duration-300 border-zinc-700 hover:bg-gradient-to-b from-zinc-800 to-transparent hover:border-white bg-zinc-950 border-2 rounded-lg hover:shadow-lg w-fit hover:shadow-white/10 py-3 mt-4 px-6 float-right"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="h-96 mt-60 flex flex-col gap-4 justify-center items-center">
                <div>
                    All this site was made for me, Eduardo Lihuisi
                </div>
                <div>
                    <Message>That’s all buddy, see you later ;D</Message>
                </div>

            </div>
        </div>
    )
}