import Link from 'next/link'
import { ComponentProps } from 'react'

interface NavLinkProps extends ComponentProps<'a'> {
  title: string
  href: string
  clasName?: string
}

export function NavLink({ title, href, clasName, ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`flex w-full items-center justify-center p-4 text-sm font-medium uppercase hover:bg-white/20 ${clasName}`}
      {...props}
    >
      <span>{title}</span>
    </Link>
  )
}
