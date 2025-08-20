import { Link, NavLink } from 'react-router'

export default function Header () {
  return (
    <header className="sticky top-0 z-10 py-5 px-4 flex items-center justify-between bg-red-500 shadow-lg text-white">
      <Link to="/" className="max-w-60">
        Here goes logo
      </Link>

      <nav className="flex items-center gap-6">
        <NavLink
          to="/color-switcher"
          className={({ isActive }) =>
            [
              "pb-4 border-b-[3px]",
              isActive ? "border-yellow-500" : "border-b-transparent",
            ].join(" ")
          }
        >
          Color switcher
        </NavLink>

        <NavLink
          to="/repository-list"
          className={({ isActive }) =>
            [
              "pb-4 border-b-[3px]",
              isActive ? "border-yellow-500" : "border-b-transparent",
            ].join(" ")
          }
        >
          Repository list
        </NavLink>
      </nav>
    </header>
  )
}