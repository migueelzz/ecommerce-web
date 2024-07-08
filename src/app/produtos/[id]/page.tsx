import { Button } from '@/components/button'
import { Input } from '@/components/input'

export default function ProdutoId() {
  return (
    <div className="flex flex-col pt-8">
      <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
        <div className="flex flex-col gap-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0127/1739/1931/files/y2k.webp?v=1663770863"
            alt=""
            className="h-[500px] w-full rounded-md object-cover"
          />

          <div>outras imagens</div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 px-8">
            <h1 className="text-2xl font-semibold text-zinc-800">
              Camiseta Básica Fire Ball Artist (Vintage)
            </h1>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-zinc-700">
                <span className="text-sm font-normal text-zinc-600">
                  A partir de
                </span>{' '}
                R$ 191,31{' '}
              </h2>
              <span className="text-sm text-zinc-600">R$ 181,75 à vista</span>
            </div>

            <div className="space-y-2">
              <span className="font-medium text-zinc-700">Tamanho</span>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-rose-500" />
                <div className="h-10 w-10 rounded-lg bg-blue-500" />
                <div className="h-10 w-10 rounded-lg bg-amber-500" />
                <div className="h-10 w-10 rounded-lg bg-green-300" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="font-medium text-zinc-700">Tamanho</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="text-sm">
                  P
                </Button>
                <Button variant="outline" className="text-sm">
                  M
                </Button>
                <Button variant="outline" className="text-sm">
                  G
                </Button>
                <Button variant="outline" className="text-sm">
                  GG
                </Button>
              </div>
            </div>

            <Button size="lg" className="bg-rose-500">
              Comprar agora
            </Button>
            <div className="my-4 h-px w-full bg-zinc-300" />
          </div>

          <div className="flex flex-col gap-2 px-8">
            <span className="text-zinc-700">Calcule seu frete</span>
            <div className="flex items-center gap-2">
              <Input placeholder="00000-000" />
              <Button className="py-3">Calcular</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
