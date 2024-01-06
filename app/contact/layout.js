import Link from "next/link";

export const metadata = {
    title: 'Contactanos'
}

export default function ContactLayout({ children }) {
    return <>
        Visit my linkedin!
        <nav>
            <Link href='/'>Contact</Link>
            <Link href='/contact/linkedin'>Linkedin</Link>
        </nav>

        {children}
    </>
}