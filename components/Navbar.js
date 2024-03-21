import Link from "next/link"
export default function Navbar(){
    return (
        <nav>
            <div>
                <h1>AIWA</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contacts">Contact</Link>
        </nav>
    )
}