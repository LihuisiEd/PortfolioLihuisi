import Subtitle from "../Subtitle"
export default function SkeletonTechs() {
    const repeatedContent = [];

    for (let i = 0; i < 9; i++) {
        repeatedContent.push(
            <div className="bg-zinc-900 flex h-28 border relative border-zinc-700 pb-2 sm:pb-0 rounded-lg transition duration-100 hover:bg-gradient-to-b from-zinc-700 to-transparent hover:border-white animate-pulse ">
                <div className="w-1/2  flex justify-center">
                    <div className="self-center m-5 sm:m-4">


                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex items-center text-xs sm:text-base h-full justify-start pr-4">

                    </div>
                </div>
                <div className="absolute bottom-0 sm:top-0 mb-2  w-1/2">
                    <div className="text-center text-xs sm:text-base sm:py-11">

                    </div>
                </div>

            </div>
        );
    }
    return (
        <div className='mb-11'>
            <Subtitle>Techs</Subtitle>
            <div className="text-lg text-center w-full">Frontend</div>
            <div className="grid grid-cols-2 sm:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-6 my-6 sm:my-6 sm:mx-10">
                {repeatedContent}

            </div>

        </div>
    )
}