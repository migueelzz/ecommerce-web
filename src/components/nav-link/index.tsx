'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps, ReactNode } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {
  title: string
  href: string
  children?: ReactNode
}

export function NavLink({ children, title, href, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <div
      className={clsx(
        'flex items-center justify-between rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-zinc-50',
        isActive ? 'text-rose-500' : 'text-zinc-600',
      )}
    >
      <Link href={href} {...props} className="flex w-full items-center gap-2">
        <span>{title}</span>
      </Link>
      {children}
    </div>
  )
}
