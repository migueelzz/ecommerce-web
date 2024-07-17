import { Button } from '@/components/button'

export function Summary() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h2>Total de itens</h2>
        <span>R$ 220</span>
      </div>

      <div className="flex items-center justify-between">
        <h2>Desconto</h2>
        <span>R$ 19,99</span>
      </div>

      <div className="flex items-center justify-between">
        <h2>Frete</h2>
        <span>Grátis</span>
      </div>

      <div className="my-4 h-px w-full bg-zinc-200" />

      <div className="flex items-center justify-between text-xl">
        <h2>Total</h2>
        <span>R$ 220</span>
      </div>

      <Button>Continuar</Button>
    </div>
  )
}
