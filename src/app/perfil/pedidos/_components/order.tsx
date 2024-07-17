import { Button } from '@/components/button'
import { OrderItem } from './order-item'

export function Order() {
  return (
    <div className="flex flex-col gap-2 rounded-lg border px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">Pedido</span>
            <span className="text-lg font-semibold text-zinc-900">
              #CBYXCD89
            </span>
          </div>
          <span className="text-sm text-zinc-500">Data: 20/04/2024</span>
        </div>

        <span className="flex items-center justify-center rounded-lg bg-green-500 p-2 text-sm font-medium text-white">
          Concluído
        </span>
      </div>

      <div className="h-px w-full bg-zinc-200" />

      <div className="flex flex-col gap-2">
        <OrderItem />
        <OrderItem />
      </div>

      <div className="h-px w-full bg-zinc-200" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">Total:</span>
          <span className="text-lg font-semibold text-zinc-900">R$ 200,00</span>
        </div>
        <Button size="sm">Detalhes</Button>
      </div>
    </div>
  )
}
