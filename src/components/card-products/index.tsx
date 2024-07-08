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
    <div className="flex max-w-[250px] flex-col gap-2 rounded-lg border border-white p-2 transition-all duration-200 ease-in hover:border-zinc-200">
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

      <div className="flex items-center justify-between gap-2">
        {/* <Button className="flex w-full items-center justify-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          Adicionar ao carrinho
        </Button>

        <Button variant="secondary">
          <Heart className="h-5 w-5" />
        </Button> */}
      </div>
    </div>
  )
}
