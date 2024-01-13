import Message from "./Message";
import Link from "next/link";
import CardTech from "./CardTech"
export default function OtherTechs() {
    const other_techs = [
        {
            title: 'Jetpack Compose',
            svg: '/techs/jetpackcompose.svg'
        },
        {
            title: 'Dart',
            svg: '/techs/dartlang-icon.svg'
        },
        {
            title: 'MySQL',
            svg: '/techs/mysql-icon.svg'
        },
        {
            title: 'Swift',
            svg: '/techs/swift-icon.svg'
        },
        {
            title: 'Figma',
            svg: '/techs/figma-icon.svg'
        },
        {
            title: 'MongoDB',
            svg: '/techs/mongodb-icon.svg'
        },
    ]
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 mx-4">
                {other_techs.map((tech, index) => (
                    <CardTech key={index}>
                        {{
                            title: tech.title,
                            svg: tech.svg
                        }}
                    </CardTech>
                ))}
            </div>
            <div className="flex gap-6 mt-52 mb-11">
                <Message>Any message this time :D</Message>
                <button className="text-white transition ease-in-out duration-75  hover:scale-125 rounded-full hover:bg-zinc-600/50 p-2">
                    <Link href='/hobbies'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </Link>
                </button>
            </div>
        </div>
    )
}