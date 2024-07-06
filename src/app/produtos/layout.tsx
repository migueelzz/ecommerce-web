import { ReactNode } from 'react'

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid-cols-product flex flex-col gap-4 lg:grid">
      <div className="hidden h-[300px] flex-col gap-4 rounded-lg border p-4 lg:flex">
        <div>
          <span className="text-sm text-zinc-500">Ordernar por</span>
        </div>
        <h1 className="text-xl">Categorias</h1>
      </div>
      <div>{children}</div>
    </div>
  )
}
