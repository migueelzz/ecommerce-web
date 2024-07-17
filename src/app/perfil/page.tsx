import Link from 'next/link'
import { Order } from './pedidos/_components/order'
import { Pencil } from 'lucide-react'

export default function Perfil() {
  const orderCount = 1

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg bg-zinc-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <img
            src="https:github.com/migueelzz.png"
            alt=""
            className="h-20 w-20 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">
              Bem-vindo, Miguel Henrique Lemes da Silva
            </h2>
            <span className="text-sm text-zinc-500">
              miguellemes005@gmail.com
            </span>
          </div>
        </div>

        <Link href="/perfil/edit-perfil">
          <Pencil className="size-5 text-zinc-700" />
        </Link>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Últimos pedidos</h2>
        {orderCount > 0 && <Order />}

        {orderCount < 1 && (
          <div className="flex items-center gap-2">
            <h2 className="text-zinc-500">Ainda não possui nenhum pedido.</h2>
            <Link
              href="/"
              className="font-semibold text-zinc-900 hover:underline"
            >
              Ver produtos
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
