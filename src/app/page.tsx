import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-24">
      <ul>
        <li><Link href={"/about"} >About</Link></li>
        <li><Link href={"/blog"} >blog</Link></li>
        <li><Link href={"/documentation"} >Docs</Link></li>
        <li><Link href={"/dash"} >Dashboard</Link></li>
      </ul>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </main>
  );
}
