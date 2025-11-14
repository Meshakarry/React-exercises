import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  `
    bg-transparent border border-input placeholder:text-[#ABA7AF] text-sm text-foreground flex field-sizing-content min-h-16 w-full rounded transition-[color,box-shadow] outline-none
    selection:bg-primary selection:text-primary-foreground
    disabled:bg-disabled disabled:pointer-events-none disabled:cursor-not-allowed
    focus-visible:border-primary focus-visible:[&>svg]:text-primary focus-visible:shadow-input
    aria-invalid:border-destructive
  `,
  {
    variants: {
      size: {
        sm: "px-3 py-2",
        default: "p-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Textarea({ className, size="default", ...props }: Omit<React.ComponentProps<"textarea">, "size"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size }), className)}
      {...props}
    />
  )
}

export { Textarea }
