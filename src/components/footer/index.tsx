import Link from 'next/link'
import { Logo } from '../Logo'

export function Footer() {
  return (
    <footer className="flex w-full flex-col gap-4 bg-zinc-900 pt-8 text-zinc-400">
      <div className="mx-auto mt-auto flex w-full max-w-[1024px] flex-col">
        <div className="flex flex-col justify-between gap-4 px-4 py-4 lg:flex-row lg:gap-0 lg:px-0">
          {/* Logotipo */}
          <div className="flex max-w-72 flex-col gap-2">
            <Link href="/">
              <Logo />
            </Link>
            <span className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              cum aut ullam accusamus
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-zinc-100">Sobre</h1>
            <Link href="contato" className="w-min text-sm">
              Contato
            </Link>
            <Link href="newsletter" className="w-min text-sm">
              Newsletter
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-zinc-100">Loja</h1>
            <Link href="lancamentos" className="w-min text-sm">
              Lançamentos
            </Link>
            <Link href="mais-vendidos" className="w-min text-sm">
              Mais vendidos
            </Link>
            <Link href="promocoes" className="w-min text-sm">
              Promoções
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-zinc-100">Suporte</h1>
            <Link href="faq" className="w-min text-sm">
              FAQs
            </Link>
            <Link href="termos-de-uso" className="w-min text-sm">
              Termos de uso
            </Link>
          </div>

          <div className="flex flex-col">
            <h1 className="font-semibold text-zinc-100">Pagamentos</h1>
          </div>
        </div>

        <div className="flex items-center px-4 py-4 lg:px-0">
          <span className="text-xs text-zinc-500">
            Copyright &copy; {new Date().getFullYear()} Nome da loja. Todos os
            direitos reservados
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center bg-zinc-800 px-4 py-4 lg:px-0">
        <span className="text-xs text-zinc-500">
          Desenvolvido por{' '}
          <span className="font-semibold text-zinc-400">Miguel Lemes</span>
        </span>
      </div>
    </footer>
  )
}
