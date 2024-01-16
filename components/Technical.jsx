import Subtitle from "./Subtitle"
export default function Technical() {
    return (
        <div className="flex sm:justify-end  mt-11">
            <div className="sm:w-3/4 w-full  sm:px-10">
                <Subtitle>Technical Skills</Subtitle>
                <div className="cursor-default">

                    <div className="mb-2">Design</div>
                    <div className="flex items-center">
                        <div className="p-2 bg-zinc-800 rounded-lg w-16 text-center">
                            100%
                        </div>
                        <div className="bg-zinc-900  w-full h-4 rounded-full ml-3" >
                            <div className="bg-purple-500 technical w-full h-4 rounded-full transition ease-in-out  hover:bg-purple-300"></div>
                        </div>
                    </div>

                    <div className="my-2">Frontend</div>
                    <div className="flex items-center">
                        <div className="p-2 bg-zinc-800 rounded-lg w-16 text-center">
                            90%
                        </div>
                        <div className="bg-zinc-900  w-full h-4 rounded-full ml-3" >
                            <div className="bg-purple-500 technical w-11/12 h-4 rounded-full transition ease-in-out  hover:bg-purple-300"></div>
                        </div>
                    </div>
                    <div className="my-2">Backend</div>
                    <div className="flex items-center">
                        <div className="p-2 bg-zinc-800 rounded-lg w-16 text-center">
                            80%
                        </div>
                        <div className="bg-zinc-900  w-full h-4 rounded-full ml-3" >
                            <div className="bg-purple-500 technical w-11/12 h-4 rounded-full transition ease-in-out  hover:bg-purple-300"></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}