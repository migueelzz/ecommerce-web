import { ReactNode } from 'react'
import { AccountSidebar } from './_components/account-sidebar'

export default function PerfilLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[300px_1fr] gap-4 pt-8">
      <AccountSidebar />
      <div>{children}</div>
    </div>
  )
}
