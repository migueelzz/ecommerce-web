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
  const cashPrice = product.price - 10

  return (
    <Link
      href={`/produtos/${product.id}`}
      className="group relative flex max-w-80 flex-col gap-2 rounded-lg border border-white p-2 transition-all duration-200 ease-in hover:border-zinc-200"
    >
      <div className="absolute right-2 top-2 flex flex-col items-end gap-2">
        <span className="w-min rounded-lg bg-zinc-800 p-2 text-xs text-zinc-100">
          Lançamento
        </span>

        <span className="w-min rounded-lg bg-zinc-800 p-2 text-xs text-zinc-100">
          -30%
        </span>
      </div>

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
          R$ {cashPrice.toFixed(2)} à vista
        </span>
      </div>
    </Link>
  )
}
