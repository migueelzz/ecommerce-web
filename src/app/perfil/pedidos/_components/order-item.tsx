export function OrderItem() {
  return (
    <div className="flex items-start gap-2 border-b pb-4 last:border-b-0">
      <img
        src="https://imageswscdn.wslojas.com.br/files/24465/MED_produto-camiseta-oversized-fire-broken-bloc-offwhite-9779.jpg"
        alt=""
        className="h-20 w-20 rounded-lg border object-cover"
      />

      <div className="flex w-full flex-col gap-2">
        <h2 className="truncate font-semibold">
          Camiseta Oversized Fire Broken Bloc (Offwhite)
        </h2>
        <span className="text-sm font-semibold">R$ 200,00</span>
        <span className="text-sm text-zinc-400">Tam: G | Qtd: 1</span>
      </div>
    </div>
  )
}
