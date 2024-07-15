import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-24">
      <ul>
        <li><Link href={"/about"} >About</Link></li>
        <li><Link href={"/blog"} >blog</Link></li>
        <li><Link href={"/documentation"} >Docs</Link></li>
      </ul>
      <h1>Hello world</h1>
    </main>
  );
}
