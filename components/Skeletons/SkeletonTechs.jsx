export default function SkeletonTechs() {
    return (
        <div>
            <div className='animate-pulse text-3xl  font-light w-fit cursor-default'>
                <div className="h-10 w-28 bg-zinc-600 rounded-lg"></div>
                <div className='animate-pulse py-4'> </div>
            </div>
            <div className="lg:mr-4">

                <div className='bg-zinc-950 border border-zinc-700 rounded-lg mb-11 animate-pulse'>
                    <div className="text-lg text-center w-full mt-6">Frontend</div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-6 my-6 mx-10">
                        {[...Array(6).keys()].map((index) => (
                            <div key={index} className="flex border relative border-zinc-700 pb-2 sm:pb-0 h-28  rounded-lg">

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}