import CardTech from "./CardTech"
import Subtitle from "./Subtitle"
import Message from "./Message"
export default function Media() {
    const mediaData = [
        {
            title: 'LinkedIn',
            svg: '/linkedin-icon.svg',
            href: 'https://www.linkedin.com/in/eduardo-lihuisi-476520222/'
        },
        {
            title: 'Github',
            svg: '/github-icon.svg',
            href: 'https://github.com/LihuisiEd'
        },
        {
            title: 'Instagram',
            svg: '/instagram-icon.svg',
            href: 'https://www.instagram.com/eddiancito/'
        },
        {
            title: 'Tiktok',
            svg: '/tiktok-icon.svg',
            href: 'https://www.tiktok.com/@lucitoartitrista'
        },
        
    ]
    return (
        <div className="flex sm:justify-end  mt-11">
            <div className="sm:w-3/4 w-full  sm:px-10">
                <div>
                    <Subtitle>Find me on</Subtitle>
                </div>

                <div className="grid grid-cols-2   md:grid-cols-3 gap-4">
                    {mediaData.map((tech, index) => (
                        <CardTech key={index}>
                            {{
                                title: tech.title,
                                svg: tech.svg,
                                href: tech.href
                            }}
                        </CardTech>
                    ))}
                </div>
                <div className="my-11">
                <Message>Hey! Thanks for scrolling ma’ dude! :D</Message>
                </div>

            </div>


        </div>
    )
}