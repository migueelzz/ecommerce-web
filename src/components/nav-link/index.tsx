'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {
  title: string
  href: string
}

export function NavLink({ title, href, ...props }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      {...props}
      className={clsx(
        'flex w-32 items-center justify-center p-4 text-sm font-medium uppercase hover:bg-white/10',
        isActive ? 'text-rose-500' : 'text-zinc-100',
      )}
    >
      <span>{title}</span>
    </Link>
  )
}
