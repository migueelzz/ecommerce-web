import { CardProducts } from '@/components/card-products'

const PRODUCTS = [
  {
    id: '8gu9rccyv8cvb8yw',
    name: 'Camiseta Oversized Fire Broken Bloc (Offwhite)',
    description: 'Descrição do produto aqui...',
    price: 69.93,
    img_url:
      'https://imageswscdn.wslojas.com.br/files/24465/MED_produto-camiseta-oversized-fire-broken-bloc-offwhite-9779.jpg',
    discount: 30,
    createdAt: new Date(),
  },
  {
    id: '8gu9rccyv8cvb8yw23',
    name: 'Moletom FIRE Ghost Lettering (Preto)',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://imageswscdn.wslojas.com.br/files/24465/MED_produto-moletom-fire-ghost-lettering-preto-4888.jpg',
  },
  {
    id: '8gu9rccyv8cvb8ywqweqr',
    name: 'Camiseta Oversized Fire Just Playing (Verde)',
    description: 'Descrição do produto aqui...',
    price: 76,
    img_url:
      'https://imageswscdn.wslojas.com.br/files/24465/MED_produto-camiseta-oversized-fire-just-playing-verde-7881.jpg',
  },
  {
    id: '8gu9rccyv8cvb8ywac99fya',
    name: 'Camiseta Oversized Fire Extinguisher (Offwhite)',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://imageswscdn.wslojas.com.br/files/24465/MED_produto-camiseta-oversized-fire-extinguisher-offwhite-4490.jpg',
  },
  {
    id: '8gu9rccyv8cvb8yw89sfg8s7tgys',
    name: 'Calça Baggy Jeans Fire Apparel Design (Azul)',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://imageswscdn.wslojas.com.br/files/24465/MED_produto-calca-jeans-reta-fire-apparel-design-azul-1988.jpg',
  },
  {
    id: '8gu9rccyv8cvb8yw89f8as7fta8',
    name: 'Boné FIRE Five Penal Running Death Tag (Bege)',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://imageswscdn.wslojas.com.br/files/24465/MED_produto-bone-fire-five-penal-running-death-tag-bege-3301.jpg',
  },
  {
    id: 'a9fuase98gtysnbc78y',
    name: 'Calça Baggy Sarja Fire Creative Design Club (Preta) ',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://imageswscdn.wslojas.com.br/files/24465/MED_produto-calca-baggy-sarja-fire-creative-design-club-preta-3331.jpg',
  },
]

export default function Produtos() {
  return (
    <div className="flex grid-cols-product flex-col gap-4 lg:grid">
      <div className="hidden h-[300px] flex-col gap-4 rounded-lg border p-4 lg:flex">
        <div>
          <span className="text-sm text-zinc-500">Ordernar por</span>
        </div>
        <h1 className="text-xl">Categorias</h1>
      </div>
      <div className="flex w-full grid-cols-3 flex-col items-center gap-4 lg:grid">
        {PRODUCTS.map((product) => {
          return <CardProducts key={product.name} product={product} />
        })}
      </div>
    </div>
  )
}
