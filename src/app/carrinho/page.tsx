import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react'

export default function Carrinho() {
  return (
    <div className="pt-4">
      <h1 className="text-2xl font-medium">Carrinho</h1>
      <div className="flex grid-cols-[1fr_350px] flex-col items-start gap-6 pt-8 lg:grid">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 border-b pb-4 last:border-b-0">
            <div className="flex w-full items-center gap-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Monocromatico.webp?v=1663770863"
                alt=""
                className="h-28 w-28 rounded-lg border object-cover"
              />
              <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-zinc-700">
                    Moletom FIRE Random Letters (Azul Claro)
                  </h1>
                  <span className="text-sm text-zinc-400">Bege | M</span>
                </div>
                <span className="font-semibold">R$ 240,59</span>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <div className="flex w-24 items-center justify-center rounded-lg border">
                <Button variant="link" size="icon" className="text-sm">
                  <Minus className="h-4 w-4" />
                </Button>
                <span>1</span>
                <Button variant="link" size="icon" className="text-sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="border text-sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-b pb-4 last:border-b-0">
            <div className="flex w-full items-center gap-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Monocromatico.webp?v=1663770863"
                alt=""
                className="h-28 w-28 rounded-lg border object-cover"
              />
              <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-zinc-700">
                    Moletom FIRE Random Letters (Azul Claro)
                  </h1>
                  <span className="text-sm text-zinc-400">Bege | M</span>
                </div>
                <span className="font-semibold">R$ 240,59</span>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <div className="flex w-24 items-center justify-center rounded-lg border">
                <Button variant="link" size="icon" className="text-sm">
                  <Minus className="h-4 w-4" />
                </Button>
                <span>1</span>
                <Button variant="link" size="icon" className="text-sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="border text-sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-b pb-4 last:border-b-0">
            <div className="flex w-full items-center gap-2">
              <img
                src="https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Monocromatico.webp?v=1663770863"
                alt=""
                className="h-28 w-28 rounded-lg border object-cover"
              />
              <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-2">
                  <h1 className="text-zinc-700">
                    Moletom FIRE Random Letters (Azul Claro)
                  </h1>
                  <span className="text-sm text-zinc-400">Bege | M</span>
                </div>
                <span className="font-semibold">R$ 240,59</span>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <div className="flex w-24 items-center justify-center rounded-lg border">
                <Button variant="link" size="icon" className="text-sm">
                  <Minus className="h-4 w-4" />
                </Button>
                <span>1</span>
                <Button variant="link" size="icon" className="text-sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="border text-sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
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

            <Button>
              Continuar
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex w-full flex-col gap-2 rounded-lg border p-4">
            <span>Cupom</span>
            <div className="flex items-center gap-2">
              <Input placeholder="Digite o código" />
              <Button className="px-5 py-3">Aplicar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
