import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground [&>svg]:text-white hover:bg-btn-hover focus:bg-btn-focus",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary bg-transparent hover:border-btn-hover hover:text-btn-hover focus:border-btn-focus focus:text-btn-focus",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-primary hover:text-btn-hover focus:text-btn-focus",
        link: "text-link underline-offset-4 underline hover:text-link-hover focus:text-link-focus",
      },
      size: {
        default: "h-10 px-7 py-2 gap-2 text-base leading-normal [&>svg]:h-4.5 [&>svg]:w-4.5",
        sm: "h-7 px-3.5 py-1 gap-1 text-sm leading-snug [&>svg]:h-4 [&>svg]:w-4",
        lg: "h-12 px-8 py-3 text-lg leading-snug [&>svg]:h-4.5 [&>svg]:w-4.5",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
