'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Heart, LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '../button'

export function AccountMenu() {
  const isAuth = true
  const { push } = useRouter()

  function handleLogOut() {
    push('/sign-in')
  }
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost">
          <User />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade mr-2 mt-2 min-w-40 rounded-md border border-zinc-200 bg-white p-2 shadow-md will-change-[opacity,transform] dark:border-zinc-700 dark:bg-zinc-900"
        align="end"
      >
        {!isAuth ? (
          <DropdownMenu.Item className="flex cursor-pointer items-center gap-4 rounded px-4 py-2 text-zinc-700 outline-none hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800">
            <User className="h-5 w-5" />
            Fazer login
          </DropdownMenu.Item>
        ) : (
          <>
            <DropdownMenu.Item className="flex cursor-pointer items-center gap-4 rounded px-4 py-2 text-zinc-700 outline-none hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800">
              <User className="h-5 w-5" />
              Minha conta
            </DropdownMenu.Item>
            <DropdownMenu.Item className="rounded px-4 py-2 text-zinc-700 outline-none hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800">
              <Link
                href="/chat/settings"
                className="flex w-full items-center gap-4"
              >
                <Heart className="h-5 w-5" />
                Favoritos
              </Link>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="m-2 h-px bg-zinc-100 dark:bg-zinc-700" />
            <DropdownMenu.Item className="rounded px-4 py-2 text-rose-400 outline-none hover:bg-rose-200/20 dark:text-rose-500 dark:hover:bg-rose-300/20">
              <button
                className="flex w-full items-center gap-4"
                onClick={handleLogOut}
              >
                <LogOut className="h-5 w-5" />
                Sair
              </button>
            </DropdownMenu.Item>
          </>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
