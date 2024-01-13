'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderMini from './HearderMini';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()
    const closeMenu = () => {
        setIsOpen(false);
    };
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden relative z-40">
            <button
                className="absolute transition ease-in-out duration-75 p-4 right-0 top-0 "
                onClick={toggleMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="none">
                    <path d="M1.03571 4.59184H27.9643C28.5363 4.59184 29 4.13501 29 3.57143V1.02041C29 0.456824 28.5363 0 27.9643 0H1.03571C0.463676 0 0 0.456824 0 1.02041V3.57143C0 4.13501 0.463676 4.59184 1.03571 4.59184ZM1.03571 14.7959H27.9643C28.5363 14.7959 29 14.3391 29 13.7755V11.2245C29 10.6609 28.5363 10.2041 27.9643 10.2041H1.03571C0.463676 10.2041 0 10.6609 0 11.2245V13.7755C0 14.3391 0.463676 14.7959 1.03571 14.7959ZM1.03571 25H27.9643C28.5363 25 29 24.5432 29 23.9796V21.4286C29 20.865 28.5363 20.4082 27.9643 20.4082H1.03571C0.463676 20.4082 0 20.865 0 21.4286V23.9796C0 24.5432 0.463676 25 1.03571 25Z" fill="white" />
                </svg>
            </button>

            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <div className="absolute top-0 overflow-auto flex flex-col h-screen w-2/3 sm:w-2/5 bg-zinc-950  p-8">
                    <div>
                        <div>
                            <HeaderMini/>
                        </div>
                        <div className="mt-11">
                            <nav className="flex flex-col w-full h-2/5 justify-evenly">
                                <Link href="/" onClick={closeMenu}
                                    className={`link ${pathname === '/' ? 'active transition ease-in-out hover:scale-105' : 'transition ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-zinc-600 rounded-full'}`}>
                                    <div className="flex p-3 mx-4 ">
                                        {pathname === '/' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                                            </svg>
                                        )}
                                        <div className="ml-2 ">
                                            About me
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/projects" onClick={closeMenu}
                                    className={`link ${pathname === '/projects' ? 'active transition ease-in-out hover:scale-105' : 'transition ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-zinc-600 rounded-full'}`}>
                                    <div className="flex p-3 mx-4">
                                        {pathname === '/projects' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                                                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                        )}
                                        <div className="ml-2">
                                            Projects
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/tech" onClick={closeMenu}
                                    className={`link ${pathname === '/tech' ? 'active transition ease-in-out hover:scale-105' : 'transition ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-zinc-600 rounded-full'}`}>
                                    <div className="flex p-3 mx-4">
                                        {pathname === '/tech' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-brush-fill" viewBox="0 0 16 16">
                                                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
                                                <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.1 6.1 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.1 8.1 0 0 1-3.078.132 4 4 0 0 1-.562-.135 1.4 1.4 0 0 1-.466-.247.7.7 0 0 1-.204-.288.62.62 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896q.19.012.348.048c.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04M4.705 11.912a1.2 1.2 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.4 3.4 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3 3 0 0 0 .126-.75zm1.44.026c.12-.04.277-.1.458-.183a5.1 5.1 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005zm3.582-3.043.002.001h-.002z" />
                                            </svg>
                                        )}
                                        <div className="ml-2">
                                            Tech
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/hobbies" onClick={closeMenu}
                                    className={`link ${pathname === '/hobbies' ? 'active transition ease-in-out hover:scale-105' : 'transition ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-zinc-600 rounded-full'}`}>
                                    <div className="flex p-3 mx-4">
                                        {pathname === '/hobbies' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                                                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                                            </svg>
                                        )}
                                        <div className="ml-2">
                                            Hobbies
                                        </div>
                                    </div>
                                </Link>

                                <Link href="/contact" onClick={closeMenu}
                                    className={`link ${pathname === '/contact' ? 'active transition ease-in-out hover:scale-105' : 'transition ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-zinc-600 rounded-full'}`}>
                                    <div className="flex p-3 mx-4">
                                        {pathname === '/contact' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                            </svg>
                                        )}
                                        <div className="ml-2">
                                            Contact
                                        </div>
                                    </div>
                                </Link>
                                <div className="transition ease-in-out hover:scale-105 mx-12 mb-4 bg-zinc-700 hover:bg-zinc-600 rounded-lg px-4 py-2">
                                    <Link href="/posts">Posts - Portfolio v2.0</Link>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
