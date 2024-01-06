import Link from "next/link"

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link href="/">Go back to the homepage</Link>
        </div>
    )
}