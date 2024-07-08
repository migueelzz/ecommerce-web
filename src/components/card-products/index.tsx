import Link from 'next/link'

interface CardProductsProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    img_url: string
  }
}

export function CardProducts({ product }: CardProductsProps) {
  return (
    <Link
      href={`/produtos/${product.id}`}
      className="flex max-w-[250px] flex-col gap-2 rounded-lg border border-white p-2 transition-all duration-200 ease-in hover:border-zinc-200"
    >
      <img
        src={product.img_url}
        alt=""
        className="h-64 w-full rounded-md object-cover"
      />
      <div>
        <span className="text-sm text-zinc-500">{product.name}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-semibold text-zinc-700">
          R$ {product.price}
        </span>
        <span className="text-sm font-normal text-zinc-600">
          R$ {product.price - 9.99} à vista
        </span>
      </div>
    </Link>
  )
}
