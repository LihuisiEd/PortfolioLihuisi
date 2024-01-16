import Chip from "./Chip";
import Card from "./Card";

export default function HobbieGrid() {

    const javascriptData = [
        {
            title: 'Animation',
            chips: ['Krita', 'OpenToonz', 'LottieFiles', 'After Effects', 'Animate', 'Illustrator'],
            image: '/hobbies/animation.jpg'
        },
        {
            title: 'Branding Designer',
            chips: ['Illustrator', 'Photoshop', 'AdobeColor'],
            image: '/hobbies/branding.jpg'
        },
        {
            title: 'Character Designer',
            chips: ['Illustrator', 'Krita', 'Photoshop'],
            image: '/hobbies/character-design.jpg'
        },
        {
            title: 'Digital Artist',
            chips: ['MediaBang', 'Krita', 'Photoshop'],
            image: '/hobbies/illustration.jpg'
        },
    ];

    return (
        <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
            {javascriptData.map((data, index) => (
                <Card key={index}>
                    {{
                        title: data.title,
                        image: data.image,
                        ...data.chips.reduce((acc, chip, chipIndex) => {
                            acc[`chip${chipIndex + 1}`] = chip;
                            return acc;
                        }, {}),
                    }}
                </Card>
            ))}
        </div>
    )
}