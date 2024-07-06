import * as Collapisible from '@radix-ui/react-collapsible'

import { Button } from '../button'
import { Bell, Menu, ShoppingBag } from 'lucide-react'
import { NavLink } from '../nav-link'
import { SearchInput } from '../search-input'
import { AccountMenu } from '../account-menu'
import Link from 'next/link'

export function Header() {
  return (
    <Collapisible.Root className="sticky left-0 right-0 top-0 z-20 mx-auto flex w-full flex-col gap-6 overflow-y-auto border-b bg-white no-scrollbar data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:border-0">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 p-4 data-[state=open]:p-0 lg:px-0">
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
          <div className="flex items-center lg:gap-2">
            <Button variant="ghost" className="hidden lg:flex">
              <ShoppingBag />
            </Button>
            <Button variant="ghost" className="hidden lg:flex">
              <Bell />
            </Button>
            <AccountMenu />

            <Collapisible.Trigger asChild className="lg:hidden">
              <Button variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </Collapisible.Trigger>
          </div>
        </div>

        <Collapisible.Content
          forceMount
          className="flex flex-1 flex-col gap-2 data-[state=closed]:hidden lg:hidden"
        >
          <Collapisible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/"
            >
              Inicio
            </Link>
          </Collapisible.Trigger>
          <Collapisible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/produtos/camisetas"
            >
              Camisetas
            </Link>
          </Collapisible.Trigger>
          <Collapisible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/calcas"
            >
              Calças
            </Link>
          </Collapisible.Trigger>
          <Collapisible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/calcados"
            >
              Calçados
            </Link>
          </Collapisible.Trigger>
          <Collapisible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/mulher"
            >
              Mulher
            </Link>
          </Collapisible.Trigger>
          <Collapisible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/homem"
            >
              Homem
            </Link>
          </Collapisible.Trigger>
          <Collapisible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/infantil"
            >
              Infantil
            </Link>
          </Collapisible.Trigger>
          <Collapisible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/promocoes"
            >
              Promoções
            </Link>
          </Collapisible.Trigger>
        </Collapisible.Content>

        {/* Links - categorias */}
        <nav className="hidden w-full items-center gap-2 lg:flex">
          <NavLink href="/" title="Inicio" />
          <NavLink href="/produtos/camisetas" title="Camisetas" />
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
