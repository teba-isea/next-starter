import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "rounded font-semibold text-lg font-mono mx-1 text-sm transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-gray-700 text-white hover:bg-gray-800",
        secondary: "bg-slate-300 text-white hover:bg-slate-600",
        ghost: "bg-transparent border border-gray-700 ",
      },
      size: {
        lg: "py-3 px-6",
        md: "py-2 px-4",
        sm: "py-1 px-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };
/**
 * Primary UI component for user interaction
 */

export const Button = ({
  variant = "primary",
  size = "md",
  label,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, size })}
      {...props}
    >
      {leftIcon ? leftIcon : null}
      {label}
      {rightIcon ? rightIcon : null}
    </button>
  );
};
