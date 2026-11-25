import Link from "next/link"

export default function NavBar() {
  return (
    <nav>
      <ul className="text-4xl flex gap-5 m-5 mt-3">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/works">WORKS</Link>
        </li>
        <li>
          <Link href="/api">API</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
        <li>
          <Link href="/authorization">AUTH</Link>
        </li>
      </ul>
    </nav>  
  );
}
