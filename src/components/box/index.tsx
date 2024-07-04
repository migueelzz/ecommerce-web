import { ReactNode } from 'react'

interface BoxProps {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return <div className="rounded-lg border-2 bg-zinc-100 p-4">{children}</div>
}
