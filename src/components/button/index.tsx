import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'rounded-md font-semibold outline-none transition flex items-center justify-center gap-2',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900',
    'active:opacity-80 disabled:opacity-60 ',
  ],

  variants: {
    variant: {
      primary: 'bg-zinc-900 text-white [&:not(:disabled)]:hover:bg-zinc-600',
      secondary:
        'bg-zinc-200 text-zinc-900 [&:not(:disabled)]:hover:bg-zinc-300',
      ghost: 'hover:bg-zinc-50 shadow-none text-zinc-900',
      outline:
        'border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-zinc-100',
      link: 'hover:text-zinc-900 shadow-none text-zinc-500',
    },

    size: {
      lg: 'p-4',
      md: 'px-3 py-2',
      sm: 'p-2',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
