import * as Collapisible from '@radix-ui/react-collapsible'

import { Button } from '../button'
import { Bell, Menu, ShoppingBag } from 'lucide-react'
import { NavLink } from '../nav-link'
import { SearchInput } from '../search-input'
import { AccountMenu } from '../account-menu'
import Link from 'next/link'

export function Header() {
  return (
    <Collapisible.Root className="sticky left-0 right-0 top-0 z-20 mx-auto flex w-full flex-col gap-6 bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 p-4 lg:px-0">
        <div className="flex items-center justify-between">
          {/* Logotipo */}
          <Link href="/">
            <div className="flex h-14 w-14 items-center justify-center rounded bg-zinc-900">
              <span className="text-3xl font-bold uppercase tracking-tight text-zinc-100">
                DG
              </span>
            </div>
          </Link>
          <div className="hidden w-full justify-center lg:flex">
            <SearchInput />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden lg:flex">
              <ShoppingBag />
            </Button>
            <Button variant="ghost" className="hidden lg:flex">
              <Bell />
            </Button>
            <AccountMenu />
            <Menu className="flex lg:hidden" />
          </div>
        </div>

        {/* Links - categorias */}
        <nav className="hidden w-full items-center gap-2 lg:flex">
          <NavLink href="/" title="Inicio" />
          <NavLink href="/camisetas" title="Camisetas" />
          <NavLink href="/calcas" title="Calças" />
          <NavLink href="/calcados" title="Calçados" />
          <NavLink href="/mulher" title="Mulher" />
          <NavLink href="/homem" title="Homem" />
          <NavLink href="/infantil" title="Infantil" />
          <NavLink href="/promocoes" title="Promoções" />
        </nav>
      </div>
    </Collapisible.Root>
  )
}
