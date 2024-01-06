export default function MeCard() {
    return (
        <div className="mt-11 h-72">
            <div className="flex text-white">
                <div className="w-1/4 aspect-w-1 aspect-h-1">
                    <img src="/selfie.jpeg" alt="Selfie" className="object-cover w-72 h-72 rounded-lg" />
                </div>
                <div className='relative flex flex-col justify-around px-10 w-3/4'>
                    <div className='w-full'>
                        <div className='text-3xl font-light w-fit'>
                            About me
                            <hr className='py-4'/>
                        </div>
                        <div>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis debitis iure in. Voluptates possimus assumenda expedita atque ab saepe provident? Dignissimos, illo quibusdam. Eveniet, atque placeat! Tempora, omnis cumque!
                        </div>
                    </div>

                    <div>
                        <button className='transition ease-in-out hover:scale-105 duration-300 border-zinc-700 hover:bg-gradient-to-b from-zinc-800 to-transparent hover:border-white  bg-zinc-950 border-2 rounded-lg hover:shadow-lg w-64 hover:shadow-white/10 py-3 px-6'>My CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}