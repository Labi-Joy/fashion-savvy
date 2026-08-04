import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Component = Tag as "div";
  return <Component className={cn("container-page", className)}>{children}</Component>;
}
