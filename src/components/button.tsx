import React from "react"
import { cva, VariantProps } from "class-variance-authority"

export const buttonVariants = cva(
  "rounded-lg font-semibold text-lg font-mono",
  {
    variants: {
      variant: {
        primary: "bg-cyan-500 text-white hover:bg-cyan-600",
        secondary: "bg-slate-300 text-white hover:bg-slate-600",
      },
      size: {
        lg: "py-4 px-8",
        md: "py-3 px-6",
        sm: "py-2 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label: string
  }
/**
 * Primary UI component for user interaction
 */

export const Button = ({
  variant = "primary",
  size = "md",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size })}
      {...props}
    >
      {label}
    </button>
  )
}
