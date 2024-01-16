import Divider from "./Divider"
export default function HeaderMini() {
    return (
        <div className="mt-">
            <div className="w-full flex flex-col justify-center items-center">
                <img src="favicon.svg" className="w-20 m-4" />
            <div className="text-2xl cursor-default font-bold">
                Eduardo Lihuisi S.
            </div>
            <div className="fullstack w-fit py-3 text-xs px-6 cursor-default my-4 mb-11 uppercase">
                Full-stack developer
            </div>
            </div>
            <Divider></Divider>

        </div>
    )
}