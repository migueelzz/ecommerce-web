import { Button } from '../button'
import { Bell, ShoppingBag } from 'lucide-react'
import { NavLink } from '../nav-link'
import { SearchInput } from '../search-input'
import { AccountMenu } from '../account-menu'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logotipo */}
        <Link href="/">
          <div className="flex h-14 w-14 items-center justify-center rounded bg-zinc-900">
            <span className="text-3xl font-bold uppercase tracking-tight text-zinc-100">
              DG
            </span>
          </div>
        </Link>
        <SearchInput />
        <div className="flex items-center gap-2">
          <Button variant="ghost">
            <ShoppingBag />
          </Button>
          <Button variant="ghost">
            <Bell />
          </Button>
          <AccountMenu />
        </div>
      </div>

      {/* Links - categorias */}
      <nav className="flex w-full items-center gap-2">
        <NavLink href="/" title="Inicio" />
        <NavLink href="/camisetas" title="Camisetas" />
        <NavLink href="/calcas" title="Calças" />
        <NavLink href="/calcados" title="Calçados" />
        <NavLink href="/mulher" title="Mulher" />
        <NavLink href="/homem" title="Homem" />
        <NavLink href="/infantil" title="Infantil" />
        <NavLink href="/promocoes" title="Promoções" />
      </nav>
    </header>
  )
}
