export default function AuthTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div className="w-screen h-[10vh] bg-purple-100 text-black">
            <h1>This is the authentication heada</h1>
            <input type="text" placeholder="enter something" className="transition duration-300 ease-in focus:bg-black focus:text-white text-black bg-transparent border border-black p-2 m-2" />
        </div>
        {children}
        <div className="w-screen h-[10vh] bg-amber-100 text-black">
            <h1>This is the authentication foota</h1>
        </div>
    </div>

  );
}
