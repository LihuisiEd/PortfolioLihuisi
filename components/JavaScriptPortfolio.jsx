import Chip from "./Chip";
import Card from "./Card";

export default function JavaScriptPortfolio() {

    const javascriptData = [
        {
            title: 'ToDoo',
            chips: ['Html 5', 'JavaScript', 'TailwindCSS'],
        },
        {
            title: 'Hell-mmerce',
            chips: ['Html 5', 'JavaScript', 'TailwindCSS'],
        },
        {
            title: 'GuessNumber',
            chips: ['Html 5', 'JavaScript', 'TailwindCSS'],
        },
    ];

    return (
        <div className="grid gap-6  grid-cols-2">
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
            <div className="grid gap-6 grid-cols-2 text-white">
                <div className="col-span-2 border  border-zinc-600 rounded-lg bg-zinc-950">
                    <div className="py-4 flex justify-center items-center h-3/5">Fibonacci</div>
                    <div className="grid grid-cols-3 gap-4 w-full  px-6 text-center">
                        <Chip>Html 5</Chip>
                        <Chip>JavaScript</Chip>
                        <Chip>TailwindCSS</Chip>
                    </div>
                </div>

                <div className="border col-span-2  border-zinc-600 rounded-lg h-full flex justify-center items-center bg-zinc-950">
                    <div className="flex flex-col items-center justify-center h-full">
                        <div >
                            Github
                        </div>
                        <div className="m-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        </div>
                        <div>
                            <div className="border border-zinc-700 rounded-lg py-1 text-sm px-4 transition ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-zinc-600 hover:border-white">
                                <a href="https://github.com/LihuisiEd" target="_blank">Portfolio on Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}