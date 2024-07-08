import { Button } from '@/components/button'
import { Input } from '@/components/input'
import Link from 'next/link'

export default function Login() {
  return (
    <div>
      <h1 className="text-xl font-medium">Login</h1>
      <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
        <form className="flex w-full flex-col gap-4 border-b p-8 lg:border-b-0 lg:border-r">
          <h1 className="text-zinc-700">Acessar conta</h1>
          <div className="space-y-2">
            <label htmlFor="email">E-mail</label>
            <Input id="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Senha</label>
            <Input id="password" placeholder="Digite sua senha" />
          </div>
          <Link
            href="/recuperar-senha"
            className="text-sm text-blue-400 hover:underline"
          >
            Esqueceu a senha?
          </Link>

          <Button type="submit" size="lg">
            Entrar
          </Button>
        </form>

        <form className="flex w-full flex-col gap-4 p-8">
          <h1 className="text-zinc-700">Não tenho cadastro</h1>
          <div className="space-y-2">
            <label htmlFor="email">E-mail</label>
            <Input id="email" placeholder="Digite seu e-mail" />
          </div>

          <Button type="submit" size="lg">
            Criar uma conta
          </Button>
        </form>
      </div>
    </div>
  )
}
