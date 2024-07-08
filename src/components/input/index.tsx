import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, type, ...props }, ref) => {
    return (
      <div className="flex w-full items-center gap-2 rounded-lg border-2 border-zinc-300 px-4 py-3 focus-within:border-zinc-500">
        <input
          type={type}
          autoComplete="off"
          className="w-full bg-transparent font-medium text-zinc-700 outline-none placeholder:text-zinc-400"
          ref={ref}
          {...props}
        />
        {children}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
