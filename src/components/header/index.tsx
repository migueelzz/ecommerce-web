'use client'

import { useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { Bell, Search, ShoppingCart } from 'lucide-react'
import { NavLink } from '../nav-link'

export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <header className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 py-4">
      <div className="flex items-center justify-between">
        <div className="h-12 w-12 rounded bg-zinc-100" />
        <div className="w-full max-w-[600px]">
          <Input placeholder="Buscar produtos...">
            <Search className="h-5 w-5 text-zinc-400" />
          </Input>
        </div>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Button variant="ghost">
                <ShoppingCart />
              </Button>
              <Button variant="ghost">
                <Bell />
              </Button>

              <img
                src="https://github.com/migueelzz.png"
                className="ml-4 h-12 w-12 rounded-full"
              />
            </>
          ) : (
            <>
              <Button
                variant="primary"
                onClick={() => setIsAuthenticated(true)}
                className="flex flex-wrap items-center"
              >
                Entrar
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsAuthenticated(true)}
                className="flex flex-wrap items-center"
              >
                Cadastrar
              </Button>
            </>
          )}
        </div>
      </div>

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
