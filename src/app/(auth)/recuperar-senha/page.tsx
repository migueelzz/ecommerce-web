import { Button } from '@/components/button'
import { Input } from '@/components/input'

export default function RecuperarSenha() {
  return (
    <div>
      <h1 className="text-xl font-medium">Recuperar senha</h1>
      <form className="mx-auto flex w-full max-w-[800px] flex-col gap-4 p-8">
        <div className="space-y-2">
          <label htmlFor="email">E-mail</label>
          <Input id="email" placeholder="Digite seu e-mail" />
        </div>

        <Button size="lg">Recuperar senha</Button>
      </form>
    </div>
  )
}
