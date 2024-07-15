export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div className="w-screen h-[10vh] bg-purple-100 text-black">
            <h1>This is the authentication heada</h1>
        </div>
        {children}
        <div className="w-screen h-[10vh] bg-amber-100 text-black">
            <h1>This is the authentication foota</h1>
        </div>
    </div>

  );
}
