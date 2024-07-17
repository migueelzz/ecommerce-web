import { Button } from '@/components/button'
import { Input } from '@/components/input'

export function FormCupom() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg border p-4">
      <span>Cupom</span>
      <div className="flex items-center gap-2">
        <Input placeholder="Digite o código" />
        <Button>Aplicar</Button>
      </div>
    </div>
  )
}
