'use client'

import Link from 'next/link'
import { Button } from '../button'
import { X } from 'lucide-react'
import { useState } from 'react'

export function Alert() {
  const [isActiveAlert, setIsActiveAlert] = useState(true)

  if (isActiveAlert) {
    return (
      <div className="bg-zinc-900 p-2 text-xs text-zinc-100 lg:text-sm">
        <div className="mx-auto flex w-full max-w-[1280px] items-center">
          <span className="w-full lg:text-center">
            Cadastre-se e <strong>GANHE 20%</strong> na primeira compra.{' '}
            <Link href="register" className="font-semibold underline">
              Cadastrar-se agora
            </Link>
          </span>

          <Button
            variant="link"
            className="text-zinc-100 hover:text-zinc-300"
            onClick={() => setIsActiveAlert(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }
}
