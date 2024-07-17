'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown, ChevronUp } from 'lucide-react'

import Link from 'next/link'
import { useState } from 'react'

export function AccountSidebar() {
  const [isAdmin, setIsAdmin] = useState(true)
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-min flex-col rounded-lg bg-zinc-100 last:rounded-b-lg">
      <Link
        className="p-4 first:rounded-t last:rounded-b-lg hover:bg-zinc-200"
        href="/perfil"
      >
        Meu perfil
      </Link>
      <Link
        className="p-4 first:rounded-t last:rounded-b-lg hover:bg-zinc-200"
        href="/perfil/pedidos"
      >
        Meus pedidos
      </Link>
      {isAdmin && (
        <Collapsible.Root
          className="first:rounded-t last:rounded-b-lg"
          open={open}
          onOpenChange={setOpen}
        >
          <Collapsible.Trigger asChild>
            <button className="flex w-full items-center justify-between px-4 py-4 hover:bg-zinc-200">
              <span>Minha loja</span>
              {open ? (
                <ChevronUp className="size-5" />
              ) : (
                <ChevronDown className="size-5" />
              )}
            </button>
          </Collapsible.Trigger>
          <Collapsible.Content className="flex flex-col">
            <Link
              className="px-6 py-4 hover:bg-zinc-200"
              href="/perfil/admin/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="px-6 py-4 hover:bg-zinc-200"
              href="/perfil/admin/pedidos"
            >
              Pedidos
            </Link>
            <Link
              className="px-6 py-4 hover:bg-zinc-200"
              href="/perfil/admin/categorias"
            >
              Categorias
            </Link>
            <Link
              className="px-6 py-4 hover:bg-zinc-200"
              href="/perfil/admin/produtos"
            >
              Produtos
            </Link>
            <Link
              className="px-6 py-4 hover:bg-zinc-200"
              href="/perfil/admin/estoque"
            >
              Estoque
            </Link>
          </Collapsible.Content>
        </Collapsible.Root>
      )}

      <Link
        className="p-4 first:rounded-t last:rounded-b-lg hover:bg-zinc-200"
        href="/perfil/avaliacoes"
      >
        Avaliações
      </Link>

      <Link
        className="p-4 first:rounded-t last:rounded-b-lg hover:bg-zinc-200"
        href="/perfil/favoritos"
      >
        Favoritos
      </Link>
    </div>
  )
}
