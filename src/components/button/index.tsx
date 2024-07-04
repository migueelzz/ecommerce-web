import React from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'rounded-lg font-semibold outline-none transition',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900',
    'active:opacity-80 disabled:opacity-60 ',
  ],

  variants: {
    variant: {
      primary: 'bg-zinc-900 text-white [&:not(:disabled)]:hover:bg-zinc-700',
      secondary: 'bg-zinc-300 text-white [&:not(:disabled)]:hover:bg-zinc-500',
      ghost: 'hover:bg-zinc-50 shadow-none text-zinc-500 dark:text-zinc-400',
      outline: 'border-2 border-zinc-300 text-zinc-400 hover:bg-zinc-50',
      link: 'hover:text-zinc-700 shadow-none text-zinc-500',
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
