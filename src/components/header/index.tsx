import * as Collapsible from '@radix-ui/react-collapsible'

import { Button } from '../button'
import { Menu, Search, ShoppingCart, X } from 'lucide-react'
import { AccountMenu } from '../account-menu'
import Link from 'next/link'
import { Input } from '../input'
import { Logo } from '../Logo'
import { MenuLink } from '../menu-link'

export function Header() {
  return (
    <Collapsible.Root className="sticky left-0 right-0 top-0 z-20 mx-auto flex h-20 w-full flex-col overflow-y-auto bg-white no-scrollbar data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:h-auto">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col gap-4 p-4 data-[state=open]:p-0 lg:px-0">
        <div className="flex items-center justify-between">
          {/* Logotipo */}
          <Link href="/">
            <Logo />
          </Link>
          <form className="hidden w-full max-w-[600px] justify-center lg:flex">
            <Input autoComplete="off" placeholder="Buscar por produtos...">
              <button>
                <Search className="size-5 text-zinc-400" />
              </button>
            </Input>
          </form>
          <div className="flex items-center lg:gap-2">
            <div className="hidden gap-2 lg:flex">
              <Button variant="ghost" size="icon">
                <Link href="/carrinho">
                  <ShoppingCart className="size-5" />
                </Link>
              </Button>
              <AccountMenu />
            </div>

            <Collapsible.Trigger
              asChild
              className="data-[state=open]:hidden lg:hidden"
            >
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </Collapsible.Trigger>

            <Collapsible.Trigger
              asChild
              className="data-[state=closed]:hidden lg:hidden"
            >
              <Button variant="ghost" size="icon">
                <X className="h-6 w-6" />
              </Button>
            </Collapsible.Trigger>
          </div>
        </div>

        <Collapsible.Content
          forceMount
          className="flex flex-1 flex-col gap-2 overflow-hidden lg:hidden"
        >
          <Collapsible.Trigger asChild>
            <Link
              className="py-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900"
              href="/login"
            >
              Fazer login / cadastrar
            </Link>
          </Collapsible.Trigger>
          <div className="my-2 h-px w-full bg-zinc-300" />
          <h1 className="text-sm font-semibold text-zinc-700">
            Navegue por aqui
          </h1>
          <Collapsible.Trigger asChild></Collapsible.Trigger>
          <Collapsible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/produtos/camisetas"
            >
              Camisetas
            </Link>
          </Collapsible.Trigger>
          <Collapsible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/calcas"
            >
              Calças
            </Link>
          </Collapsible.Trigger>
          <Collapsible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/calcados"
            >
              Calçados
            </Link>
          </Collapsible.Trigger>
          <Collapsible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/mulher"
            >
              Mulher
            </Link>
          </Collapsible.Trigger>
          <Collapsible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/homem"
            >
              Homem
            </Link>
          </Collapsible.Trigger>
          <Collapsible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/infantil"
            >
              Infantil
            </Link>
          </Collapsible.Trigger>
          <Collapsible.Trigger asChild>
            <Link
              className="p-2 font-normal text-zinc-700 hover:text-zinc-900"
              href="/promocoes"
            >
              Promoções
            </Link>
          </Collapsible.Trigger>
        </Collapsible.Content>
      </div>

      <MenuLink />
    </Collapsible.Root>
  )
}
