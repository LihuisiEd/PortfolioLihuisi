import Subtitle from "../Subtitle";
const SkeletonLoader = ({children}) => {

    const repeatedContent = [];

    for (let i = 0; i < 4; i++) {
        repeatedContent.push(
            <div key={i} className=" bg-zinc-950  border border-zinc-700 card-height rounded-lg animate-pulse">
                <div className="h-60 lg:h-96  w-full rounded-t-lg"></div>
                <div className="pb-4">
                    <div className="cursor-default">
                        <div className="my-4  w-full flex justify-center">
                            <div className="h-7 bg-gray-500/50 rounded-lg w-32"></div>
                        </div>
                        <div className="grid mx-6 gap-4 grid-cols-2 xl:grid-cols-3 text-center">
                            <div className=" bg-gray-500/50 col-start-1 rounded-lg py-1 h-6 px-4 "></div>
                            <div className=" bg-gray-500/50 rounded-lg py-1 h-7  px-4 "></div>
                            <div className=" bg-gray-500/50 rounded-lg py-1 h-7  px-4 "></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className=' text-3xl font-light w-fit cursor-default'>
                <Subtitle>{children}</Subtitle>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
                {repeatedContent}
            </div>
        </div>
    );
};

export default SkeletonLoader;