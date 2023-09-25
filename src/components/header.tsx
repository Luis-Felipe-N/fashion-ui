export function Header() {
  return (
    <header className="max-w-6xl mx-auto px-8 py-12 w-full items-center justify-between text-sm lg:flex">
      <img src="/logo.png" alt="" />

      <nav className=" gap-12 items-center hidden lg:flex">
        <ul className="flex gap-16 font-medium">
          <li>CATALOGUE</li>
          <li>FASHION</li>
          <li>FAVOURITE</li>
          <li>LIFESTYLE</li>
        </ul>
        <button className="text-slate-50 bg-slate-950 p-4 px-8 rounded-lg">
          SIGN UP
        </button>
      </nav>
    </header>
  )
}
