"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const liquidButtonVariants = cva(
  "group inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border px-6 py-3 text-sm font-medium tracking-[0.22em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DFC099] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0c0a] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-white/15 bg-white/8 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl hover:border-[#DFC099]/45 hover:bg-white/12 hover:text-[#FFF4E6] hover:shadow-[0_0_0_1px_rgba(223,192,153,0.12),0_20px_50px_rgba(0,0,0,0.32)]",
        secondary:
          "border-[#DFC099]/25 bg-[#DFC099]/10 text-[#FFF1DD] shadow-[0_0_0_1px_rgba(223,192,153,0.08),0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl hover:border-[#DFC099]/55 hover:bg-[#DFC099]/16 hover:text-white",
      },
      size: {
        default: "min-h-[3.25rem]",
        sm: "min-h-[2.75rem] px-5 text-[0.68rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean;
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(liquidButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

LiquidButton.displayName = "LiquidButton";

export default LiquidButton;