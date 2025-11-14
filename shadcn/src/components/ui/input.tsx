import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  `
    bg-transparent placeholder:text-[#ABA7AF] text-sm text-foreground border border-input w-full min-w-0 rounded-xs transition-[color,box-shadow] outline-none
    selection:bg-primary selection:text-primary-foreground
    file:inline-flex file:h-7 file:border-0 file:text-sm file:font-medium file:text-foreground
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

function Input({ className, type, size = "default", ...props }: Omit<React.ComponentProps<"input">, "size"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={size}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  )
}

export { Input }
