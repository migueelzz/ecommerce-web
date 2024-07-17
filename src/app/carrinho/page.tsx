import { CardProductCart } from './_components/card-product-cart'
import { Summary } from './_components/summary'
import { FormCupom } from './_components/form-cupom'

export default function Carrinho() {
  return (
    <div className="pt-4">
      <h1 className="text-2xl font-medium">Carrinho</h1>
      <div className="flex grid-cols-[1fr_350px] flex-col items-start gap-6 pt-8 lg:grid">
        <div className="flex flex-col gap-4">
          <CardProductCart />
          <CardProductCart />
          <CardProductCart />
        </div>

        <div className="flex flex-col gap-4">
          <Summary />
          <FormCupom />
        </div>
      </div>
    </div>
  )
}
