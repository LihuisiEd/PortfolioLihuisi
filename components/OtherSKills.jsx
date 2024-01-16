'use client'
import { useState } from 'react';

const OtherSkills = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex sm:justify-end  mt-11">
            <div className="sm:w-3/4 w-full sm:px-10">
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="transition ease-in-out duration-300 hover:bg-gradient-to-b hover:scale-105 from-zinc-700 to-transparent bg-zinc-900 border border-zinc-700 text-white p-6 text-lg rounded-lg focus:outline-none w-full text-left focus:shadow-outline hover:shadow-lg rounded-lg hover:shadow-white/10 hover:border-white"
                    >
                        Other Skills
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill inline-block ml-1" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill inline-block ml-1" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        )}
                    </button>

                    {isOpen && (
                        <div className=" bg-zinc-900 border w-full p-8 mt-2  border-zinc-700 rounded-lg shadow-lg">
                            <div className='cursor-default'>

                                <div className="mb-2">Illustration</div>
                                <div className="flex items-center">
                                    <div className="p-2 bg-zinc-700 rounded-lg w-16 text-center">
                                        100%
                                    </div>
                                    <div className="bg-zinc-950  w-full h-4 rounded-full ml-3" >
                                        <div className="bg-blue-400 technical-2 w-full h-4 rounded-full transition ease-in-out  hover:bg-blue-300"></div>
                                    </div>
                                </div>

                                <div className="my-2">Animation</div>
                                <div className="flex items-center">
                                    <div className="p-2 bg-zinc-700 rounded-lg w-16 text-center">
                                        90%
                                    </div>
                                    <div className="bg-zinc-950  w-full h-4 rounded-full ml-3" >
                                        <div className="bg-blue-400 technical-2 w-11/12 h-4 rounded-full transition ease-in-out  hover:bg-blue-300"></div>
                                    </div>
                                </div>
                                <div className="my-2">Multimedia Editing</div>
                                <div className="flex items-center">
                                    <div className="p-2 bg-zinc-700 rounded-lg w-16 text-center">
                                        80%
                                    </div>
                                    <div className="bg-zinc-950  w-full h-4 rounded-full ml-3" >
                                        <div className="bg-blue-400 technical-2 w-10/12 h-4 rounded-full transition ease-in-out  hover:bg-blue-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OtherSkills;
