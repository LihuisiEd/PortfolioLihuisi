'use client'
import { useState } from 'react';

const OtherSkills = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-end text-white mt-11">
            <div className="w-3/4  px-10">
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="bg-zinc-800 border border-zinc-700 text-white p-6 text-lg rounded-lg focus:outline-none w-full text-left focus:shadow-outline"
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
                        <div className=" bg-zinc-800 border border w-full p-8 border-zinc-700 rounded-b-lg shadow-lg">
                            <div>

                                <div className="mb-2">Design</div>
                                <div className="flex items-center">
                                    <div className="p-2 bg-zinc-700 rounded-lg w-18">
                                        100%
                                    </div>
                                    <div className="secondary border border-zinc-700 w-full h-6 rounded-full ml-3" >
                                        <div className="technical-2 w-full h-6 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="my-2">Frontend</div>
                                <div className="flex items-center">
                                    <div className="p-2 bg-zinc-700 rounded-lg w-18">
                                        90%
                                    </div>
                                    <div className="secondary border border-zinc-700 w-full h-6 rounded-full ml-3" >
                                        <div className="technical-2 w-11/12 h-6 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="my-2">Backend</div>
                                <div className="flex items-center">
                                    <div className="p-2 bg-zinc-700 rounded-lg w-18">
                                        80%
                                    </div>
                                    <div className="secondary border border-zinc-700 w-full h-6 rounded-full ml-3" >
                                        <div className="technical-2 w-10/12 h-6 rounded-full"></div>
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
