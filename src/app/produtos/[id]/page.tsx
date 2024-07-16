import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Minus, Plus } from 'lucide-react'

export default function ProdutoId() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex grid-cols-[1fr_450px] flex-col gap-2 lg:grid">
        <div className="flex flex-col gap-2">
          <img
            src="https://imageswscdn.wslojas.com.br/files/24465/MED_produto-camiseta-oversized-fire-broken-bloc-offwhite-9779.jpg"
            alt=""
            className="mx-auto h-[400px] w-[400px] rounded-md object-cover"
          />
        </div>
        <div className="flex h-min flex-col gap-2 rounded-lg border px-8 py-4">
          <div className="flex items-center gap-2">
            <span className="w-min rounded-lg bg-zinc-800 p-2 text-xs text-zinc-100">
              Lançamento
            </span>

            <span className="w-min rounded-lg bg-zinc-800 p-2 text-xs text-zinc-100">
              -30%
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-zinc-800">
            Camiseta Oversized Fire Broken Bloc (Offwhite)
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

          <div className="my-4 h-px w-full bg-zinc-300" />

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

          <div className="space-y-2">
            <span className="font-medium text-zinc-700">Quantidade</span>
            <div className="flex w-24 items-center justify-center rounded-lg border">
              <Button variant="link" size="icon" className="text-sm">
                <Minus className="h-4 w-4" />
              </Button>
              <span>1</span>
              <Button variant="link" size="icon" className="text-sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button size="lg">Comprar agora</Button>
          <Button variant="outline" size="lg">
            Adicionar ao carrinho
          </Button>
        </div>
      </div>

      <div className="flex grid-cols-[1fr_450px] flex-col gap-4 lg:grid">
        <div className="space-y-2">
          <div className="space-y-2 text-zinc-700">
            <h1 className="text-xl">Descrição</h1>
            <h2 className="font-semibold">CAMISETA OVERSIZED FIRE COM BOLSO</h2>
            <p className="text-sm">Descrição:</p>
            <p className="text-sm">
              Camiseta FIRE Oversized <br /> Bolso Frontal Esquerdo <br />{' '}
              Composição: Malha 6.1 penteada100% Algodão, com Gramatura de 180g.{' '}
              <br /> Mangas mais amplas Golas de 2,5cm. <br /> Medidas
              Aproximadas: P: Largura: 55cm / Comprimento: 76cm / Manga:23{' '}
              <br /> M: Largura: 57cm / Comprimento: 78 cm / Manga:24.5 <br />{' '}
              G: Largura: 59cm / Comprimento: 80 cm / Manga: 26cm <br /> GG:
              Largura: 62cm / Comprimento: 82cm / Manga: 29cm
            </p>
          </div>
          <div className="space-y-2 text-zinc-700">
            <h1 className="text-xl">Dados Técnicos</h1>
            <p className="text-sm">Cuide do seu Produto:</p>
            <p className="text-sm">
              Não Lavar a seco. Não remover manchas com solventes <br /> Não
              apropriada para ser lavada em máquina <br /> Não pode ser seca em
              máquina <br /> Não usar alvejante a base de cloro
            </p>
          </div>
        </div>

        <div className="flex h-min flex-col gap-2 rounded-lg border px-8 py-4">
          <span className="text-zinc-700">Calcule seu frete</span>
          <div className="flex items-center gap-2">
            <Input placeholder="00000-000" />
            <Button className="py-3">Calcular</Button>
          </div>
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            className="text-xs text-blue-500 underline"
          >
            Não sei meu CEP
          </a>
        </div>
      </div>
    </div>
  )
}
