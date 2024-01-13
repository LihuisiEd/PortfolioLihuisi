export default function SkeletonTechs() {
    return (
        <div className="pr-10">
            <div className='animate-pulse text-3xl text-white font-light w-fit cursor-default'>
                <div className="h-9 w-24 bg-zinc-600/50 rounded-lg"></div>
                <div className='animate-pulse py-6'> </div>
            </div>
            <div className='bg-zinc-950/50 border border-zinc-700 rounded-lg mb-11'>
                <div className="flex justify-center">
                    <div className="animate-pulse bg-gray-500/50 rounded-lg py-4 mt-6 w-32"></div>
                </div>

                <div className="grid grid-cols-3 gap-6 my-6">
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10 p-12"></div>
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10"></div>
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10"></div>
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10 p-12"></div>
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10"></div>
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10"></div>
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10 p-12"></div>
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10"></div>
                    <div className="animate-pulse bg-gray-500/50 rounded-lg mx-10"></div>
                </div>

            </div>
        </div>
    )
}