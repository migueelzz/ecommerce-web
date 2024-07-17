import { NavLink } from '../nav-link'

export function MenuLink() {
  return (
    <div className="bg-zinc-900">
      <div className="mx-auto hidden w-full max-w-[1024px] items-center text-zinc-100 lg:flex">
        <NavLink href="/camisetas" title="Camisetas" />
        <NavLink href="/calcas" title="Calças" />
        <NavLink href="/calcados" title="Calçados" />
        <NavLink href="/mulher" title="Mulher" />
        <NavLink href="/homem" title="Homem" />
        <NavLink href="/infantil" title="Infantil" />
        <NavLink
          clasName="justify-center"
          href="/promocoes"
          title="Promoções"
        />
      </div>
    </div>
  )
}
