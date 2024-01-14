import Chip from "./Chip";
import Card from "./Card";

export default function HobbieGrid() {

    const javascriptData = [
        {
            title: 'Animation',
            chips: ['Krita', 'OpenToonz', 'LottieFiles', 'After Effects', 'Animate', 'Illustrator'],
        },
        {
            title: 'Branding Designer',
            chips: ['Illustrator', 'Photoshop', 'AdobeColor'],
        },
        {
            title: 'Character Designer',
            chips: ['Illustrator', 'Krita', 'Photoshop'],
        },
        {
            title: 'Digital Artist',
            chips: ['MediaBang', 'Krita', 'Photoshop'],
        },
    ];

    return (
        <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
            {javascriptData.map((data, index) => (
                <Card key={index}>
                    {{
                        title: data.title,
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