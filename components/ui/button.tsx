import Link from "next/link";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  [
    "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap",
    "rounded-[var(--radius-btn)] transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "active:translate-y-px",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary-400 text-indigo-900 shadow-[var(--shadow-elev-2)] hover:bg-primary-500 hover:text-white disabled:bg-ink-300 disabled:text-ink-500 disabled:shadow-none",
        indigo:
          "bg-indigo-600 text-white shadow-[var(--shadow-elev-2)] hover:bg-indigo-700 disabled:bg-ink-300 disabled:text-ink-500 disabled:shadow-none",
        accent:
          "bg-accent-400 text-indigo-900 shadow-[var(--shadow-elev-2)] hover:bg-accent-500 hover:text-white",
        outlined:
          "border-2 border-primary-400 text-primary-500 hover:bg-primary-50 disabled:border-ink-300 disabled:text-ink-400",
        ghost:
          "text-indigo-600 hover:bg-primary-50 disabled:text-ink-400",
        link:
          "text-accent-400 hover:text-accent-500 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11 p-0",
      },
      block: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonBase = VariantProps<typeof buttonStyles> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps = ButtonBase & React.ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = ButtonBase & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size, block }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export function ButtonLink({ className, variant, size, block, href, ...props }: LinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonStyles({ variant, size, block }), className)}
      {...props}
    />
  );
}

export { buttonStyles };
