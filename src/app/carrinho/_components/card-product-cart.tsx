import { Minus, Plus, Trash2 } from 'lucide-react'

export function CardProductCart() {
  return (
    <div className="flex items-start gap-2 border-b pb-4 last:border-b-0">
      <img
        src="https://imageswscdn.wslojas.com.br/files/24465/MED_produto-camiseta-oversized-fire-broken-bloc-offwhite-9779.jpg"
        alt=""
        className="h-20 w-20 rounded-lg border object-cover"
      />

      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between">
          <h2 className="truncate font-semibold">
            Camiseta Oversized Fire Broken Bloc (Offwhite)
          </h2>
          <button>
            <Trash2 className="size-5 text-rose-500" />
          </button>
        </div>
        <div>
          <span className="text-sm font-semibold">R$ 200,00</span>
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-zinc-400">Tam: G | Qtd: 1</span>
            <div className="flex items-center">
              <button className="rounded-md bg-zinc-50 p-2">
                <Minus className="size-4" />
              </button>
              <span className="p-2">1</span>
              <button className="rounded-md bg-zinc-50 p-2">
                <Plus className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
