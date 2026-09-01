import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-sm border border-solid text-action font-action whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary px-6 text-primary-foreground hover:bg-primary/90",
        secondary: "border-border bg-secondary px-6 text-secondary-foreground hover:bg-muted",
        outline: "border-border bg-transparent px-6 text-foreground hover:bg-muted",
        ghost: "border-transparent bg-transparent px-4 text-foreground hover:bg-muted",
        link: "min-h-11 rounded-none border-x-0 border-t-0 border-b-primary bg-transparent px-0 text-foreground"
      },
      size: {
        default: "h-12",
        compact: "h-12 px-4",
        icon: "size-12 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

function Button({ className, variant, size, asChild = false, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
