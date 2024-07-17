import { Order } from './_components/order'

export default function Pedidos() {
  return (
    <div className="flex flex-col gap-2">
      <Order />
      <Order />
      <Order />
    </div>
  )
}
