import { CardProducts } from '@/components/card-products'

const PRODUCTS = [
  {
    name: 'Nome do produto',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Trico-Otimismo.webp?v=1663770862',
  },
  {
    name: 'Nome do produto 2',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Renda.webp?v=1663770862',
  },
  {
    name: 'Nome do produto 3',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Monocromatico.webp?v=1663770863',
  },
  {
    name: 'Nome do produto 4',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/y2k.webp?v=1663770863',
  },
  {
    name: 'Nome do produto 5',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/romance-no-ar.webp?v=1663770863',
  },
  {
    name: 'Nome do produto 6',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Barbiecore.webp?v=1663770862',
  },
  {
    name: 'Nome do produto 7',
    description: 'Descrição do produto aqui...',
    price: 100,
    img_url:
      'https://cdn.shopify.com/s/files/1/0127/1739/1931/files/Barbiecore.webp?v=1663770862',
  },
]

export default function Produtos() {
  return (
    <div className="flex w-full grid-cols-3 flex-col items-center gap-4 lg:grid">
      {PRODUCTS.map((product) => {
        return <CardProducts key={product.name} product={product} />
      })}
    </div>
  )
}
