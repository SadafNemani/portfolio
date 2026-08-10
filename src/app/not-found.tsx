import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div>
      <h1>404 – Page not found</h1>
      <Link href="/">Go home</Link>
    </div>
  );
}
