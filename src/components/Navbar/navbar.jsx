import Link from "next/link";

const NavBar = () =>
{
    return(
        <div>
            <ul className="flex">
                <li><Link href="/" className="m-2">Home</Link></li>
                <li><Link href="/about" className="m-2">About</Link></li>
                <li><Link href="/services" className="m-2">Services</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;