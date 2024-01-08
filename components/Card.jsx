import Chip from "./Chip"
export default function Card({ children }) {
    const { title, ...chips } = children;

    return (
        <div className="bg-zinc-950 card-height border border-zinc-700 rounded-lg text-white">
            <div className="h-4/6 bg-gray-500/50 w-full rounded-t-lg">
                
            </div>
            <div className="h-2/6">
                <div className="cursor-default">

                    <div className="my-4 flex justify-center">
                        {title}
                    </div>
                    <div className="grid mx-6 gap-4 grid-cols-3 text-center">
                        {Object.values(chips).map((chip, index) => (
                            <div key={index}>
                                <Chip>{chip}</Chip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}