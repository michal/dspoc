import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

import "./buttons.css";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  asChild,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={clsx("button", {
        [`variant-${variant}`]: true,
        [`size-${size}`]: true,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}
