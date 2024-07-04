import { Hero } from '@/components/hero'
import { ProductsCarousel } from '@/components/products-carousel'

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

export default function Home() {
  return (
    <div className="w-full">
      <Hero />

      <ProductsCarousel products={PRODUCTS} title="Lançamentos" />

      <div className="flex items-center gap-2">
        <div className="h-[250px] w-full rounded-md bg-zinc-100" />
        <div className="h-[250px] w-full rounded-md bg-zinc-100" />
      </div>

      <ProductsCarousel products={PRODUCTS} title="Mais vendidos" />
    </div>
  )
}
