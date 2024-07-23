'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../button'
import { useState } from 'react'

export function AccountMenu() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const { push } = useRouter()

  function handleLogOut() {
    setIsAuthenticated(false)
    push('/login')
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" size="icon">
          <User className="size-5" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="mr-2 mt-2 min-w-40 rounded-md border border-zinc-200 bg-white p-2 text-sm shadow-md will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:border-zinc-700 dark:bg-zinc-900"
        align="end"
      >
        {!isAuthenticated ? (
          <>
            <DropdownMenu.Item className="flex cursor-pointer items-center gap-4 rounded px-4 py-2 text-zinc-700 outline-none dark:text-zinc-300">
              <Link href="/login" className="flex w-full items-center gap-4">
                Fazer login
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="flex cursor-pointer items-center gap-4 rounded px-4 py-2 text-zinc-700 outline-none dark:text-zinc-300">
              Meus pedidos
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="m-2 h-px bg-zinc-100 dark:bg-zinc-700" />
            <span className="px-4 text-sm font-semibold text-zinc-700">
              Não possui uma conta?
            </span>
            <DropdownMenu.Item className="flex cursor-pointer items-center gap-4 rounded px-4 py-2 text-zinc-700 outline-none dark:text-zinc-300">
              <Link href="/cadastro" className="flex w-full items-center gap-4">
                Cadastre-se
              </Link>
            </DropdownMenu.Item>
          </>
        ) : (
          <>
            <DropdownMenu.Item className="flex cursor-pointer items-center gap-4 rounded px-4 py-2 text-zinc-700 outline-none dark:text-zinc-300">
              <Link href="/perfil" className="flex w-full items-center gap-4">
                Meu perfil
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="flex cursor-pointer items-center gap-4 rounded px-4 py-2 text-zinc-700 outline-none dark:text-zinc-300">
              <Link
                href="/perfil/pedidos"
                className="flex w-full items-center gap-4"
              >
                Meus pedidos
              </Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="rounded px-4 py-2 text-zinc-700 outline-none dark:text-zinc-300">
              <Link
                href="/favoritos"
                className="flex w-full items-center gap-4"
              >
                Favoritos
              </Link>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="m-2 h-px bg-zinc-100 dark:bg-zinc-700" />
            <DropdownMenu.Item className="rounded px-4 py-2 text-rose-400 outline-none dark:text-rose-500">
              <button
                className="flex w-full items-center gap-4"
                onClick={handleLogOut}
              >
                Sair
              </button>
            </DropdownMenu.Item>
          </>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
