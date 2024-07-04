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
    <div className="flex flex-col gap-2 p-2">
      <img src={product.img_url} alt="" className="h-80 w-80 object-cover" />
      <div>
        <h1 className="text-xl font-semibold text-zinc-700">{product.name}</h1>
        <span className="text-sm text-zinc-500">{product.description}</span>
      </div>
      <h2 className="text-xl font-semibold text-zinc-700">
        R$ {product.price}
      </h2>

      <Button variant="outline">Adicionar ao carrinho</Button>
    </div>
  )
}
