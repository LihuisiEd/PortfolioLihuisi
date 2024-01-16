import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col h-96 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>

            <h1>404</h1>
            <h2>Page not found</h2>
            <button className="fullstack px-4 py-2 w-fit m-6 hover:border hover:border-white">
                <Link href="/">Go back to the homepage</Link>
            </button>
        </div>
    )
}