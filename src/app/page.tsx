import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-24">
      <ul>
        <li><Link href={"/about"} >About</Link></li>
        <li><Link href={"/blog"} >blog</Link></li>
        <li><Link href={"/documentation"} >Docs</Link></li>
      </ul>
      <button className="hover:-translate-y-1 hover:border-red-600 transition duration-300 hover:bg-white hover:text-black border border-white px-3 py-1 text-white" >Login</button>
      <h1>Hello world</h1>
    </main>
  );
}
