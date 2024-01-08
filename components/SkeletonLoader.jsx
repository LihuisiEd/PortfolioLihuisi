const SkeletonLoader = () => {

    const repeatedContent = [];

    for (let i = 0; i < 4; i++) {
        repeatedContent.push(
            <div key={i} className="animate-pulse bg-zinc-600/50 card-height rounded-lg">
                <div className="h-4/6 bg-zinc-800/50 w-full rounded-t-lg"></div>
                <div className="h-2/6">
                    <div className="cursor-default">
                        <div className="grid mx-6 gap-4 grid-cols-3 text-center">
                            <div className="animate-pulse bg-gray-500/50 col-start-2 my-4 col-span-1 rounded-lg py-1 h-6 px-4 "></div>
                            <div className="animate-pulse bg-gray-500/50 col-start-1 rounded-lg py-1 h-6 px-4 "></div>
                            <div className="animate-pulse bg-gray-500/50 rounded-lg py-1 h-6  px-4 "></div>
                            <div className="animate-pulse bg-gray-500/50 rounded-lg py-1 h-6  px-4 "></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className='animate-pulse text-3xl text-white font-light w-fit cursor-default'>
                <div className="h-9 w-96 bg-zinc-600/50 rounded-lg"></div>
                <div className='animate-pulse py-6'> </div>
            </div>
            <div className="grid gap-6 grid-cols-2">
                {repeatedContent}
            </div>
        </div>
    );
};

export default SkeletonLoader;