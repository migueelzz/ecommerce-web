import { Heart, ShoppingBag } from 'lucide-react'
import { Button } from '../button'

interface CardProductsProps {
  product: {
    name: string
    description: string
    price: number
    img_url: string
  }
}

export function CardProducts({ product }: CardProductsProps) {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={product.img_url}
        alt=""
        className="h-64 w-80 rounded-md object-cover"
      />
      <div>
        <h1 className="text-xl font-semibold text-zinc-900">{product.name}</h1>
        <span className="text-sm text-zinc-500">{product.description}</span>
      </div>
      <h2 className="text-2xl font-semibold text-zinc-900">
        R$ {product.price}
      </h2>

      <div className="flex items-center justify-between gap-2">
        <Button className="flex w-full items-center justify-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          Adicionar ao carrinho
        </Button>

        <Button variant="secondary">
          <Heart className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
