import Subtitle from "./Subtitle"
import Header from "./Header"
export default function MeCard() {
    return (
        <div className="mt-11 lg:h-72">
            <div className="lg:hidden">
                <Header/>
            </div>
            <div className="sm:hidden w-full aspect-w-1 mb-11 sm:mb-0 aspect-h-1">
                <img src="/Frame 5.png" alt="Selfie" className="object-cover w-full sm:w-2/4  rounded-lg photo border border-zinc-700" />
            </div>
            <div className="flex">
                <div className="w-1/4 aspect-w-1 aspect-h-1 hidden sm:block">
                    <img src="/Frame 5.png" alt="Selfie" className="object-cover w-full h-full  rounded-lg photo border border-zinc-700" />
                </div>
                <div className='relative flex flex-col justify-around lg:px-10 w-full sm:w-3/4'>
                    <div className='w-full sm:px-10 lg:px-0'>
                        <Subtitle>About me</Subtitle>
                        <div className="cursor-default">
                            Upcoming graduate from the Software Design and Development program with expertise in creating database structures, designing dynamic and static web environments for cloud-based management or storage, and developing mobile applications for Android and iOS. Possesses problem-solving abilities, effective communication skills, and adaptability.
                        </div>
                    </div>

                    <div className="sm:mx-10 lg:mx-0">
                        <a href="https://www.linkedin.com/in/eduardo-lihuisi-476520222/overlay/1704989099986/single-media-viewer/?profileId=ACoAADf2QJoBHpsMsKjfLdFbSXdItngzkvwoPEs" target="blank">
                            <button className='transition ease-in-out hover:scale-105 duration-300 border-zinc-700 hover:bg-gradient-to-b from-zinc-800 to-transparent hover:border-white  bg-zinc-950 border-2 rounded-lg hover:shadow-lg w-64 hover:shadow-white/10 py-3 px-6'>My CV</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}