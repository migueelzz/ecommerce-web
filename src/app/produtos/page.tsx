import { CardProducts } from '@/components/card-products'

const PRODUCTS = [
  {
    id: '8gu9rccyv8cvb8yw',
    name: 'Nome do produto',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Trico-Otimismo.webp?v=1663770862',
  },
  {
    id: '8gu9rccyv8cvb8yw23',
    name: 'Nome do produto 2',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Renda.webp?v=1663770862',
  },
  {
    id: '8gu9rccyv8cvb8ywqweqr',
    name: 'Nome do produto 3',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Monocromatico.webp?v=1663770863',
  },
  {
    id: '8gu9rccyv8cvb8ywac99fya',
    name: 'Nome do produto 4',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/y2k.webp?v=1663770863',
  },
  {
    id: '8gu9rccyv8cvb8yw89sfg8s7tgys',
    name: 'Nome do produto 5',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/romance-no-ar.webp?v=1663770863',
  },
  {
    id: '8gu9rccyv8cvb8yw89f8as7fta8',
    name: 'Nome do produto 6',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Barbiecore.webp?v=1663770862',
  },
  {
    id: 'a9fuase98gtysnbc78y',
    name: 'Nome do produto 7',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Barbiecore.webp?v=1663770862',
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
