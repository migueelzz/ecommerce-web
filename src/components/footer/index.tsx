import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t">
      <div className="grid grid-cols-5 p-4">
        {/* Logotipo */}
        <Link href="/">
          <div className="flex h-14 w-14 items-center justify-center rounded bg-zinc-900">
            <span className="text-3xl font-bold uppercase tracking-tight text-zinc-100">
              DG
            </span>
          </div>
        </Link>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-zinc-900">Loja</h1>
          <Link href="lancamentos" className="text-sm text-zinc-500">
            Lançamentos
          </Link>
          <Link href="mais-vendidos" className="text-sm text-zinc-500">
            Mais vendidos
          </Link>
          <Link href="promocoes" className="text-sm text-zinc-500">
            Promoções
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-zinc-900">Sobre</h1>
          <Link href="sobre" className="text-sm text-zinc-500">
            Sobre nós
          </Link>
          <Link href="contato" className="text-sm text-zinc-500">
            Contato
          </Link>
          <Link href="newsletter" className="text-sm text-zinc-500">
            Newsletter
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-zinc-900">Suporte</h1>
          <Link href="faq" className="text-sm text-zinc-500">
            FAQs
          </Link>
          <Link href="termos-de-uso" className="text-sm text-zinc-500">
            Termos de uso
          </Link>
        </div>

        <div className="flex flex-col">
          <h1 className="font-semibold text-zinc-900">Pagamentos</h1>
        </div>
      </div>

      <div className="flex items-center justify-center border-t p-4">
        <span className="text-sm text-zinc-500">
          Copyright &copy; {new Date().getFullYear()} Dona Getta. Todos os
          direitos reservados
        </span>
      </div>
    </footer>
  )
}
