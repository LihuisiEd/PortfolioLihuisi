export default function Chip({children}) {
    return (
        <div className="border border-zinc-700 rounded-lg py-1 text-sm px-4 transition ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-zinc-600 hover:border-white">
            {children}
        </div>
    )
} 