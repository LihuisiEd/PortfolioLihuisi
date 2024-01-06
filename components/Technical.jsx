export default function Technical() {
    return (
        <div className="flex justify-end text-white mt-11">
            <div className="w-3/4  px-10">
                <div className='text-3xl text-white font-light w-fit'>
                    Technical
                    <hr className='py-6' />
                </div>
                <div>

                    <div className="mb-2">Design</div>
                    <div className="flex items-center">
                        <div className="p-2 bg-zinc-800 rounded-lg w-18">
                            100%
                        </div>
                        <div className="secondary border border-zinc-700 w-full h-6 rounded-full ml-3" >
                            <div className="technical w-full h-6 rounded-full"></div>
                        </div>
                    </div>

                    <div className="my-2">Frontend</div>
                    <div className="flex items-center">
                    <div className="p-2 bg-zinc-800 rounded-lg w-18">
                            90%
                        </div>
                        <div className="secondary border border-zinc-700 w-full h-6 rounded-full ml-3" >
                            <div className="technical w-11/12 h-6 rounded-full"></div>
                        </div>
                    </div>
                    <div className="my-2">Backend</div>
                    <div className="flex items-center">
                    <div className="p-2 bg-zinc-800 rounded-lg w-18">
                            80%
                        </div>
                        <div className="secondary border border-zinc-700 w-full h-6 rounded-full ml-3" >
                            <div className="technical w-10/12 h-6 rounded-full"></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}