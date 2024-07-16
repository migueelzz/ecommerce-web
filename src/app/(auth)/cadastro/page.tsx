import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { ArrowRight } from 'lucide-react'

export default function Cadastro() {
  return (
    <div>
      <h1 className="text-2xl font-medium">Cadastro</h1>
      <form className="mx-auto flex w-full max-w-[800px] flex-col gap-4 p-8">
        <div className="space-y-2">
          <label htmlFor="email">E-mail</label>
          <Input id="email" placeholder="Digite seu e-mail" />
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

        <div className="flex items-center gap-4">
          <div className="w-full space-y-2">
            <label htmlFor="phone">Telefone</label>
            <Input id="phone" type="tel" placeholder="Digite seu telefone" />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="birthday">Data de nascimento</label>
            <Input id="birthday" placeholder="00/00/00" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="meetUs">Onde nos conheceu?</label>
          <Input id="meetUs" type="tel" placeholder="Selecione uma opção" />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="newsletter" id="newsletter" />
          <label htmlFor="newsletter" className="text-sm text-zinc-500">
            Quero receber descontos e ofertas exclusivas por e-mail
          </label>
        </div>

        <Button className="ml-auto max-w-52">
          Continuar
          <ArrowRight className="h-5 w-5" />
        </Button>
      </form>
    </div>
  )
}
