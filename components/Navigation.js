import Link from "next/link";

export default function Navigation({ children }) {
  return (
    <div>
      <h1>Navigation Pages To ART GALLERY</h1>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">ArtPieces List</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export function Layout({ children }) {
  return <Navigation>{children}</Navigation>;
}
