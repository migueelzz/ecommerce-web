import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { ArrowRight } from 'lucide-react'

export default function Cadastro() {
  return (
    <div>
      <h1 className="text-xl font-medium">Cadastro</h1>
      <form className="mx-auto flex w-full max-w-[800px] flex-col gap-4 p-8">
        <div className="space-y-2">
          <label htmlFor="email">E-mail</label>
          <Input id="email" placeholder="Digite seu e-mail" />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone">Telefone</label>
          <Input id="phone" type="tel" placeholder="Digite seu telefone" />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-full space-y-2">
            <label htmlFor="password">Senha</label>
            <Input id="password" placeholder="Digite sua senha" />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="valid-password">Confirmar senha</label>
            <Input id="valid-password" placeholder="Digite a senha novamente" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-full space-y-2">
            <label htmlFor="firstName">Nome</label>
            <Input id="firstName" placeholder="Digite seu nome" />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="lastName">Sobrenome</label>
            <Input id="lastName" placeholder="Digite seu sobrenome" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-full space-y-2">
            <label htmlFor="cpf">CPF</label>
            <Input id="cpf" placeholder="000.000.000-00" />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="rg">RG</label>
            <Input id="rg" placeholder="00.000.000-0" />
          </div>
        </div>

        <Button size="lg" className="ml-auto max-w-52">
          Continuar
          <ArrowRight />
        </Button>
      </form>
    </div>
  )
}
